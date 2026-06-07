const chiffres = [
  {
    icon: "🏅",
    valeur: "3",
    label: "Moniteurs certifiés",
    description: "Diplômés d'État BPJEPS Surf",
  },
  {
    icon: "📅",
    valeur: "Depuis 2019",
    label: "Cours de surf",
    description: "Une école avec de l'expérience",
  },
  {
    icon: "🏄",
    valeur: "100%",
    label: "Matériel neuf",
    description: "Planches et combinaisons incluses",
  },
  {
    icon: "🩺",
    valeur: "✓",
    label: "Secouriste sur place",
    description: "Votre sécurité est notre priorité",
  },
];

export default function ChiffresSection() {
  return (
    <section className="bg-[#F4E9CD] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {chiffres.map((item) => (
            <div
              key={item.label}
              className="text-center p-4 sm:p-6"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div
                className="text-2xl sm:text-3xl font-bold text-[#2D6A4F] mb-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {item.valeur}
              </div>
              <div
                className="text-[#1C1C1C] font-semibold text-sm sm:text-base mb-1"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {item.label}
              </div>
              <div className="text-gray-600 text-xs sm:text-sm">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
