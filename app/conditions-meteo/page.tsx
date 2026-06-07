import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions météo surf Biarritz — Côte des Basques",
  description:
    "Consultez les conditions de surf en direct à Biarritz. Hauteur de houle, vent, marées pour la plage de la Côte des Basques.",
};

const ressources = [
  {
    nom: "Surf Report",
    description: "Prévisions surf professionnelles pour Biarritz",
    url: "https://www.surf-report.com/meteo-surf/biarritz-cote-des-basques--49.html",
    icon: "🌊",
    color: "bg-blue-600",
  },
  {
    nom: "Magic Seaweed",
    description: "Prévisions houle mondiale, très précises",
    url: "https://www.magicseaweed.com/Cote-des-Basques-Surf-Report/286/",
    icon: "🔮",
    color: "bg-indigo-600",
  },
  {
    nom: "Windguru",
    description: "Prévisions vent et météo marine",
    url: "https://www.windguru.cz/32163",
    icon: "💨",
    color: "bg-teal-600",
  },
  {
    nom: "Meteoconsult Surf",
    description: "Météo surf française détaillée",
    url: "https://www.meteoconsult.fr",
    icon: "☁️",
    color: "bg-gray-600",
  },
];

const conseils = [
  {
    condition: "Houle < 0.5m",
    niveau: "Très calme",
    couleur: "bg-green-100 text-green-800",
    conseil: "Idéal pour les tout débutants et les enfants.",
  },
  {
    condition: "Houle 0.5m–1m",
    niveau: "Parfait",
    couleur: "bg-[#2D6A4F]/10 text-[#2D6A4F]",
    conseil: "Conditions idéales pour tous les niveaux.",
  },
  {
    condition: "Houle 1m–1.5m",
    niveau: "Bon",
    couleur: "bg-yellow-100 text-yellow-800",
    conseil: "Pour intermédiaires et confirmés. Briefing renforcé.",
  },
  {
    condition: "Houle > 1.5m",
    niveau: "Avancé",
    couleur: "bg-orange-100 text-orange-800",
    conseil: "Cours annulés pour débutants. Contactez-nous.",
  },
];

export default function ConditionsMeteoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-800 to-[#2D6A4F] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-5xl mb-4">🌊</div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Conditions météo surf
          </h1>
          <p className="text-blue-100 text-lg">
            Côte des Basques, Biarritz — Consultez les conditions avant votre session
          </p>
        </div>
      </div>

      {/* Liens prévisions */}
      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1C1C1C] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Sites de prévisions recommandés
            </h2>
            <p className="text-gray-600">Ces sites vous donnent les conditions en temps réel pour la Côte des Basques.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {ressources.map((r) => (
              <a
                key={r.nom}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#2D6A4F] flex items-start gap-4"
              >
                <div className={`${r.color} text-white p-3 rounded-xl text-2xl flex-shrink-0`}>
                  {r.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-[#1C1C1C] mb-1 group-hover:text-[#2D6A4F] transition-colors"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {r.nom} ↗
                  </h3>
                  <p className="text-gray-600 text-sm">{r.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Guide lecture des conditions */}
          <div>
            <h2
              className="text-2xl font-bold text-[#1C1C1C] mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Guide de lecture des conditions
            </h2>
            <div className="space-y-3">
              {conseils.map((c) => (
                <div key={c.condition} className="bg-white rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 sm:w-64">
                    <span className="text-sm font-mono font-bold text-[#1C1C1C]">{c.condition}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.couleur}`}>
                      {c.niveau}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{c.conseil}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annulation cours */}
      <section className="py-12 bg-[#F4E9CD]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Politique d&apos;annulation météo
          </h2>
          <p className="text-gray-600 mb-6">
            En cas de conditions dangereuses (tempête, houle &gt; 2m, orage), les cours sont annulés sans frais et reportés au prochain créneau disponible. Nous vous prévenons toujours par SMS/WhatsApp.
          </p>
          <a
            href="https://wa.me/33621772546"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2D6A4F] hover:bg-[#52B788] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            📱 Vérifier les conditions par WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
