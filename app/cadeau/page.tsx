import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bon cadeau surf Biarritz — Offrez un cours de surf",
  description:
    "Offrez un cours de surf à Biarritz avec Green Glisse. Le cadeau idéal pour les amoureux de la mer et de la glisse. Bon cadeau personnalisé.",
};

const ideesCadeaux = [
  { formule: "Cours collectif initiation", prix: "45 €", pour: "Pour découvrir le surf", icon: "🌊" },
  { formule: "Cours particulier", prix: "100 €", pour: "Pour progresser vite", icon: "🎯" },
  { formule: "Forfait Rider (3 cours)", prix: "120 €", pour: "Pour un vrai séjour surf", icon: "🏄" },
  { formule: "Forfait Passion (5 cours)", prix: "190 €", pour: "Pour le cadeau ultime", icon: "❤️" },
];

export default function CadeauPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#2D6A4F] to-[#52B788] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl mb-6">🎁</div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Offrez le surf !
          </h1>
          <p
            className="text-2xl text-[#F4E9CD] mb-4"
            style={{ fontFamily: "var(--font-dancing), cursive" }}
          >
            Le cadeau qui fait vraiment plaisir
          </p>
          <p className="text-[#F4E9CD] text-lg max-w-xl mx-auto">
            Anniversaire, Noël, fête des mères, Saint-Valentin... un bon cadeau Green Glisse, c&apos;est une expérience inoubliable sur la Côte des Basques.
          </p>
        </div>
      </div>

      {/* Formules cadeau */}
      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1C1C1C] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Choisissez votre bon cadeau
            </h2>
            <p className="text-gray-600 text-lg">
              Valable toute la saison (avril–octobre). Le bénéficiaire choisit sa date.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {ideesCadeaux.map((item) => (
              <div
                key={item.formule}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-[#F4E9CD] hover:border-[#2D6A4F] transition-colors group"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3
                  className="text-xl font-bold text-[#1C1C1C] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.formule}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.pour}</p>
                <p
                  className="text-3xl font-bold text-[#2D6A4F]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {item.prix}
                </p>
              </div>
            ))}
          </div>

          {/* Comment commander */}
          <div className="bg-[#F4E9CD] rounded-2xl p-8">
            <h3
              className="text-2xl font-bold text-[#1C1C1C] mb-4 text-center"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Comment commander un bon cadeau ?
            </h3>
            <ol className="space-y-4 max-w-xl mx-auto">
              {[
                "Contactez-nous par WhatsApp ou email en précisant la formule choisie.",
                "Nous préparons un bon cadeau personnalisé avec le prénom du bénéficiaire.",
                "Payez par virement ou en espèces sur place (ou PayPal).",
                "Vous recevez le bon cadeau par email sous 24h, prêt à offrir !",
              ].map((step, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-8 h-8 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
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
            Commander votre bon cadeau
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/33621772546?text=Bonjour%2C%20je%20souhaite%20commander%20un%20bon%20cadeau%20Green%20Glisse%20%F0%9F%8E%81"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              💬 Commander par WhatsApp
            </a>
            <a
              href="mailto:greenglisse.surfschool@gmail.com?subject=Bon cadeau Green Glisse"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold px-8 py-4 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              ✉️ Commander par email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
