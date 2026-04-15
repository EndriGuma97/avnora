import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a1f2e] mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-[#c4a882]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div
              className="text-[#c4a882] mb-1"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '5px', fontSize: '13px', fontWeight: 700 }}
            >
              AV CONTRACTS
            </div>
            <div
              className="text-[#c4a882]/60"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '3px', fontSize: '9px' }}
            >
              L.L.C.
            </div>
            <p
              className="text-[#e8e0d0] mt-4 font-semibold"
              style={{ fontSize: '13px' }}
            >
              Avnora Avdijaj
            </p>
            <p
              className="text-[#b0a898] mt-1"
              style={{ fontSize: '11px', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
            >
              Juriste · Draftuese Kontratash · Vlerësuese Ligjore
            </p>
            <div
              className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[#c4a882]/50"
              style={{ fontFamily: 'Georgia, serif', fontSize: '9px', letterSpacing: '2px' }}
            >
              <span>KUPTUESHMËRI</span>
              <span>·</span>
              <span>SIGURI</span>
              <span>·</span>
              <span>SAKTËSI</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <p
              className="text-[#c4a882] mb-5"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '5px', fontSize: '10px', textTransform: 'uppercase', fontWeight: 700 }}
            >
              Navigimi
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Kryefaqja' },
                { href: '/sherbimet', label: 'Shërbimet' },
                { href: '/blog', label: 'Artikuj Ligjorë' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#b0a898] hover:text-[#c4a882] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[#c4a882] mb-5"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '5px', fontSize: '10px', textTransform: 'uppercase', fontWeight: 700 }}
            >
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-[#c4a882]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Telefon
                </p>
                <a
                  href="tel:+38345420656"
                  className="text-[#b0a898] hover:text-[#c4a882] transition-colors text-sm"
                >
                  +383 45 420 656
                </a>
              </div>
              <div>
                <p
                  className="text-[#c4a882]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Email
                </p>
                <a
                  href="mailto:av.contracts.ks@gmail.com"
                  className="text-[#b0a898] hover:text-[#c4a882] transition-colors text-sm break-all"
                >
                  av.contracts.ks@gmail.com
                </a>
              </div>
              <div>
                <p
                  className="text-[#c4a882]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Orari
                </p>
                <p className="text-[#b0a898] text-sm" style={{ lineHeight: 1.6 }}>
                  E Hënë – E Premte<br />
                  08:00 – 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-[#c4a882]/15">
          <p
            className="text-[#c4a882]/60 mb-2"
            style={{ fontFamily: 'Georgia, serif', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}
          >
            Deklaratë Ligjore
          </p>
          <p
            className="text-[#7a7870] leading-relaxed"
            style={{ fontSize: '11px', lineHeight: '1.8', fontStyle: 'italic' }}
          >
            Shërbimet tona dhe këshillat juridike e ligjore nuk kanë asnjë qëllim që të krijojnë përfaqësime
            ligjore të paautorizuara dhe në kundërshtim me kushtetutën e Republikës së Kosovës për shprehjen
            e vullnetit të lirë të palëve ndërmjet marrëdhënieve kontraktuale.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#c4a882]/10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p
            className="text-[#5a5650] text-xs"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
          >
            © 2026 AVNORA AVDIJAJ — TË GJITHA TË DREJTAT E REZERVUARA
          </p>
          <p
            className="text-[#5a5650] text-xs"
            style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
          >
            Kontrata e sigurt është themeli i së ardhmes tuaj
          </p>
        </div>
      </div>
    </footer>
  )
}
