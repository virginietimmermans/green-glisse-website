import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre équipe — Green Glisse Surf School Biarritz",
  description:
    "Rencontrez nos moniteurs certifiés passionnés de surf. Une équipe humaine et expérimentée à la Côte des Basques.",
};

const equipe = [
  {
    nom: "Julien",
    role: "Fondateur & Moniteur principal",
    description: "Surfeur depuis l'enfance à Biarritz, Julien a fondé Green Glisse en 2019 avec une seule mission : rendre le surf accessible à tous. Diplômé BPJEPS Surf, il transmet sa passion avec une bienveillance et une patience exemplaires.",
    specialite: "Débutants · Cours particuliers",
    image: "/images/equipe-green-glisse.jpg",
  },
  {
    nom: "Sophie",
    role: "Monitrice & Responsable stages enfants",
    description: "Sophie est spécialisée dans les cours enfants et adolescents. Son approche pédagogique unique et son enthousiasme contagieux font d'elle la favorite des petits surfeurs. BPJEPS Surf + brevet de secourisme.",
    specialite: "Enfants · Stages · Initiation",
    image: "/images/instructeur-surf-enfant.jpg",
  },
  {
    nom: "Marc",
    role: "Moniteur & Surfeur compétiteur",
    description: "Ex-compétiteur régional, Marc apporte son expertise technique pour les surfeuses et surfeurs qui veulent vraiment progresser. Il assure également la sécurité en tant que secouriste certifié.",
    specialite: "Perfectionnement · Sécurité",
    image: "/images/surf-vague-biarritz.jpg",
  },
];

const valeurs = [
  {
    titre: "Accessibilité",
    description: "Le surf doit être accessible à tous, quels que soient l'âge, le niveau physique ou le budget.",
    icon: "🌊",
  },
  {
    titre: "Sécurité",
    description: "Chaque session est encadrée par un secouriste certifié. Votre sécurité n'est jamais compromise.",
    icon: "🛡️",
  },
  {
    titre: "Environnement",
    description: "Nous sensibilisons chaque élève au respect de l'océan et à la préservation de l'environnement marin.",
    icon: "🌿",
  },
  {
    titre: "Passion",
    description: "Le surf est avant tout une passion. Nous la transmettons avec authenticité et enthousiasme.",
    icon: "❤️",
  },
];

const materiel = [
  { emoji: "🏄", label: "Planches foam 7'6 à 9'" },
  { emoji: "🏄", label: "Longboards évolutifs" },
  { emoji: "🤿", label: "Combinaisons 3/2mm" },
  { emoji: "🔗", label: "Leashes de sécurité" },
  { emoji: "🎒", label: "Gilets de flottaison (enfants)" },
  { emoji: "🧴", label: "Crème solaire waterproof" },
];

export default function EcolePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-72 sm:h-96">
        <Image
          src="/images/equipe-green-glisse.jpg"
          alt="L'équipe Green Glisse sur la plage de Biarritz"
          fill
          className="object-cover"
          style={{ objectPosition: "center top" }}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <p
              className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Notre école
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              L&apos;équipe Green Glisse
            </h1>
          </div>
        </div>
      </div>

      {/* Histoire */}
      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1C1C1C] mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Notre histoire
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Green Glisse est née en 2019 de la passion d&apos;une famille de surfeurs biarrots. Notre objectif dès le départ : créer une école où le surf rime avec bienveillance, accessibilité et respect de l&apos;environnement.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Depuis, nous avons accompagné des centaines de surfeurs de tous horizons sur la magnifique plage de la Côte des Basques. Chaque saison est une nouvelle aventure humaine, un nouveau sourire à l&apos;arrivée de la première vague.
          </p>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-12 sm:py-20 bg-[#F4E9CD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1C1C1C]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Nos moniteurs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membre) => (
              <div key={membre.nom} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-56">
                  <Image
                    src={membre.image}
                    alt={`${membre.nom} — ${membre.role} chez Green Glisse`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#1C1C1C] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {membre.nom}
                  </h3>
                  <p className="text-[#2D6A4F] font-semibold text-sm mb-3" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                    {membre.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{membre.description}</p>
                  <span className="text-xs bg-[#F4E9CD] text-[#2D6A4F] font-semibold px-3 py-1 rounded-full">
                    {membre.specialite}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 sm:py-24 bg-[#2D6A4F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Nos valeurs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur) => (
              <div key={valeur.titre} className="text-center">
                <div className="text-5xl mb-4">{valeur.icon}</div>
                <h3
                  className="text-lg font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {valeur.titre}
                </h3>
                <p className="text-[#F4E9CD] text-sm leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériel */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-bold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Notre matériel
          </h2>
          <p className="text-gray-600 mb-10">Tout notre matériel est renouvelé chaque saison pour vous garantir les meilleures conditions.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {materiel.map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium text-[#1C1C1C]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1C1C1C] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Rencontrez-nous sur la plage !
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-[#2D6A4F] hover:bg-[#52B788] text-white font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Réserver un cours
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
