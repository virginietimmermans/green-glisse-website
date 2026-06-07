import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog surf Biarritz — Conseils, conditions et actualités",
  description:
    "Conseils de surf, conditions de vagues, guides débutants. Tout sur le surf à Biarritz par Green Glisse.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#2D6A4F] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Notre blog
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Conseils & actualités surf
          </h1>
          <p className="text-[#F4E9CD] text-lg">
            Guides pour débutants, conditions de vagues, actualités de l&apos;école — tout pour surfer mieux à Biarritz.
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">Aucun article pour l&apos;instant. Revenez bientôt !</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Placeholder coloré si pas d'image */}
                  <div className="bg-gradient-to-br from-[#2D6A4F] to-[#52B788] h-48 flex items-center justify-center p-6 relative">
                    <p
                      className="text-white text-lg font-bold text-center leading-snug"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {post.title}
                    </p>
                  </div>

                  <div className="p-6">
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-[#F4E9CD] text-[#2D6A4F] font-semibold px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2
                      className="text-base font-bold text-[#1C1C1C] mb-2 line-clamp-2 group-hover:text-[#2D6A4F] transition-colors"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>{post.readingTime} min de lecture</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA newsletter-like */}
      <section className="py-12 bg-[#F4E9CD] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Suivez nos actualités sur Instagram
          </h2>
          <p className="text-gray-600 mb-6">
            Conditions du jour, photos de sessions, conseils en vidéo — tout sur notre Instagram.
          </p>
          <a
            href="https://instagram.com/greenglisse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2D6A4F] hover:bg-[#52B788] text-white font-semibold px-6 py-3 rounded-full transition-colors"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            📸 Suivre Green Glisse
          </a>
        </div>
      </section>
    </div>
  );
}
