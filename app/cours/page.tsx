import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos forfaits surf — Cours collectifs et particuliers à Biarritz",
  description:
    "Découvrez nos tarifs de cours de surf à Biarritz. Cours collectifs dès 45€, cours particuliers, forfaits 3/5/10 cours. Matériel inclus.",
};

const tarifsData = [
  {
    formule: "Cours collectif",
    horsAison: "45 €",
    hauteAison: "50 €",
    duree: "1h30",
    details: "Groupes de 8 personnes max. Idéal pour débuter ou progresser.",
    inclus: ["Combinaison", "Planche", "Assurance"],
    highlight: false,
  },
  {
    formule: "Cours particulier",
    horsAison: "100 €",
    hauteAison: "150 €",
    duree: "1h30",
    details: "Moniteur dédié 100% à vous. Progression maximale garantie.",
    inclus: ["Combinaison", "Planche", "Assurance"],
    highlight: true,
  },
  {
    formule: "Forfait Rider (3 cours)",
    horsAison: "120 €",
    hauteAison: "140 €",
    duree: "3 × 1h30",
    details: "Parfait pour un week-end ou un court séjour à Biarritz.",
    inclus: ["Combinaison", "Planche", "Assurance"],
    highlight: false,
  },
  {
    formule: "Forfait Passion (5 cours)",
    horsAison: "190 €",
    hauteAison: "210 €",
    duree: "5 × 1h30",
    details: "Notre formule la plus populaire pour une vraie progression.",
    inclus: ["Combinaison", "Planche", "Assurance"],
    highlight: false,
  },
  {
    formule: "Forfait Adhésion (10 cours)",
    horsAison: "300 €",
    hauteAison: "390 €",
    duree: "10 × 1h30",
    details: "Pour les passionnés qui veulent surfer tout l'été.",
    inclus: ["Combinaison", "Planche", "Assurance", "Priorité de réservation"],
    highlight: false,
  },
];

export default function CoursPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#2D6A4F] py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Nos formules
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Cours & Forfaits surf
          </h1>
          <p className="text-[#F4E9CD] text-lg max-w-2xl mx-auto">
            Des tarifs accessibles toute l&apos;année. Matériel inclus, cours pour tous les niveaux, de 5 ans aux seniors.
          </p>
        </div>
      </div>

      {/* Tableau des tarifs */}
      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1C1C1C] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Tarifs 2025
            </h2>
            <div className="inline-flex items-center gap-2 bg-[#F4E9CD] px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-[#2D6A4F]">🌿 Hors saison</span>
              <span className="text-gray-400">|</span>
              <span className="text-sm font-medium text-orange-600">☀️ Juillet–Août</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {tarifsData.map((tarif) => (
              <div
                key={tarif.formule}
                className={`rounded-2xl p-6 sm:p-8 border-2 transition-shadow hover:shadow-lg ${
                  tarif.highlight
                    ? "border-[#2D6A4F] bg-[#2D6A4F]/5"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3
                        className="text-xl font-bold text-[#1C1C1C]"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {tarif.formule}
                      </h3>
                      {tarif.highlight && (
                        <span className="bg-[#2D6A4F] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          Populaire
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{tarif.details}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-[#F4E9CD] text-[#2D6A4F] font-semibold px-2 py-1 rounded-full">
                        ⏱ {tarif.duree}
                      </span>
                      {tarif.inclus.map((item) => (
                        <span key={item} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 sm:gap-8 sm:text-right">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">🌿 Hors saison</p>
                      <p
                        className="text-2xl font-bold text-[#2D6A4F]"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {tarif.horsAison}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">☀️ Juil–Août</p>
                      <p
                        className="text-2xl font-bold text-orange-600"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {tarif.hauteAison}
                      </p>
                    </div>
                    <Link
                      href="/reservation"
                      className={`hidden sm:inline-flex items-center gap-1 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap ${
                        tarif.highlight
                          ? "bg-[#2D6A4F] hover:bg-[#52B788] text-white"
                          : "border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white"
                      }`}
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
                <div className="sm:hidden mt-4">
                  <Link
                    href="/reservation"
                    className="block w-full text-center bg-[#2D6A4F] hover:bg-[#52B788] text-white font-semibold py-3 rounded-full transition-colors text-sm"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    Réserver
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-12 bg-[#F4E9CD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-[#1C1C1C] mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Inclus dans tous les cours
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {/* Combinaison */}
            <div className="text-center">
              <div className="flex justify-center mb-3 text-4xl">🤿</div>
              <p className="text-sm font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Combinaison</p>
            </div>
            {/* Planche de surf */}
            <div className="text-center">
              <div className="flex justify-center mb-3 text-4xl">🏄</div>
              <p className="text-sm font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Planche de surf</p>
            </div>
            {/* Assurance */}
            <div className="text-center">
              <div className="flex justify-center mb-3 text-4xl">🛡️</div>
              <p className="text-sm font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Assurance</p>
            </div>
            {/* Secouriste sur place */}
            <div className="text-center">
              <div className="flex justify-center mb-3 text-4xl">🩺</div>
              <p className="text-sm font-semibold text-[#1C1C1C]" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Secouriste sur place</p>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white rounded-xl inline-block">
            <p className="text-sm text-gray-600">
              <strong>À prévoir :</strong> Serviette, savoir nager, bonne humeur 🌊
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1C1C1C] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Prêt à surfer ?
          </h2>
          <p className="text-gray-400 mb-8">Réservez en ligne ou contactez-nous par téléphone ou WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-[#2D6A4F] hover:bg-[#52B788] text-white font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Réserver maintenant
            </Link>
            <a
              href="tel:+33621772546"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              📞 06 21 77 25 46
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
