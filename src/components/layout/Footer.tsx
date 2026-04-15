import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-purple-400/10 bg-bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-accent-purple mb-4">IGNT</h3>
            <p className="text-text-secondary">
              Recruitment platform gericht op MKB Managed Service Providers.
            </p>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/werkgever"
                  className="text-accent-purple hover:text-accent-magenta transition-colors"
                >
                  Voor werkgevers
                </Link>
              </li>
              <li>
                <Link
                  href="/kandidaat"
                  className="text-accent-purple hover:text-accent-magenta transition-colors"
                >
                  Voor kandidaten
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-accent-purple hover:text-accent-magenta transition-colors"
                >
                  Privacyverklaring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Contact</h4>
            <p className="text-text-secondary mb-2">Ramon van Rossen</p>
            <p className="text-text-secondary mb-2">
              <a
                href="mailto:ramon@ignt.nl"
                className="text-accent-purple hover:text-accent-magenta"
              >
                ramon@ignt.nl
              </a>
            </p>
            <p className="text-text-secondary">
              <a
                href="tel:+31619942283"
                className="text-accent-purple hover:text-accent-magenta"
              >
                06 1994 2283
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-purple-400/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-tertiary text-sm">
            © 2026 IGNT. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
