'use client';

import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
}

export function GradientText({
  children,
  from = '#7C3AED',
  to = '#D946EF',
  className = '',
}: GradientTextProps) {
  return (
    <span
      style={{
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      className={`font-bold ${className}`}
    >
      {children}
    </span>
  );
}
