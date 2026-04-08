'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const secondaryButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-magenta disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
  {
    variants: {
      size: {
        sm: 'h-8 px-4 text-xs',
        default: 'h-10 px-8 py-2 text-sm',
        lg: 'h-12 px-10 text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof secondaryButtonVariants> {
  asChild?: boolean;
}

const SecondaryButton = React.forwardRef<
  HTMLButtonElement,
  SecondaryButtonProps
>(({ className, size, disabled, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled}
    className={cn(
      secondaryButtonVariants({ size }),
      'bg-gradient-primary border-2 border-purple-light text-text-primary',
      !disabled && 'shadow-glow-magenta hover:scale-105 active:bg-gradient-reverse active:shadow-glow-intense',
      disabled && 'hover:scale-100',
      className
    )}
    {...props}
  />
));

SecondaryButton.displayName = 'SecondaryButton';

export { SecondaryButton, secondaryButtonVariants };
