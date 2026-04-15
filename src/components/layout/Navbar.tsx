import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-purple-400/10 bg-bg-primary/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="IGNT Logo"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/voor-werkgevers"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Voor werkgevers
          </Link>
          <Link
            href="/voor-kandidaten"
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

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/voor-werkgevers"
            className="px-6 py-2 rounded-full border-2 border-accent-purple text-white hover:shadow-glow-purple transition-all"
          >
            Werkgever
          </Link>
          <Link
            href="/voor-kandidaten"
            className="px-6 py-2 rounded-full bg-gradient-primary border-2 border-accent-purple-light text-white hover:shadow-glow-magenta transition-all"
          >
            Kandidaat
          </Link>
        </div>
      </div>
    </nav>
  );
}
