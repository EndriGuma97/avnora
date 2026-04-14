import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f0ede8] border-t border-[#b8976a]/15 mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-[#b8976a]/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div
              className="text-[#b8976a] mb-1"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '5px', fontSize: '13px' }}
            >
              AV CONTRACTS
            </div>
            <div
              className="text-[#5a6272]"
              style={{ fontFamily: 'Georgia, serif', letterSpacing: '3px', fontSize: '9px', opacity: 0.6 }}
            >
              L.L.C.
            </div>
            <p
              className="text-[#2d3440] mt-4"
              style={{ fontSize: '13px' }}
            >
              Avnora Avdijaj
            </p>
            <p
              className="text-[#5a6272] mt-1"
              style={{ fontSize: '11px', opacity: 0.7, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
            >
              Juriste · Draftuese Kontratash · Vlerësuese Ligjore
            </p>
            <div
              className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[#b8976a]/50"
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
            <p className="section-title mb-5">Navigimi</p>
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
                  className="text-[#5a6272] hover:text-[#b8976a] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-title mb-5">Kontakt</p>
            <div className="flex flex-col gap-4">
              <div>
                <p
                  className="text-[#b8976a]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Telefon
                </p>
                <a
                  href="tel:+38345420656"
                  className="text-[#5a6272] hover:text-[#b8976a] transition-colors text-sm"
                >
                  +383 45 420 656
                </a>
              </div>
              <div>
                <p
                  className="text-[#b8976a]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Email
                </p>
                <a
                  href="mailto:av.contracts.ks@gmail.com"
                  className="text-[#5a6272] hover:text-[#b8976a] transition-colors text-sm break-all"
                >
                  av.contracts.ks@gmail.com
                </a>
              </div>
              <div>
                <p
                  className="text-[#b8976a]/70 mb-1"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                >
                  Orari
                </p>
                <p className="text-[#5a6272] text-sm" style={{ lineHeight: 1.6 }}>
                  E Hënë – E Premte<br />
                  08:00 – 16:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-[#b8976a]/15 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p
            className="text-[#5a6272] text-xs"
            style={{ opacity: 0.5, fontFamily: 'Georgia, serif', letterSpacing: '2px' }}
          >
            © 2026 AVNORA AVDIJAJ — TË GJITHA TË DREJTAT E REZERVUARA
          </p>
          <p
            className="text-[#5a6272] text-xs"
            style={{ opacity: 0.5, fontStyle: 'italic', fontFamily: 'Georgia, serif' }}
          >
            Kontrata e sigurt është themeli i së ardhmes tuaj
          </p>
        </div>
      </div>
    </footer>
  )
}
