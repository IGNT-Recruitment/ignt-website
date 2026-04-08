'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const primaryButtonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-purple disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none',
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

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof primaryButtonVariants> {
  asChild?: boolean;
}

const PrimaryButton = React.forwardRef<
  HTMLButtonElement,
  PrimaryButtonProps
>(({ className, size, disabled, ...props }, ref) => (
  <button
    ref={ref}
    disabled={disabled}
    className={cn(
      primaryButtonVariants({ size }),
      'border-2 border-accent-purple bg-transparent text-text-primary',
      !disabled && 'shadow-glow-purple hover:shadow-glow-intense hover:text-accent-magenta active:bg-gradient-primary active:shadow-glow-intense',
      className
    )}
    {...props}
  />
));

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton, primaryButtonVariants };
