import Link from "next/link";
import Image from "next/image";

const cours = [
  {
    titre: "Cours collectif",
    description: "Partagez l'expérience du surf en groupe dans une ambiance conviviale. Idéal pour les débutants comme pour progresser.",
    prix: "dès 45 €",
    image: "/images/cours-collectif-enfants.jpg",
    imageAlt: "Moniteur de surf célébrant avec ses élèves dans l'eau à Biarritz",
    duree: "1h30",
    inclus: "Matériel inclus",
    couleur: "from-[#2D6A4F]",
  },
  {
    titre: "Cours particulier",
    description: "Un suivi personnalisé et intensif avec votre moniteur dédié. Progressez deux fois plus vite.",
    prix: "dès 100 €",
    image: "/images/cours-particulier-biarritz.jpg",
    imageAlt: "Moniteur accompagnant un élève sur une vague en mer",
    duree: "1h30",
    inclus: "Matériel inclus",
    couleur: "from-[#1C1C1C]",
  },
  {
    titre: "Stages & Forfaits",
    description: "3, 5 ou 10 cours pour une progression garantie. Le meilleur rapport qualité-prix pour surfer tout l'été.",
    prix: "dès 120 €",
    image: "/images/briefing-surf-plage.jpg",
    imageAlt: "Briefing de surf sur la plage de Biarritz",
    duree: "3 à 10 cours",
    inclus: "Matériel inclus",
    couleur: "from-[#52B788]",
  },
];

export default function CoursSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Nos formules
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Cours pour tous les niveaux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cours.map((c) => (
            <div
              key={c.titre}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.couleur} to-transparent opacity-40`} />
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#1C1C1C] mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {c.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{c.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {c.duree}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#52B788]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {c.inclus}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold text-[#2D6A4F]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {c.prix}
                  </span>
                  <Link
                    href="/reservation"
                    className="bg-[#2D6A4F] hover:bg-[#52B788] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/cours"
            className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Voir tous les tarifs
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
