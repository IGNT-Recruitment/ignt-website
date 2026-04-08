'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  contactEmail?: string;
  contactPhone?: string;
  privacyHref?: string;
  cookieNotice?: boolean;
  onCookieClose?: () => void;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      contactEmail = 'ramon@ignt.ai',
      contactPhone = '+31 (0)6 1234 5678',
      privacyHref = '/privacy',
      cookieNotice = true,
      onCookieClose,
      ...props
    },
    ref
  ) => {
    const [showCookieNotice, setShowCookieNotice] = React.useState(
      cookieNotice
    );

    const handleCookieClose = () => {
      setShowCookieNotice(false);
      onCookieClose?.();
    };

    return (
      <>
        <footer
          ref={ref}
          className={cn(
            'bg-bg-primary border-t border-accent-purple/10 py-12 md:py-16',
            className
          )}
          {...props}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 pb-8 border-b border-accent-purple/10">
              {/* Logo/Branding */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  IGNT
                </h3>
                <p className="text-text-secondary text-sm">
                  Empowering communities with AI recruitment.
                </p>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-text-primary">Contact</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-text-secondary hover:text-accent-magenta transition-colors duration-300"
                  >
                    {contactEmail}
                  </a>
                  <a
                    href={`tel:${contactPhone}`}
                    className="text-text-secondary hover:text-accent-magenta transition-colors duration-300"
                  >
                    {contactPhone}
                  </a>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-text-primary">Legal</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href={privacyHref}
                    className="text-text-secondary hover:text-accent-magenta transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#terms"
                    className="text-text-secondary hover:text-accent-magenta transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-text-secondary">
              <p>
                &copy; {new Date().getFullYear()} IGNT. All rights reserved.
              </p>
              <p>Built with care for community recruitment.</p>
            </div>
          </div>
        </footer>

        {/* Cookie Notice */}
        {showCookieNotice && (
          <div className="fixed bottom-0 left-0 right-0 bg-bg-secondary border-t border-accent-purple/30 shadow-card p-4 md:p-6 z-40">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-sm text-text-secondary flex-1">
                We use cookies to enhance your experience. By continuing to
                browse, you agree to our{' '}
                <a
                  href={privacyHref}
                  className="text-accent-purple hover:text-accent-magenta transition-colors duration-300"
                >
                  privacy policy
                </a>
                .
              </p>
              <button
                onClick={handleCookieClose}
                className="flex-shrink-0 px-6 py-2 rounded-full bg-accent-purple text-text-primary font-semibold text-sm transition-all duration-300 hover:shadow-glow-intense"
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
);

Footer.displayName = 'Footer';

export { Footer };
