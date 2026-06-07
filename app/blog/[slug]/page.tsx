import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

function markdownToHtml(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-[#2D6A4F] mt-8 mb-3" style="font-family: var(--font-montserrat), sans-serif">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-[#1C1C1C] mt-10 mb-4" style="font-family: var(--font-playfair), serif">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-[#1C1C1C] mb-6" style="font-family: var(--font-playfair), serif">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[#1C1C1C]">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1">• $1</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-700 text-base leading-relaxed mb-4">')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<') || match.startsWith('•')) return match;
      return match;
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const htmlContent = markdownToHtml(post.content);

  return (
    <div className="pt-20">
      {/* Header article */}
      <div className="bg-[#2D6A4F] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 text-white font-semibold px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#F4E9CD] text-sm">
            <span>
              {new Date(post.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readingTime} min de lecture</span>
          </div>
        </div>
      </div>

      {/* Contenu */}
      <article className="py-12 sm:py-16 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gray-600 text-lg leading-relaxed mb-8 italic border-l-4 border-[#52B788] pl-4">
            {post.description}
          </p>
          <div
            className="text-gray-700 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </article>

      {/* CTA fin d'article */}
      <div className="bg-[#F4E9CD] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-2xl font-bold text-[#1C1C1C] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Prêt à vivre l&apos;expérience ?
          </h2>
          <p className="text-gray-600 mb-6">Réservez votre cours de surf à Biarritz dès maintenant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservation"
              className="bg-[#2D6A4F] hover:bg-[#52B788] text-white font-bold px-8 py-3 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Réserver un cours
            </Link>
            <Link
              href="/blog"
              className="border-2 border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white font-bold px-8 py-3 rounded-full transition-colors"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
