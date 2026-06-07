import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Source_Sans_3, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenglisse.com"),
  title: {
    default: "Green Glisse — École de surf à Biarritz, Côte des Basques",
    template: "%s | Green Glisse Surf School",
  },
  description:
    "Cours de surf à Biarritz pour tous niveaux. L'école la moins chère de la Côte des Basques. Réservez en ligne !",
  keywords: ["école de surf", "Biarritz", "Côte des Basques", "cours de surf", "surf débutant"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.greenglisse.com",
    siteName: "Green Glisse Surf School",
    images: [
      {
        url: "/images/hero-surf-biarritz.jpg",
        width: 1200,
        height: 630,
        alt: "Green Glisse Surf School — Biarritz",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Green Glisse Surf School",
  description: "École de surf à Biarritz, Côte des Basques",
  url: "https://www.greenglisse.com",
  telephone: "+33621772546",
  email: "greenglisse.surfschool@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plage de la Côte des Basques",
    addressLocality: "Biarritz",
    postalCode: "64200",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.477917,
    longitude: -1.566521,
  },
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${montserrat.variable} ${sourceSans.variable} ${dancingScript.variable} bg-[#FAFAF8] text-[#1C1C1C] antialiased`}
        style={{ fontFamily: "var(--font-source), sans-serif" }}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
