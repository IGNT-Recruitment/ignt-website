import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '10 m'),
});

export async function middleware(request: NextRequest) {
  // Only rate limit on POST to funnel routes
  if (
    request.method === 'POST' &&
    (request.nextUrl.pathname.includes('/werkgever') ||
      request.nextUrl.pathname.includes('/kandidaat'))
  ) {
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      'unknown';

    try {
      const { success, pending, limit, reset, remaining } =
        await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests. Try again later.' },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': remaining.toString(),
              'X-RateLimit-Reset': reset.toString(),
            },
          }
        );
      }
    } catch (error) {
      // If rate limiter fails, allow the request through (fail-open)
      console.error('Rate limit check failed:', error);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
