"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/cours", label: "Nos cours" },
  { href: "/ecole", label: "Notre école" },
  { href: "/conditions-meteo", label: "Conditions météo" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#2D6A4F] ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Green Glisse
            </span>
            <span
              className="text-base hidden sm:block text-[#F4E9CD]"
              style={{ fontFamily: "var(--font-dancing), cursive" }}
            >
              Créateur de surfeurs
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#52B788] ${
                  pathname === link.href ? "text-[#52B788]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Langue FR/EN */}
            <button
              className="hidden sm:flex items-center gap-1 text-sm font-medium px-2 py-1 rounded transition-colors text-white hover:text-[#F4E9CD]"
            >
              🇫🇷 FR
            </button>

            {/* Bouton Réserver */}
            <Link
              href="/reservation"
              className="bg-[#2D6A4F] hover:bg-[#52B788] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 whitespace-nowrap"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Réserver
            </Link>

            {/* Burger mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#2D6A4F] border-t border-[#52B788]/30 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-base font-semibold transition-colors hover:text-[#52B788] hover:bg-white/10 ${
                  pathname === link.href ? "text-[#52B788]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 border-t border-[#52B788]/30 mt-2">
              <Link
                href="/reservation"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#2D6A4F] hover:bg-[#52B788] text-white font-semibold px-4 py-3 rounded-full transition-colors"
              >
                Réserver maintenant
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
