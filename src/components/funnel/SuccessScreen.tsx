'use client';

import Link from 'next/link';
import { GradientText } from '@/components/brand/GradientText';
import { SecondaryButton } from '@/components/brand/SecondaryButton';

interface SuccessScreenProps {
  title: string;
  message: string;
  ctaText?: string;
  ctaHref?: string;
}

export function SuccessScreen({
  title,
  message,
  ctaText = 'Terug naar home',
  ctaHref = '/',
}: SuccessScreenProps) {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <svg
            className="mx-auto w-24 h-24"
            fill="none"
            stroke="url(#gradient)"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          <GradientText>{title}</GradientText>
        </h1>

        <p className="text-text-secondary text-lg mb-8">{message}</p>

        <Link href={ctaHref}>
          <SecondaryButton className="w-full md:w-auto">
            {ctaText}
          </SecondaryButton>
        </Link>
      </div>
    </div>
  );
}
