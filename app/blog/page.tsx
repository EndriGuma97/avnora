import type { Metadata } from 'next'
import Link from 'next/link'
import { getPosts } from '@/sanity/lib/client'

export const metadata: Metadata = {
  title: 'Artikuj Ligjorë — AV Contracts L.L.C.',
  description: 'Lexoni artikuj informues mbi kontrata, të drejta ligjore dhe shërbime juridike nga Avnora Avdijaj.',
}

const categoryLabels: Record<string, string> = {
  familjare: 'Kontrata Familjare',
  comerciale: 'Kontrata Comerciale',
  'real-estate': 'Real Estate',
  vleresime: 'Konsultime Ligjore',
  ankesa: 'Ankesa & Peticione',
  keshilla: 'Këshilla Ligjore',
}

export default async function BlogPage() {
  let posts: {
    _id: string
    title: string
    slug: { current: string }
    excerpt?: string
    category?: string
    publishedAt?: string
  }[] = []

  try {
    posts = await getPosts()
  } catch {
    // Sanity not configured yet
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-44 pb-20 relative overflow-hidden border-b border-[#c4a882]/15">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(184,151,106,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-title mb-6" style={{ letterSpacing: 'clamp(2px, 1.5vw, 8px)' }}>Njohuri Ligjore</p>
          <h1
            className="text-[#1a1f2e]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: 'clamp(2px, 1.5vw, 8px)', fontWeight: 400 }}
          >
            ARTIKUJ
          </h1>
          <div className="gold-divider mt-6 mb-4" />
          <p className="text-[#c4a882] mb-6" style={{ fontSize: '20px', letterSpacing: '6px' }}>····✍️</p>
          <p
            className="text-[#5a6272] max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: '15px' }}
          >
            Artikuj informues dhe këshilla ligjore nga profesionistja-ekspertja jonë.
            Qëndroni të përditësuar me artikujt tanë · Mbajeni SUKSESIN TË PËRQENDRUAR NË SIGURI.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="text-[#c4a882] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: '48px', opacity: 0.3 }}
            >
              Ω
            </div>
            <p
              className="text-[#1a1f2e]"
              style={{ fontFamily: 'Georgia, serif', fontSize: '18px', letterSpacing: '3px', opacity: 0.5 }}
            >
              Artikujt do të publikohen së shpejti
            </p>
            <p className="text-[#5a6272] mt-3 text-sm" style={{ opacity: 0.7 }}>
              Kthehuni pas për të lexuar përmbajtje ligjore informuese.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="card-hover block bg-[#f0ede8] p-8 group"
              >
                {post.category && (
                  <span
                    className="text-[#c4a882] text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {categoryLabels[post.category] || post.category}
                  </span>
                )}
                <h2
                  className="text-[#1a1f2e] mt-3 mb-3 group-hover:text-[#c4a882] transition-colors"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '17px', lineHeight: 1.5 }}
                >
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-[#5a6272] text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                {post.publishedAt && (
                  <p className="text-[#c4a882]/50 text-xs mt-4 tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
                    {new Date(post.publishedAt).toLocaleDateString('sq-AL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                )}
                <div className="mt-4 text-[#c4a882] text-xs tracking-widest group-hover:tracking-[4px] transition-all duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                  LEXO MË SHUMË →
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
