'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

export function SecondaryButton({
  children,
  disabled = false,
  className = '',
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`
        relative px-7 py-2.5
        text-white font-semibold text-sm md:text-base
        bg-gradient-primary border-2 border-accent-purple-light
        rounded-full
        shadow-glow-magenta
        hover:scale-105 hover:shadow-glow-magenta-intense
        active:shadow-glow-intense
        disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        transition-all duration-300 ease-in-out
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
