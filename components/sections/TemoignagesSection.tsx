const temoignages = [
  {
    nom: "Marie",
    age: 32,
    note: 5,
    texte: "Une expérience incroyable ! Les moniteurs sont patients, bienveillants et super compétents. J'ai surfé ma première vague dès le premier cours !",
    avatar: "M",
  },
  {
    nom: "Thomas",
    age: 41,
    note: 5,
    texte: "Meilleure école de Biarritz. Le rapport qualité-prix est imbattable et l'ambiance est top. On revient chaque année en famille.",
    avatar: "T",
  },
  {
    nom: "Lucie",
    age: 28,
    note: 5,
    texte: "Mon fils de 8 ans a adoré. Les moniteurs savent parfaitement s'adapter aux enfants. Une vraie révélation pour lui !",
    avatar: "L",
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < note ? "text-yellow-400" : "text-gray-400"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TemoignagesSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Avis clients
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Ils ont surfé avec nous
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {temoignages.map((t) => (
            <div
              key={t.nom}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <StarRating note={t.note} />
              <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.texte}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D6A4F] flex items-center justify-center text-white font-bold text-lg">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                    {t.nom}
                  </p>
                  <p className="text-gray-500 text-sm">{t.age} ans — Avis Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://g.page/greenglisse/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#52B788] text-[#52B788] hover:bg-[#52B788] hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 text-sm"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Voir tous les avis Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
