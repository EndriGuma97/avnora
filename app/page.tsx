import Link from 'next/link'
import { getPosts } from '@/sanity/lib/client'

const services = [
  {
    icon: '⚖',
    title: 'Kontrata Familjare',
    items: ['Parakontratë Martesore', 'Kontratë për Mbajtjen e Përjetshme', 'Kontratë për Dhuraten'],
    href: '/sherbimet#familjare',
    accentColor: '#c4a882',
    category: 'familjare',
  },
  {
    icon: '📋',
    title: 'Kontrata Komerciale',
    items: ['Kontratë Furnizimi', 'Kontratë Shitje-blerje', 'Kontratë Vepre', 'Franshizingu & Komision'],
    href: '/sherbimet#comerciale',
    accentColor: '#5b8fa8',
    category: 'komerciale',
  },
  {
    icon: '🏛',
    title: 'Real Estate',
    items: ['Kontratë Ndërtimi', 'Kontratë Qiraje', 'Shitblerje Pasurie', 'Kontratë Huaje'],
    href: '/sherbimet#real-estate',
    accentColor: '#7a9a6a',
    category: 'real-estate',
  },
  {
    icon: '📝',
    title: 'Ankesa & Peticione',
    items: ['Kërkesa & Lutje', 'Vendime Administrative', 'Aneks Kontrata', 'Procesverbale'],
    href: '/sherbimet#ankesa',
    accentColor: '#8a8aaa',
    category: 'ankesa',
  },
  {
    icon: '🤝',
    title: 'Marrëveshje',
    items: ['Marrëveshje Bashkëpunimi', 'Marrëveshje Konfidencialiteti', 'Marrëveshje Partneriteti'],
    href: '/sherbimet#marreveshje',
    accentColor: '#a07a6a',
    category: 'marreveshje',
  },
  {
    icon: '🔍',
    title: 'Konsultime Ligjore',
    items: ['Padi Komerciale', 'Kontest Pune', 'Ndarje Trashëgimie', 'Shpërblim Dëmi'],
    href: '/sherbimet#konsultime',
    accentColor: '#4a6a8a',
    category: 'konsultime',
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
      {/* HERO — dark navy background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1f2e]">
        {/* Subtle radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 60% 50%, rgba(196,168,130,0.07) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(196,168,130,0.04) 0%, transparent 50%)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,168,130,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,168,130,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Omega watermark — faint, near bottom */}
        <div
          className="absolute hidden sm:block select-none pointer-events-none"
          style={{
            fontSize: 'clamp(220px, 38vw, 600px)',
            opacity: 0.04,
            fontFamily: 'Georgia, serif',
            lineHeight: 1,
            right: '-4%',
            bottom: '-8%',
            color: '#c4a882',
          }}
        >
          Ω
        </div>

        <div className="relative w-full max-w-4xl mx-auto px-5 pt-36 md:pt-44 pb-16 md:pb-24 text-center">
          {/* Pre-title */}
          <p
            className="text-[#c4a882] mb-6 md:mb-8"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(10px, 1.5vw, 12px)', letterSpacing: '5px', textTransform: 'uppercase' }}
          >
            Shërbime Ligjore Kontraktuale
          </p>

          {/* Main title — bold & impactful */}
          <h1
            className="text-[#c4a882] mb-5"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(32px, 8vw, 80px)',
              letterSpacing: 'clamp(4px, 2vw, 16px)',
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            AVNORA AVDIJAJ
          </h1>

          <div className="gold-divider mb-5" />

          <p
            className="text-[#b0a898] mb-6"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(10px, 1.5vw, 13px)',
              letterSpacing: 'clamp(2px, 1vw, 5px)',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            JURISTE · DRAFTUESE KONTRATASH · VLERËSUESE LIGJORE
          </p>

          {/* Tagline */}
          <p
            className="text-[#d0c8be] mt-6 md:mt-8 mb-8 md:mb-12 max-w-xl mx-auto leading-relaxed px-2"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              fontStyle: 'italic',
              opacity: 0.85,
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
            className="mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-2 md:gap-4 text-[#c4a882]/50"
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

      {/* ABOUT STRIP — beige */}
      <section className="bg-[#f0ede8] border-y border-[#c4a882]/15 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="section-title mb-4 md:mb-6">Kush Jemi</p>
          <h2
            className="text-[#1a1f2e] mb-5"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 36px)', letterSpacing: '2px', fontWeight: 700 }}
          >
            Hartim dhe Vlerësim Kontratash
          </h2>
          <div className="gold-divider mb-6 md:mb-8" />
          <p
            className="text-[#5a6272] leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: '14px', lineHeight: '1.9' }}
          >
            <strong style={{ color: '#c4a882', fontWeight: 700 }}>AV Contracts L.L.C.</strong> ofron shërbime profesionale ligjore kontraktuale
            me fokus në hartimin, rishqyrtimin dhe vlerësimin e kontratave. Me një qasje të bazuar
            në kuptueshmëri, siguri dhe saktësi, ne sigurojmë që çdo klient të jetë i mbrojtur
            ligjërisht dhe të kuptojë plotësisht çdo detyrim dhe të drejtë që rrjedh nga kontratat.
          </p>
          {/* Contact info */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
            <a
              href="tel:+38345420656"
              className="text-[#c4a882] text-sm hover:text-[#d9bc9c] transition-colors"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
            >
              +383 45 420 656
            </a>
            <span className="hidden sm:inline text-[#c4a882]/30 mx-4">·</span>
            <a
              href="mailto:av.contracts.ks@gmail.com"
              className="text-[#c4a882] text-sm hover:text-[#d9bc9c] transition-colors break-all"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '1px' }}
            >
              av.contracts.ks@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES — beige body */}
      <section className="py-14 md:py-24 max-w-6xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-16">
          <p className="section-title">Çfarë Ofrojmë</p>
          <h2
            className="text-[#1a1f2e]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 4vw, 40px)', letterSpacing: '3px', fontWeight: 700 }}
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
              className="card-hover block bg-[#f0ede8] p-6 md:p-8 group"
              style={{ borderTop: `3px solid ${service.accentColor}` }}
            >
              <div
                className="mb-3"
                style={{ fontSize: '26px', opacity: 0.85, color: service.accentColor }}
              >
                {service.icon}
              </div>
              <h3
                className="text-[#1a1f2e] mb-3 group-hover:transition-colors"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '16px',
                  letterSpacing: '1px',
                  fontWeight: 700,
                  color: service.accentColor,
                  transition: 'color 0.3s',
                }}
              >
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#5a6272] text-sm flex items-start gap-2"
                  >
                    <span className="mt-1 flex-shrink-0" style={{ fontSize: '7px', color: service.accentColor }}>◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-5 text-xs tracking-widest"
                style={{ fontFamily: 'Georgia, serif', color: service.accentColor }}
              >
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

      {/* VALUES — beige bg */}
      <section className="bg-[#f0ede8] py-14 md:py-24 border-y border-[#c4a882]/15">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-16">
            <p className="section-title">Pse Të Na Zgjidhni</p>
            <h2
              className="text-[#1a1f2e]"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 38px)', letterSpacing: '3px', fontWeight: 700 }}
            >
              VLERAT TONA
            </h2>
            <div className="gold-divider mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 md:p-8 border border-[#c4a882]/20 bg-white hover:border-[#c4a882]/50 transition-colors">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 border border-[#c4a882]/40 flex items-center justify-center mx-auto mb-5"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#c4a882', fontWeight: 700 }}
                >
                  {v.symbol}
                </div>
                <h3
                  className="text-[#c4a882] mb-3"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700 }}
                >
                  {v.title}
                </h3>
                <p className="text-[#5a6272] text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM SECTION */}
      <section className="py-14 md:py-24 max-w-5xl mx-auto px-5">
        <div className="text-center mb-10 md:mb-14">
          <div
            className="text-[#c4a882] mb-2"
            style={{ fontFamily: 'Georgia, serif', fontSize: '36px', opacity: 0.6 }}
          >
            Ω
          </div>
          <p className="section-title">Premium</p>
          <div className="gold-divider my-4" />
          <h2
            className="text-[#1a1f2e] max-w-3xl mx-auto"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(18px, 3vw, 28px)', letterSpacing: '1px', fontWeight: 700, lineHeight: 1.4 }}
          >
            AV CONTRACTS nuk ju ofron vetëm shërbime, ne ju ofrojmë{' '}
            <span className="text-[#c4a882]">ZGJIDHJE</span>
          </h2>
        </div>

        {/* Main content box */}
        <div className="border border-[#c4a882]/25 bg-[#f0ede8] p-7 md:p-10 mb-10">
          <p
            className="text-[#5a6272] leading-relaxed"
            style={{ fontSize: '15px', lineHeight: '1.9' }}
          >
            Në një botë ku teknologjia zhvillohet më shpejt se legjislacioni, pasuria juaj më e
            madhe nuk janë të mirat materiale, por{' '}
            <strong style={{ color: '#1a1f2e' }}>idetë, krijimet dhe inovacionet tuaja</strong>.{' '}
            <strong style={{ color: '#1a1f2e' }}>AV CONTRACTS</strong> shërben si mburoja juaj juridike,
            duke hartuar dhe siguruar kontrata në përputhje me ligjin në fuqi dhe që prona juaj
            intelektuale të mbetet e juaja — sot dhe në të ardhmen.
          </p>
          <p
            className="text-[#1a1f2e] text-center mt-7 font-medium"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(15px, 2vw, 18px)', fontStyle: 'italic', lineHeight: 1.6 }}
          >
            &ldquo;Ne bëjmë ligjin të kuptueshëm dhe teknologjinë të sigurt.&rdquo;
          </p>
        </div>

        {/* TEKNOLOGJIA section heading */}
        <h3
          className="text-center text-[#c4a882] mb-8 md:mb-10"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            letterSpacing: 'clamp(2px, 1vw, 6px)',
            fontWeight: 700,
          }}
        >
          TEKNOLOGJIA NDRYSHON, SIGURIA MBETET
        </h3>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="border border-[#c4a882]/20 bg-white p-6 md:p-8">
            <h4
              className="text-[#1a1f2e] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: '15px', letterSpacing: '1px', fontWeight: 700 }}
            >
              1. Mbrojtja e Pronës Njerëzore
            </h4>
            <p className="text-[#5a6272] text-sm leading-relaxed" style={{ lineHeight: '1.85' }}>
              Ne besojmë se krijimi i njeriut është unik. Në një kohë kur përmbajtja e
              gjeneruar nga makineritë AI po vërshon tregun, ne hartojmë kontrata që
              vërtetojnë dhe mbrojnë autorësinë njerëzore si një aset premium.
            </p>
          </div>
          <div className="border border-[#c4a882]/20 bg-white p-6 md:p-8">
            <h4
              className="text-[#1a1f2e] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: '15px', letterSpacing: '1px', fontWeight: 700 }}
            >
              2. Saktësi Juridike në Detaj
            </h4>
            <p className="text-[#5a6272] text-sm leading-relaxed" style={{ lineHeight: '1.85' }}>
              Çdo kontratë e jona parashikon efektet afatgjata. Ne nuk shkruajmë vetëm për
              atë që ndodh sot, por vendosim gurët e themelit për mbrojtjen e të drejtave
              tuaja edhe kur teknologjia të ketë evoluar sërish pas 5 apo 10 vitesh.
            </p>
          </div>
        </div>

        {/* BESUESHMËRIA SI STANDARD */}
        <div className="border-t border-[#c4a882]/20 pt-10">
          <h3
            className="text-center text-[#1a1f2e] mb-7"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              letterSpacing: 'clamp(2px, 1vw, 6px)',
              fontWeight: 700,
            }}
          >
            BESUESHMËRIA SI STANDARD
          </h3>
          <div className="border border-[#c4a882]/20 bg-[#f0ede8] p-6 md:p-8">
            <p
              className="text-[#5a6272] leading-relaxed"
              style={{ fontSize: '15px', lineHeight: '1.9' }}
            >
              Në <strong style={{ color: '#1a1f2e' }}>AV CONTRACTS</strong>, ne nuk hartojmë vetëm dokumente;
              ne krijojmë <strong style={{ color: '#1a1f2e' }}>arkitekturë ligjore</strong>.
              Besueshmëria jonë buron nga saktësia ligjore dhe pasioni për të mbrojtur
              atë që ju keni ndërtuar me mund.
            </p>
          </div>
          <div className="text-center mt-7">
            <div
              className="text-[#c4a882] mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: '32px', opacity: 0.4 }}
            >
              Ω
            </div>
            <p
              className="text-[#c4a882] text-[10px] md:text-xs tracking-widest"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '3px' }}
            >
              BESOJA HARTIMIN E KONTRATAVE ©AV CONTRACTS™ DHE, THUAJ SIGURISË MIRËSERDHE.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {posts.length > 0 && (
        <section className="bg-[#f0ede8] border-t border-[#c4a882]/15 py-14 md:py-24 max-w-full">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-10 md:mb-16">
              <p className="section-title">Njohuri Ligjore</p>
              <h2
                className="text-[#1a1f2e]"
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 38px)', letterSpacing: '3px', fontWeight: 700 }}
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
                  className="card-hover block bg-white p-6 md:p-8 group"
                >
                  {post.category && (
                    <span
                      className="text-[#c4a882] text-xs tracking-widest uppercase font-semibold"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {post.category}
                    </span>
                  )}
                  <h3
                    className="text-[#1a1f2e] mt-3 mb-3 group-hover:text-[#c4a882] transition-colors"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '16px', lineHeight: 1.5, fontWeight: 700 }}
                  >
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-[#5a6272] text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-5 text-[#c4a882] text-xs tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>
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
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section className="py-14 md:py-20 relative overflow-hidden border-y border-[#c4a882]/15">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(196,168,130,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <div
            className="text-[#c4a882] mb-3"
            style={{ fontFamily: 'Georgia, serif', fontSize: '40px', opacity: 0.2 }}
          >
            Ω
          </div>
          <h2
            className="text-[#1a1f2e] mb-4"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 4vw, 36px)', letterSpacing: '3px', fontWeight: 700 }}
          >
            Keni Nevojë për Ndihmë Ligjore?
          </h2>
          <p
            className="text-[#5a6272] mb-7 leading-relaxed text-sm md:text-base"
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
            className="mt-5 text-[#5a6272] text-xs"
            style={{ opacity: 0.6, fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
          >
            E HËNË – E PREMTE · 08:00 – 16:00
          </p>
        </div>
      </section>
    </>
  )
}
