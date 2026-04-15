import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "IGNT — Recruitment Platform voor MSPs",
  description:
    "Vind je perfecte match in het MSP-landschap. IGNT verbindt werkgevers en IT-professionals.",
  openGraph: {
    title: "IGNT — Steek de vonk aan",
    description:
      "Recruitment platform gericht op MKB Managed Service Providers",
    url: "https://ignt.nl",
    siteName: "IGNT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-bg-primary text-text-primary font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
