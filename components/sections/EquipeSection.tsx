import Link from "next/link";
import Image from "next/image";

export default function EquipeSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/equipe-green-glisse.jpg"
              alt="L'équipe Green Glisse devant la tente jaune et blanche sur la plage"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Texte */}
          <div>
            <p
              className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Qui sommes-nous ?
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Une aventure humaine portée par des passionnés
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Notre école, bien plus qu&apos;une simple initiation au surf, est une aventure humaine portée par une famille de passionnés. Plongez dans une expérience immersive unique, guidé par des experts qui transmettent leur amour de la glisse.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Depuis 2019, nous accueillons chaque saison des centaines de surfeurs de tous âges sur la magnifique Côte des Basques, l&apos;une des plus belles plages de surf d&apos;Europe.
            </p>
            <Link
              href="/ecole"
              className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#52B788] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Découvrir l&apos;équipe
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
