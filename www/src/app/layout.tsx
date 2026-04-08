import type { Metadata } from 'next';
import { Script } from 'next/script';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'IGNT — Recruitment Platform voor MSPs',
  description:
    'Vind je perfecte match in het MSP-landschap. IGNT verbindt werkgevers en IT-professionals.',
  openGraph: {
    title: 'IGNT — Steek de vonk aan',
    description:
      'Recruitment platform gericht op MKB Managed Service Providers',
    url: 'https://ignt.nl',
    siteName: 'IGNT',
    images: [
      {
        url: 'https://ignt.nl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IGNT Recruitment',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        {/* Cookiebot */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID}
          async
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
