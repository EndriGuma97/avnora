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

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/avnora-avdijaj-a17387242"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b0a898] hover:text-[#c4a882] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/av.contracts/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b0a898] hover:text-[#c4a882] transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
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
