export default function CarteSection() {
  const lat = 43.477917;
  const lng = -1.566521;
  const gmapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
  const appleMapsUrl = `https://maps.apple.com/?q=${lat},${lng}`;

  return (
    <section className="py-16 sm:py-24 bg-[#F4E9CD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Nous trouver
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            On est sur la plage !
          </h2>
          <p className="text-gray-600 text-lg">
            Recherchez la tente jaune et blanche sur la Côte des Basques 🏕️
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Carte Google Maps */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl h-80 sm:h-96">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDI4JzQxLjUiTiAxwrAzMyc1OS41Ilc!5e0!3m2!1sfr!2sfr!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Green Glisse Surf School — Côte des Basques, Biarritz"
            />
          </div>

          {/* Infos pratiques */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3
              className="text-xl font-bold text-[#2D6A4F] mb-5"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Infos pratiques
            </h3>
            <ul className="space-y-4 text-sm text-gray-700 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-xl">🏕️</span>
                <span>Tente jaune et blanche sur la plage de la Côte des Basques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📅</span>
                <span>Saison : d&apos;avril à octobre</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🌊</span>
                <span>Cours tous les jours, selon les conditions de surf</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">⏰</span>
                <span>Ouvert de 8h à 20h</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+33621772546" className="text-[#2D6A4F] hover:underline font-semibold">
                  06 21 77 25 46
                </a>
              </li>
            </ul>

            <p
              className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Navigation rapide
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#2D6A4F] hover:bg-[#52B788] text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-colors"
              >
                📍 Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#33CCFF] hover:bg-[#00AADDFF] text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-colors"
              >
                🚗 Waze
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white text-sm font-semibold py-2.5 px-4 rounded-full transition-colors"
              >
                🍎 Apple Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
