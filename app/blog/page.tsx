import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { blogPosts, blogCategories } from "@/data/blog";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Centro de Conocimiento",
  description: "Artículos sobre educación, tecnología, Moodle, LMS, datos, automatización, marketing y productividad.",
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const recent = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <section className="bg-slate-950 pt-32 pb-16">
        <Container>
          <Breadcrumb items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Centro de Conocimiento
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Artículos, guías y recursos sobre educación, tecnología y transformación digital.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-slate-50">
        <Container>
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="primary">Todos</Badge>
            {blogCategories.map((cat) => (
              <Badge key={cat} variant="outline">{cat}</Badge>
            ))}
          </div>

          {featured.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Destacados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featured.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card hover className="h-full overflow-hidden group">
                      <div className="h-48 bg-gradient-to-br from-teal-500 to-navy-600 flex items-center justify-center">
                        <span className="text-white/30 text-4xl font-bold">{post.title.charAt(0)}</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="primary">{post.category}</Badge>
                          <span className="text-sm text-slate-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recent.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card hover className="h-full overflow-hidden group">
                    <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                      <span className="text-slate-400 text-4xl font-bold">{post.title.charAt(0)}</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-slate-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">{post.excerpt}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
