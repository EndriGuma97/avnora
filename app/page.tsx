import Link from 'next/link'
import { getPosts } from '@/sanity/lib/client'

const services = [
  {
    icon: '⚖',
    title: 'Kontrata Familjare',
    items: ['Parakontratë Martesore', 'Kontratë për Mbajtjen e Përjetshme', 'Kontratë për Dhuraten'],
    href: '/sherbimet#familjare',
  },
  {
    icon: '📋',
    title: 'Kontrata Comerciale',
    items: ['Kontratë Furnizimi', 'Kontratë Shitje-blerje', 'Kontratë Vepre', 'Frashizingu & Komision'],
    href: '/sherbimet#comerciale',
  },
  {
    icon: '🏛',
    title: 'Real Estate',
    items: ['Kontratë Ndërtimi', 'Kontratë Qiraje', 'Shitblerje Pasurie', 'Kontratë Huaje'],
    href: '/sherbimet#real-estate',
  },
  {
    icon: '📝',
    title: 'Ankesa & Peticione',
    items: ['Kërkesa & Lutje', 'Vendime Administrative', 'Aneks Kontrata', 'Procesverbale'],
    href: '/sherbimet#ankesa',
  },
  {
    icon: '🤝',
    title: 'Marrëveshje',
    items: ['Marrëveshje Bashkëpunimi', 'Marrëveshje Konfidencialiteti', 'Marrëveshje Partneriteti'],
    href: '/sherbimet#marreveshje',
  },
  {
    icon: '🔍',
    title: 'Vlerësime Ligjore',
    items: ['Padi Comerciale', 'Kontest Pune', 'Ndarje Trashëgimie', 'Shpërblim Dëmi'],
    href: '/sherbimet#vleresime',
  },
]

const values = [
  {
    symbol: 'K',
    title: 'Kuptueshmëri',
    desc: 'Çdo kontratë shpjegohet në mënyrë të qartë dhe të kuptueshme, pa gjuhë teknike të panevojshme.',
  },
  {
    symbol: 'S',
    title: 'Siguri',
    desc: 'Kontratat tuaja hartohen me kujdesin maksimal për të mbrojtur interesat tuaja ligjore plotësisht.',
  },
  {
    symbol: 'S',
    title: 'Saktësi',
    desc: 'Çdo klauzolë, term dhe detaj shqyrtohet me precizion për të siguruar vlefshmërinë e plotë ligjore.',
  },
]

export default async function HomePage() {
  let posts: { _id: string; title: string; slug: { current: string }; excerpt: string; category: string; publishedAt: string }[] = []
  try {
    posts = await getPosts()
    posts = posts.slice(0, 3)
  } catch {
    // No posts yet or Sanity not configured
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(184,151,106,0.06) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(184,151,106,0.04) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(184,151,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(184,151,106,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Omega decoration — hidden on very small screens */}
        <div
          className="absolute hidden sm:block right-0 top-1/2 -translate-y-1/2 text-[#b8976a] select-none pointer-events-none"
          style={{
            fontSize: 'clamp(200px, 35vw, 550px)',
            opacity: 0.025,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            right: '-5%',
          }}
        >
          Ω
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-5 pt-36 md:pt-44 pb-16 md:pb-24 text-center">
          {/* Pre-title */}
          <p
            className="text-[#b8976a] mb-6 md:mb-8 text-[9px] md:text-[10px] uppercase"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '4px' }}
          >
            Shërbime Ligjore Kontraktuale
          </p>

          {/* Main title */}
          <h1
            className="text-[#b8976a] mb-5"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(28px, 7vw, 72px)',
              letterSpacing: 'clamp(4px, 2vw, 14px)',
              lineHeight: 1.25,
              fontWeight: 400,
            }}
          >
            AVNORA AVDIJAJ
          </h1>

          <div className="gold-divider mb-5" />

          <p
            className="text-[#c8c8c8] mb-6 text-[10px] md:text-[12px]"
            style={{
              fontFamily: 'Georgia, serif',
              letterSpacing: 'clamp(2px, 1vw, 4px)',
              opacity: 0.6,
            }}
          >
            JURISTE · DRAFTUESE KONTRATASH · VLERËSUESE LIGJORE
          </p>

          {/* Tagline */}
          <p
            className="text-[#e8d5b7] mt-6 md:mt-8 mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed px-2"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              fontStyle: 'italic',
              opacity: 0.8,
            }}
          >
            &ldquo;Kontrata e sigurt është themeli i së ardhmes tuaj&rdquo;
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4 sm:px-0">
            <Link href="/sherbimet" className="btn-gold-filled w-full sm:w-auto">
              Shiko Shërbimet
            </Link>
            <Link href="/kontakt" className="btn-gold w-full sm:w-auto">
              Na Kontaktoni
            </Link>
          </div>

          {/* Values row */}
          <div
            className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[#b8976a]/40"
            style={{ fontFamily: 'Georgia, serif', fontSize: '9px', letterSpacing: '3px' }}
          >
            <span>KUPTUESHMËRI</span>
            <span>·</span>
            <span>SIGURI</span>
            <span>·</span>
            <span>SAKTËSI</span>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-[#2d3440] border-y border-[#b8976a]/10 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="section-title mb-4 md:mb-6">Kush Jemi</p>
          <h2
            className="text-[#e8d5b7] mb-5"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 34px)', letterSpacing: '2px', fontWeight: 400 }}
          >
            Ekspertizë Ligjore në Shërbim të Tuajin
          </h2>
          <div className="gold-divider mb-6 md:mb-8" />
          <p
            className="text-[#c8c8c8] leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: '14px', lineHeight: '1.9', opacity: 0.75 }}
          >
            <strong style={{ color: '#b8976a', fontWeight: 500 }}>AV Contracts L.L.C.</strong> ofron shërbime profesionale ligjore kontraktuale
            me fokus në hartimin, rishqyrtimin dhe vlerësimin e kontratave. Me një qasje të bazuar
            në kuptueshmëri, siguri dhe saktësi, ne sigurojmë që çdo klient të jetë i mbrojtur
            ligjërisht dhe të kuptojë plotësisht çdo detyrim dhe të drejtë që rrjedh nga kontratat.
          </p>
          {/* Contact info stacked on mobile */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            <a
              href="tel:+38345420656"
              className="text-[#b8976a] text-sm hover:text-[#d4aa7d] transition-colors"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
            >
              +383 45 420 656
            </a>
            <span className="hidden sm:inline text-[#b8976a]/30 mx-4">·</span>
            <a
              href="mailto:av.contracts.ks@gmail.com"
              className="text-[#b8976a] text-sm hover:text-[#d4aa7d] transition-colors break-all"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '1px' }}
            >
              av.contracts.ks@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 md:py-24 max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <p className="section-title">Çfarë Ofrojmë</p>
          <h2
            className="text-[#e8d5b7]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 38px)', letterSpacing: '3px', fontWeight: 400 }}
          >
            SHËRBIMET TONA
          </h2>
          <div className="gold-divider mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-hover block bg-[#2d3440] p-6 md:p-8 group"
            >
              <div
                className="text-[#b8976a] mb-3"
                style={{ fontSize: '26px', opacity: 0.7 }}
              >
                {service.icon}
              </div>
              <h3
                className="text-[#e8d5b7] mb-3 group-hover:text-[#b8976a] transition-colors"
                style={{ fontFamily: 'Georgia, serif', fontSize: '15px', letterSpacing: '1px' }}
              >
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#c8c8c8] text-sm flex items-start gap-2"
                    style={{ opacity: 0.65 }}
                  >
                    <span className="text-[#b8976a] mt-1 flex-shrink-0" style={{ fontSize: '7px' }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-[#b8976a] text-xs tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
                MË SHUMË →
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link href="/sherbimet" className="btn-gold">
            Të Gjitha Shërbimet
          </Link>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#2d3440] py-14 md:py-24 border-y border-[#b8976a]/10">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-16">
            <p className="section-title">Pse Të Na Zgjidhni</p>
            <h2
              className="text-[#e8d5b7]"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 36px)', letterSpacing: '3px', fontWeight: 400 }}
            >
              VLERAT TONA
            </h2>
            <div className="gold-divider mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 md:p-8 border border-[#b8976a]/10 hover:border-[#b8976a]/30 transition-colors">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 border border-[#b8976a]/40 flex items-center justify-center mx-auto mb-5"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#b8976a' }}
                >
                  {v.symbol}
                </div>
                <h3
                  className="text-[#b8976a] mb-3"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '13px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  {v.title}
                </h3>
                <p className="text-[#c8c8c8] text-sm leading-relaxed" style={{ opacity: 0.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {posts.length > 0 && (
        <section className="py-14 md:py-24 max-w-6xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-16">
            <p className="section-title">Njohuri Ligjore</p>
            <h2
              className="text-[#e8d5b7]"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 36px)', letterSpacing: '3px', fontWeight: 400 }}
            >
              ARTIKUJ TË FUNDIT
            </h2>
            <div className="gold-divider mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="card-hover block bg-[#2d3440] p-6 md:p-8 group"
              >
                {post.category && (
                  <span
                    className="text-[#b8976a] text-xs tracking-widest uppercase"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {post.category}
                  </span>
                )}
                <h3
                  className="text-[#e8d5b7] mt-3 mb-3 group-hover:text-[#b8976a] transition-colors"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.5 }}
                >
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-[#c8c8c8] text-sm leading-relaxed line-clamp-3" style={{ opacity: 0.65 }}>
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-5 text-[#b8976a] text-xs tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
                  LEXO →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link href="/blog" className="btn-gold">
              Të Gjithë Artikujt
            </Link>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="py-14 md:py-20 relative overflow-hidden border-y border-[#b8976a]/10">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(184,151,106,0.08) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <div
            className="text-[#b8976a] mb-3"
            style={{ fontFamily: 'Georgia, serif', fontSize: '40px', opacity: 0.15 }}
          >
            Ω
          </div>
          <h2
            className="text-[#e8d5b7] mb-4"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 34px)', letterSpacing: '3px', fontWeight: 400 }}
          >
            Keni Nevojë për Ndihmë Ligjore?
          </h2>
          <p
            className="text-[#c8c8c8] mb-7 leading-relaxed text-sm md:text-base"
            style={{ opacity: 0.65 }}
          >
            Kontaktoni sot për konsultim profesional. Ofrojmë shërbime të personalizuara
            për individë dhe biznese në të gjitha fushat e kontratave ligjore.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0">
            <a href="tel:+38345420656" className="btn-gold-filled w-full sm:w-auto">
              +383 45 420 656
            </a>
            <a href="mailto:av.contracts.ks@gmail.com" className="btn-gold w-full sm:w-auto">
              Dërgoni Email
            </a>
          </div>
          <p
            className="mt-5 text-[#c8c8c8] text-xs"
            style={{ opacity: 0.4, fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
          >
            E HËNË – E PREMTE · 08:00 – 16:00
          </p>
        </div>
      </section>
    </>
  )
}
