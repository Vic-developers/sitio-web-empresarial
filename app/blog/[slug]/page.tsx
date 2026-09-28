import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Artículo no encontrado" };
  }

  return {
    title: `${post.title} | Blog SkillUps Academy`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="primary">{post.category}</Badge>
              <span className="text-sm text-slate-400">{post.readTime} de lectura</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-slate-300 max-w-2xl">{post.excerpt}</p>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container size="narrow">
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed">{post.content}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link href="/blog" className="text-teal-600 hover:text-teal-700 font-medium">
              ← Volver al blog
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
