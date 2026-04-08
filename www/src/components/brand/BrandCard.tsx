'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const BrandCard = React.forwardRef<HTMLDivElement, BrandCardProps>(
  ({ className, hover = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-purple-400/30 bg-bg-secondary p-6 shadow-card md:p-8 md:rounded-2xl',
        hover && 'transition-all duration-300 hover:scale-102 hover:shadow-glow-purple',
        className
      )}
      {...props}
    />
  )
);

BrandCard.displayName = 'BrandCard';

export { BrandCard };
