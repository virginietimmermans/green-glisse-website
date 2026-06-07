import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réservation — Green Glisse Surf School Biarritz",
  description:
    "Réservez votre cours de surf à Biarritz. Cours collectifs dès 45€, cours particuliers, stages. Contactez-nous par téléphone ou WhatsApp.",
};

export default function ReservationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#2D6A4F] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Réserver un cours
          </h1>
          <p className="text-[#F4E9CD] text-lg">
            Choisissez votre formule et contactez-nous — nous confirmons sous 24h.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#1C1C1C] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Comment réserver ?
            </h2>
            <p className="text-gray-600 text-lg">
              La réservation en ligne est disponible via WhatsApp ou par téléphone. Nous répondons toujours rapidement !
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "1",
                titre: "Choisissez votre formule",
                desc: "Cours collectif, particulier ou forfait — consultez nos tarifs.",
                lien: "/cours",
                cta: "Voir les tarifs",
              },
              {
                step: "2",
                titre: "Contactez-nous",
                desc: "Par WhatsApp, téléphone ou email. Indiquez vos disponibilités.",
                lien: "https://wa.me/33621772546",
                cta: "WhatsApp",
                external: true,
              },
              {
                step: "3",
                titre: "On vous confirme !",
                desc: "Nous vérifions les disponibilités et vous confirmons sous 24h.",
                lien: null,
                cta: null,
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-[#2D6A4F] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3
                  className="text-lg font-bold text-[#1C1C1C] mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.titre}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                {s.lien && s.cta && (
                  s.external ? (
                    <a
                      href={s.lien}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#2D6A4F] hover:bg-[#52B788] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                    >
                      {s.cta}
                    </a>
                  ) : (
                    <Link
                      href={s.lien}
                      className="inline-block border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                    >
                      {s.cta}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          {/* Contacts directs */}
          <div className="bg-[#1C1C1C] rounded-2xl p-8 text-center">
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Nous contacter directement
            </h3>
            <p className="text-gray-400 mb-8">Le moyen le plus rapide pour réserver !</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33621772546?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20cours%20de%20surf%20chez%20Green%20Glisse%20%F0%9F%8F%84"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-4 rounded-full transition-colors"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                💬 WhatsApp
              </a>
              <a
                href="tel:+33621772546"
                className="flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#52B788] text-white font-bold px-8 py-4 rounded-full transition-colors"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                📞 06 21 77 25 46
              </a>
              <a
                href="mailto:greenglisse.surfschool@gmail.com"
                className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1C1C1C] font-bold px-8 py-4 rounded-full transition-colors"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
