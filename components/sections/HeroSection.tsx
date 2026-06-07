import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-surf-biarritz.jpg"
          alt="Groupe de surfeurs avec planches colorées à Biarritz"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <p
          className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Plage de la Côte des Basques, Biarritz
        </p>
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Green Glisse
        </h1>
        <p
          className="text-3xl sm:text-4xl text-[#F4E9CD] mb-4"
          style={{ fontFamily: "var(--font-dancing), cursive" }}
        >
          Créateur de surfeurs
        </p>
        <p
          className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-source), sans-serif" }}
        >
          École de surf pour tous les niveaux — de 5 ans aux seniors. L&apos;école la plus accessible de Biarritz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/reservation"
            className="bg-[#2D6A4F] hover:bg-[#52B788] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Réserver maintenant
          </Link>
          <Link
            href="/cours"
            className="border-2 border-white text-white hover:bg-white hover:text-[#2D6A4F] font-bold px-8 py-4 rounded-full text-lg transition-all duration-300"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Voir nos forfaits
          </Link>
        </div>
      </div>

      {/* Flèche animée */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
