import { NextResponse } from 'next/server';

export async function middleware() {
  // Middleware disabled for now (rate limiting optional)
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
