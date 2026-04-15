'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  disabled = false,
  className = '',
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        relative px-8 py-3
        text-white font-semibold text-sm md:text-base
        bg-transparent border-2 border-accent-purple
        rounded-full
        shadow-glow-purple
        hover:shadow-glow-intense hover:text-accent-magenta
        active:bg-gradient-primary active:shadow-glow-intense
        disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        transition-all duration-300
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
