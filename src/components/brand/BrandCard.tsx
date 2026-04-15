'use client';

import { ReactNode } from 'react';

interface BrandCardProps {
  children: ReactNode;
  className?: string;
}

export function BrandCard({ children, className = '' }: BrandCardProps) {
  return (
    <div
      className={`
        bg-bg-secondary
        border border-purple-600 border-opacity-30
        rounded-2xl
        p-8
        shadow-card
        hover:scale-102 hover:shadow-purple-500 hover:shadow-lg
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
