'use client';

import * as React from 'react';
import Link from 'next/link';
import { PrimaryButton, SecondaryButton } from '@/components/brand';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-purple-400/10 bg-bg-primary/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            IGNT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/werkgever"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Voor werkgevers
          </Link>
          <Link
            href="/kandidaat"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Voor kandidaten
          </Link>
          <Link
            href="/privacy"
            className="text-text-secondary hover:text-text-primary transition-colors text-sm"
          >
            Privacy
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <PrimaryButton
            asChild
            size="sm"
          >
            <Link href="/werkgever">Ik ben werkgever</Link>
          </PrimaryButton>
          <SecondaryButton
            asChild
            size="sm"
          >
            <Link href="/kandidaat">Ik ben kandidaat</Link>
          </SecondaryButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary"
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-400/10 p-4 space-y-3">
          <Link href="/werkgever" className="block text-text-secondary hover:text-text-primary">
            Voor werkgevers
          </Link>
          <Link href="/kandidaat" className="block text-text-secondary hover:text-text-primary">
            Voor kandidaten
          </Link>
          <Link href="/privacy" className="block text-text-secondary hover:text-text-primary text-sm">
            Privacy
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };
