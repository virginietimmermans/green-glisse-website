import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Green Glisse Surf School Biarritz",
  description:
    "Contactez notre école de surf à Biarritz. Plage de la Côte des Basques. Tel: 06 21 77 25 46.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#2D6A4F] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Contactez-nous
          </h1>
          <p className="text-[#F4E9CD] text-lg">
            Une question ? Une réservation de groupe ? On répond sous 24h.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2
                className="text-2xl font-bold text-[#1C1C1C] mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>

            {/* Infos contact */}
            <div>
              <h2
                className="text-2xl font-bold text-[#1C1C1C] mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Nos coordonnées
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    titre: "Adresse",
                    contenu: "Plage de la Côte des Basques\n64200 Biarritz, France",
                    lien: null,
                  },
                  {
                    icon: "📞",
                    titre: "Téléphone",
                    contenu: "06 21 77 25 46",
                    lien: "tel:+33621772546",
                  },
                  {
                    icon: "✉️",
                    titre: "Email",
                    contenu: "greenglisse.surfschool@gmail.com",
                    lien: "mailto:greenglisse.surfschool@gmail.com",
                  },
                  {
                    icon: "💬",
                    titre: "WhatsApp",
                    contenu: "Réponse rapide garantie",
                    lien: "https://wa.me/33621772546",
                  },
                  {
                    icon: "📅",
                    titre: "Horaires",
                    contenu: "Ouvert d'avril à octobre\nTous les jours de 8h à 20h",
                    lien: null,
                  },
                ].map((info) => (
                  <div key={info.titre} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="font-semibold text-[#1C1C1C] text-sm mb-1" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                        {info.titre}
                      </p>
                      {info.lien ? (
                        <a href={info.lien} className="text-[#2D6A4F] hover:text-[#52B788] transition-colors text-sm break-all">
                          {info.contenu}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm whitespace-pre-line">{info.contenu}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <div className="h-72 sm:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d-1.566521!3d43.477917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI4JzQxLjUiTiAxwrAzMyc1OS41Ilc!5e0!3m2!1sfr!2sfr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Green Glisse — Côte des Basques, Biarritz"
        />
      </div>
    </div>
  );
}
