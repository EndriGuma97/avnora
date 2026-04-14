import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt — AV Contracts L.L.C.',
  description: 'Kontaktoni Avnora Avdijaj për shërbime ligjore kontraktuale. Tel: +383 45 420 656 | Email: av.contracts.ks@gmail.com',
}

export default function KontaktPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 md:pt-44 pb-12 md:pb-20 relative overflow-hidden border-b border-[#b8976a]/10">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,151,106,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <p className="section-title mb-5">Na Gjeni</p>
          <h1
            className="text-[#1a1f2e]"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(26px, 5vw, 50px)',
              letterSpacing: 'clamp(4px, 2vw, 10px)',
              fontWeight: 400,
            }}
          >
            KONTAKT
          </h1>
          <div className="gold-divider mt-5 mb-6" />
          <p
            className="text-[#5a6272] max-w-xl mx-auto leading-relaxed text-sm md:text-base"
          >
            Jemi të gatshëm t&apos;ju ndihmojmë. Na kontaktoni për konsultim fillestar
            ose për çdo pyetje lidhur me shërbimet tona.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto px-5 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">

          {/* Contact Info */}
          <div>
            <p className="section-title mb-6 md:mb-8">Informacione Kontakti</p>

            <div className="space-y-6 md:space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-4 md:items-start md:gap-5">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 border border-[#b8976a]/30 flex items-center justify-center flex-shrink-0"
                  style={{ color: '#b8976a', fontSize: '17px' }}
                >
                  ☎
                </div>
                <div>
                  <p
                    className="text-[#b8976a] mb-1"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                  >
                    Telefon
                  </p>
                  <a
                    href="tel:+38345420656"
                    className="text-[#1a1f2e] text-base md:text-lg hover:text-[#b8976a] transition-colors"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    +383 45 420 656
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 md:items-start md:gap-5">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 border border-[#b8976a]/30 flex items-center justify-center flex-shrink-0"
                  style={{ color: '#b8976a', fontSize: '17px' }}
                >
                  ✉
                </div>
                <div className="min-w-0">
                  <p
                    className="text-[#b8976a] mb-1"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:av.contracts.ks@gmail.com"
                    className="text-[#1a1f2e] text-sm md:text-base hover:text-[#b8976a] transition-colors break-all"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    av.contracts.ks@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 md:items-start md:gap-5">
                <div
                  className="w-11 h-11 md:w-12 md:h-12 border border-[#b8976a]/30 flex items-center justify-center flex-shrink-0"
                  style={{ color: '#b8976a', fontSize: '17px' }}
                >
                  ◷
                </div>
                <div>
                  <p
                    className="text-[#b8976a] mb-1"
                    style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
                  >
                    Orari i Punës
                  </p>
                  <p className="text-[#1a1f2e] text-sm md:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                    E Hënë – E Premte
                  </p>
                  <p className="text-[#b8976a] mt-0.5 text-lg md:text-xl" style={{ fontFamily: 'Georgia, serif', letterSpacing: '2px' }}>
                    08:00 – 16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline box */}
            <div className="mt-8 md:mt-12 p-5 md:p-6 border border-[#b8976a]/20 bg-[#f0ede8]">
              <p
                className="text-[#b8976a] mb-2"
                style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
              >
                Moto jonë
              </p>
              <p
                className="text-[#1a1f2e] text-sm md:text-base"
                style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', lineHeight: 1.7 }}
              >
                &ldquo;Kontrata e sigurt është themeli i së ardhmes tuaj&rdquo;
              </p>
              <div
                className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[#b8976a]/50"
                style={{ fontFamily: 'Georgia, serif', fontSize: '9px', letterSpacing: '2px' }}
              >
                <span>KUPTUESHMËRI</span>
                <span>·</span>
                <span>SIGURI</span>
                <span>·</span>
                <span>SAKTËSI</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="section-title mb-6 md:mb-8">Dërgoni Mesazh</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/av.contracts.ks@gmail.com"
      method="POST"
      className="space-y-4 md:space-y-5"
    >
      <input type="hidden" name="_subject" value="Mesazh i ri nga faqja AV Contracts" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://avcontracts.com/kontakt?sent=true" />
      <input type="text" name="_honey" style={{ display: 'none' }} />

      <div>
        <label
          className="block text-[#b8976a] mb-2"
          style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          Emri i Plotë *
        </label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-white border border-[#b8976a]/25 text-[#1a1f2e] px-4 py-3 focus:outline-none focus:border-[#b8976a]/70 transition-colors text-sm md:text-base"
          placeholder="Emri dhe Mbiemri"
        />
      </div>

      <div>
        <label
          className="block text-[#b8976a] mb-2"
          style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          Email *
        </label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-white border border-[#b8976a]/25 text-[#1a1f2e] px-4 py-3 focus:outline-none focus:border-[#b8976a]/70 transition-colors text-sm md:text-base"
          placeholder="emailijuaj@email.com"
        />
      </div>

      <div>
        <label
          className="block text-[#b8976a] mb-2"
          style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          Telefon
        </label>
        <input
          type="tel"
          name="telefon"
          className="w-full bg-white border border-[#b8976a]/25 text-[#1a1f2e] px-4 py-3 focus:outline-none focus:border-[#b8976a]/70 transition-colors text-sm md:text-base"
          placeholder="+383 XX XXX XXX"
        />
      </div>

      <div>
        <label
          className="block text-[#b8976a] mb-2"
          style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          Shërbimi i Kërkuar
        </label>
        <select
          name="sherbimi"
          className="w-full bg-white border border-[#b8976a]/25 text-[#1a1f2e] px-4 py-3 focus:outline-none focus:border-[#b8976a]/70 transition-colors text-sm md:text-base"
        >
          <option value="">— Zgjidhni shërbimin —</option>
          <option value="Kontrata Familjare">Kontrata Familjare</option>
          <option value="Kontrata Comerciale">Kontrata Comerciale</option>
          <option value="Real Estate">Real Estate</option>
          <option value="Ankesa & Peticione">Ankesa &amp; Peticione</option>
          <option value="Marrëveshje">Marrëveshje</option>
          <option value="Konsultime Ligjore">Konsultime Ligjore</option>
          <option value="Tjera">Tjera</option>
        </select>
      </div>

      <div>
        <label
          className="block text-[#b8976a] mb-2"
          style={{ fontFamily: 'Georgia, serif', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}
        >
          Mesazhi *
        </label>
        <textarea
          name="mesazhi"
          required
          rows={5}
          className="w-full bg-white border border-[#b8976a]/25 text-[#1a1f2e] px-4 py-3 focus:outline-none focus:border-[#b8976a]/70 transition-colors resize-none text-sm md:text-base"
          placeholder="Përshkruani shkurtimisht nevojën tuaj ligjore..."
        />
      </div>

      <button type="submit" className="btn-gold-filled w-full py-4">
        Dërgo Mesazhin
      </button>

      <p className="text-[#5a6272] text-xs text-center" style={{ opacity: 0.7 }}>
        Do t&apos;ju përgjigjemi brenda 24 orëve të punës.
      </p>
    </form>
  )
}
