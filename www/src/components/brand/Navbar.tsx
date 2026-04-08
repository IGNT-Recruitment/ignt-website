'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  links?: Array<{
    href: string;
    label: string;
    active?: boolean;
  }>;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo,
      links = [],
      mobileMenuOpen = false,
      onMobileMenuToggle,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(mobileMenuOpen);

    const handleMenuToggle = () => {
      const newState = !isOpen;
      setIsOpen(newState);
      onMobileMenuToggle?.();
    };

    return (
      <nav
        ref={ref}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-accent-purple/10',
          'h-16 md:h-20',
          className
        )}
        {...props}
      >
        <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl md:text-2xl">
            {logo || (
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IGNT
              </span>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-semibold transition-all duration-300 pb-2 border-b-2',
                  link.active
                    ? 'text-text-primary border-accent-purple shadow-glow-purple'
                    : 'text-text-secondary border-transparent hover:text-text-primary hover:border-accent-purple hover:shadow-glow-purple'
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            <span
              className={cn(
                'block h-0.5 w-full bg-text-primary transition-all duration-300',
                isOpen ? 'rotate-45 translate-y-2' : ''
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full bg-text-primary transition-all duration-300',
                isOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'block h-0.5 w-full bg-text-primary transition-all duration-300',
                isOpen ? '-rotate-45 -translate-y-2' : ''
              )}
            />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-bg-primary border-b border-accent-purple/10 py-4 px-4">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-lg',
                    link.active
                      ? 'text-text-primary bg-accent-purple/20 shadow-glow-purple'
                      : 'text-text-secondary hover:text-text-primary hover:bg-accent-purple/10'
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';

export { Navbar };
