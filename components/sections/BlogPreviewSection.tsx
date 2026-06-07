import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export default async function BlogPreviewSection() {
  const posts = await getBlogPosts();
  const recent = posts.slice(0, 3);

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p
            className="text-[#52B788] text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Notre blog
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Conseils & actualités surf
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {recent.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-[#2D6A4F] h-48 flex items-center justify-center p-6">
                <p
                  className="text-white text-xl font-bold text-center leading-snug"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {post.title}
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>·</span>
                  <span>{post.readingTime} min de lecture</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.description}</p>
                <p
                  className="text-[#2D6A4F] font-semibold text-sm mt-4 group-hover:text-[#52B788] transition-colors"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Lire l&apos;article →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Voir tous les articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
