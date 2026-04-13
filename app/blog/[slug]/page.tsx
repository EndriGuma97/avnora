import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { getPost, getPosts } from '@/sanity/lib/client'

const categoryLabels: Record<string, string> = {
  familjare: 'Kontrata Familjare',
  comerciale: 'Kontrata Comerciale',
  'real-estate': 'Real Estate',
  vleresime: 'Vlerësime Ligjore',
  ankesa: 'Ankesa & Peticione',
  keshilla: 'Këshilla Ligjore',
}

export async function generateStaticParams() {
  try {
    const posts = await getPosts()
    return posts.map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = await getPost(slug)
    if (!post) return {}
    return {
      title: `${post.title} — AV Contracts L.L.C.`,
      description: post.excerpt,
    }
  } catch {
    return {}
  }
}

const portableComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', color: '#b8976a', marginTop: '2rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.15rem', color: '#d4aa7d', marginTop: '1.5rem', marginBottom: '0.5rem' }}>{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote style={{ borderLeft: '2px solid #b8976a', paddingLeft: '1rem', fontStyle: 'italic', color: '#b8976a', margin: '1.5rem 0' }}>{children}</blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ color: '#c8c8c8', lineHeight: '1.85', marginBottom: '1rem', opacity: 0.8 }}>{children}</p>
    ),
  },
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post: {
    title: string
    category?: string
    publishedAt?: string
    excerpt?: string
    body?: Parameters<typeof PortableText>[0]['value']
  } | null = null

  try {
    post = await getPost(slug)
  } catch {
    notFound()
  }

  if (!post) notFound()

  return (
    <>
      {/* Header */}
      <section className="pt-44 pb-16 relative overflow-hidden border-b border-[#b8976a]/10">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,151,106,0.05) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          {post.category && (
            <span
              className="text-[#b8976a] text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {categoryLabels[post.category] || post.category}
            </span>
          )}
          <h1
            className="text-[#e8d5b7] mt-4 mb-6"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 40px)', lineHeight: 1.4, fontWeight: 400 }}
          >
            {post.title}
          </h1>
          <div className="gold-divider mb-6" />
          {post.publishedAt && (
            <p className="text-[#b8976a]/50 text-xs tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
              {new Date(post.publishedAt).toLocaleDateString('sq-AL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          {post.excerpt && (
            <p
              className="text-[#c8c8c8] mt-6 leading-relaxed"
              style={{ fontSize: '16px', fontStyle: 'italic', opacity: 0.65, fontFamily: 'Georgia, serif' }}
            >
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {post.body && (
          <div className="prose-av">
            <PortableText value={post.body} components={portableComponents} />
          </div>
        )}
      </article>

      {/* Back */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-[#b8976a]/10 pt-8 flex items-center justify-between">
          <Link
            href="/blog"
            className="text-[#b8976a] text-xs tracking-widest hover:text-[#d4aa7d] transition-colors"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            ← TË GJITHË ARTIKUJT
          </Link>
          <Link href="/kontakt" className="btn-gold" style={{ padding: '8px 20px' }}>
            Na Kontaktoni
          </Link>
        </div>
      </div>
    </>
  )
}
