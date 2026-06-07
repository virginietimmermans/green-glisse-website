const arguments_ = [
  {
    icon: "💰",
    titre: "L'école la moins chère de Biarritz",
    description: "Tarifs accessibles toute l'année, hors saison ou en juillet-août. Qualité premium, prix juste.",
  },
  {
    icon: "🩺",
    titre: "Secouriste sur place",
    description: "Votre sécurité est notre priorité absolue. Un secouriste formé est présent à chaque session.",
  },
  {
    icon: "🌊",
    titre: "Surf responsable",
    description: "Nous sensibilisons chaque surfeur à la préservation de l'environnement marin et des océans.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    titre: "Cours pour tous",
    description: "De 5 ans aux seniors, débutants et confirmés — notre équipe s'adapte à chaque profil.",
  },
];

export default function ArgumentsSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#2D6A4F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Pourquoi choisir Green Glisse ?
          </h2>
          <p className="text-[#F4E9CD] text-lg max-w-2xl mx-auto">
            Plus qu&apos;une école, une passion partagée. Voici ce qui nous rend uniques sur la Côte des Basques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {arguments_.map((arg) => (
            <div
              key={arg.titre}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
            >
              <div className="text-5xl mb-4">{arg.icon}</div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {arg.titre}
              </h3>
              <p className="text-[#F4E9CD] text-sm leading-relaxed">{arg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
