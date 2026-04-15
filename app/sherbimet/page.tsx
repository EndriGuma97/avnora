import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shërbimet — AV Contracts L.L.C.',
  description:
    'Shërbime ligjore kontraktuale: kontrata familjare, komerciale, real estate, ankesa, marrëveshje dhe konsultime ligjore. Avnora Avdijaj — Juriste profesionale.',
}

const serviceCategories = [
  {
    id: 'familjare',
    title: 'Kontrata Familjare',
    icon: '⚖',
    accentColor: '#c4a882',
    description:
      'Kontratat familjare hartohen me kujdes të veçantë për të mbrojtur të drejtat dhe interesat e të gjithë palëve të përfshira. Çdo kontratë është e personalizuar sipas situatës tuaj specifike.',
    services: [
      {
        name: 'Parakontratë Martesore',
        desc: 'Hartim i marrëveshjes parakonjugale për rregullimin e pasurisë dhe detyrimeve mes bashkëshortëve.',
      },
      {
        name: 'Kontratë për Mbajtjen e Përjetshme',
        desc: 'Kontratë ligjore për transferim pasurie me kushtin e mbajtjes së personit gjatë gjithë jetës (pa noterizim).',
      },
      {
        name: 'Kontratë për Dhuraten',
        desc: 'Dokumentim ligjor i dhurimit të pasurisë së luajtshme dhe të paluajtshme mes personave.',
      },
    ],
  },
  {
    id: 'comerciale',
    title: 'Kontrata Komerciale',
    icon: '📋',
    accentColor: '#5b8fa8',
    description:
      'Fushat tregtare kërkojnë kontrata të sakta dhe gjithëpërfshirëse. Ofrojmë hartimin e çdo lloji kontrate komerciale sipas legjislacionit në fuqi.',
    services: [
      { name: 'Kontratë Furnizimi', desc: 'Marrëveshje për furnizimin e mallrave dhe shërbimeve mes bizneseve.' },
      { name: 'Kontratë Shitje-blerje', desc: 'Transferim ligjor i pronësisë së mallrave me të gjitha kushtet e pagesës.' },
      { name: 'Kontratë Transportimi', desc: 'Kontratë për transportin e personave dhe sendeve, me përgjegjësi të qarta.' },
      { name: 'Kontratë Udhëtimi', desc: 'Marrëveshje mes agjencive të udhëtimit dhe klientëve.' },
      { name: 'Kontratë Vepre', desc: 'Kontratë për kryerjen e punëve specifike me afate dhe kushte të caktuara.' },
      { name: 'Kontratë Franshizingu', desc: 'Marrëveshje franshize midis franshizuesit dhe franshizuarit.' },
      { name: 'Kontratë Hotelerie-Alotmanit', desc: 'Kontratë për shërbime hotelerie dhe rezervime kolektive.' },
      { name: 'Kontratë Ndërmjetësimi', desc: 'Marrëveshje për ndërmjetësimin në transaksione tregtare.' },
      { name: 'Kontratë Përfaqësimi Tregtar', desc: 'Autorizim ligjor për përfaqësim në transaksione tregtare.' },
      { name: 'Kontratë Komisionit', desc: 'Marrëveshje për shitje mallrash me komision nga palë të treta.' },
      { name: 'Kontratë Urdhëri', desc: 'Kontratë për ekzekutimin e urdhërave tregtare specifike.' },
      { name: 'Kontratë Depozite', desc: 'Marrëveshje për ruajtjen e mallrave ose vlerave monetare.' },
      { name: 'Kontratë Kontrollit të Mallrave', desc: 'Kontratë për inspektimin dhe kontrollin e cilësisë së mallrave.' },
      { name: 'Kontratë Shpeditimi-Dërgimit', desc: 'Marrëveshje logjistike për transportin ndërkombëtar të mallrave.' },
      { name: 'Shitja me Specifikim', desc: 'Kontratë shitje me karakteristika teknike të detajuara.' },
      { name: 'Shitja me të Drejtën e Parablerjes', desc: 'Kontratë shitje me rezervimin e të drejtës prioritare.' },
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: '🏛',
    accentColor: '#7a9a6a',
    description:
      'Transaksionet e pasurive të paluajtshme kërkojnë kujdes ligjor të veçantë. Sigurohemi që çdo kontratë të jetë e vlefshme dhe t\'ju mbrojë plotësisht.',
    services: [
      { name: 'Kontratë për Ndërtimin', desc: 'Marrëveshje gjithëpërfshirëse mes investitorit dhe kontraktorit të ndërtimit.' },
      { name: 'Kontratë Huaje', desc: 'Kontratë financiare për dhënien ose marrjen e huasë.' },
      { name: 'Kontratë Magazine', desc: 'Marrëveshje për ruajtjen dhe menaxhimin e mallrave në magazinë.' },
      { name: 'Kontratë Qiraje', desc: 'Kontratë e qirasë për prona rezidenciale dhe komerciale.' },
      { name: 'Kontratë për Këmbimin', desc: 'Marrëveshje për shkëmbimin e pasurive ndërmjet palëve.' },
      { name: 'Kontratë Shitblerje Pasurie', desc: 'Dokumentacion i plotë ligjor për transferimin e pronësisë së pasurisë së paluajtshme.' },
      { name: 'Kontratë Huë Përdoreje', desc: 'Marrëveshje për përdorimin pa pagesë të një sendi ose pasurie.' },
    ],
  },
  {
    id: 'ankesa',
    title: 'Ankesa & Peticione',
    icon: '📝',
    accentColor: '#8a8aaa',
    description:
      'Hartojmë dokumentacionin e nevojshëm administrativ dhe ligjor për mbrojtjen e të drejtave tuaja para institucioneve.',
    services: [
      { name: 'Kërkesa Administrative', desc: 'Hartim i kërkesave formale drejtuar institucioneve publike dhe private.' },
      { name: 'Lutje & Ankesa', desc: 'Dokumentim i ankesave ligjore dhe peticioneve zyrtare.' },
      { name: 'Vendime Administrative', desc: 'Analizë dhe kontestim i vendimeve administrative.' },
      { name: 'Aneks Kontrata', desc: 'Shtesa dhe modifikime ligjore të kontratave ekzistuese.' },
      { name: 'Procesverbale', desc: 'Hartim i procesverbalave të mbledhjeve dhe vendimeve institucionale.' },
    ],
  },
  {
    id: 'marreveshje',
    title: 'Marrëveshje',
    icon: '🤝',
    accentColor: '#a07a6a',
    description:
      'Marrëveshjet e hartuara në mënyrën e duhur shmangen mosmarrëveshjet dhe garantojnë ekzekutimin e detyrimeve reciproke.',
    services: [
      { name: 'Marrëveshje Bashkëpunimi', desc: 'Kontratë mes partnerëve për realizimin e projekteve të përbashkëta.' },
      { name: 'Marrëveshje Konfidencialiteti (NDA)', desc: 'Mbrojtja e informatave konfidenciale dhe sekreteve tregtare.' },
      { name: 'Marrëveshje Partneriteti', desc: 'Strukturimi ligjor i partneriteteve biznesore.' },
      { name: 'Marrëveshje Shlyerjeje', desc: 'Zgjidhje jashtëgjyqësore e mosmarrëveshjeve mes palëve.' },
    ],
  },
  {
    id: 'konsultime',
    title: 'Konsultime Ligjore',
    icon: '🔍',
    accentColor: '#4a6a8a',
    description:
      'Konsultimet ligjore profesionale ju ndihmojnë të kuptoni pozicionin tuaj ligjor dhe të drejtat tuaja kontraktuale para se të ndërmerrni veprime. Ofrojmë analiza të thelluara të rasteve tuaja.',
    services: [
      { name: 'Padi Komerciale', desc: 'Vlerësim i rasteve të kontesteve tregtare kontraktuale dhe rekomandime strategjike.' },
      { name: 'Kontest Pune', desc: 'Analizë e marrëdhënieve të punës dhe të drejtave kontraktuale të punëmarrësit.' },
      { name: 'Ndarje Trashëgimie', desc: 'Vlerësim ligjor kontraktual i rasteve të trashëgimisë dhe ndarjes së pasurisë.' },
      { name: 'Ngritje Padie për Fitimin e Humbur', desc: 'Vlerësim i dëmeve materiale dhe të drejtës për kompensim kontraktual.' },
      { name: 'Shpërblim Dëmi Material dhe Moral', desc: 'Analizë e bazave ligjore kontraktuale për kërkimin e kompensimit.' },
      { name: 'Cenim i Dinjitetit', desc: 'Vlerësim i rasteve të cënimit të dinjitetit personal dhe profesional.' },
      { name: 'Pasurimi pa Bazë Ligjore', desc: 'Vlerësim i rasteve kur person ose kompani dyshohet për pasurimit të paligjshëm.' },
    ],
  },
]

export default function SherbimetPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-44 pb-20 relative overflow-hidden border-b border-[#c4a882]/15">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(196,168,130,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="section-title mb-6" style={{ letterSpacing: 'clamp(2px, 1.5vw, 8px)' }}>Çfarë Ofrojmë</p>
          <h1
            className="text-[#1a1f2e]"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 5vw, 52px)', letterSpacing: 'clamp(2px, 1.5vw, 8px)', fontWeight: 700 }}
          >
            SHËRBIMET
          </h1>
          <div className="gold-divider mt-6 mb-8" />
          <p
            className="text-[#5a6272] max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: '15px' }}
          >
            AV Contracts L.L.C. ofron shërbime gjithëpërfshirëse ligjore kontraktuale
            për individë dhe biznese. Çdo shërbim ofrohet me profesionalizëm, saktësi dhe
            kujdes për detajet.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {serviceCategories.map((cat, i) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`mb-20 pb-20 ${i < serviceCategories.length - 1 ? 'border-b border-[#c4a882]/15' : ''}`}
          >
            {/* Category header */}
            <div
              className="flex items-start gap-6 mb-10 pb-6"
              style={{ borderLeft: `4px solid ${cat.accentColor}`, paddingLeft: '20px' }}
            >
              <div
                className="flex-shrink-0 mt-1"
                style={{ fontFamily: 'Georgia, serif', fontSize: '32px', opacity: 0.8, color: cat.accentColor }}
              >
                {cat.icon}
              </div>
              <div>
                <h2
                  style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 3vw, 28px)', letterSpacing: '4px', fontWeight: 700, color: cat.accentColor }}
                >
                  {cat.title}
                </h2>
                <p
                  className="text-[#5a6272] mt-3 max-w-2xl leading-relaxed"
                  style={{ fontSize: '14px', lineHeight: '1.8' }}
                >
                  {cat.description}
                </p>
              </div>
            </div>

            {/* Services grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.services.map((service) => (
                <div
                  key={service.name}
                  className="bg-[#f0ede8] hover:bg-[#ede6da] transition-colors p-6"
                  style={{ borderTop: `2px solid ${cat.accentColor}30`, borderLeft: `2px solid ${cat.accentColor}` }}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 flex-shrink-0" style={{ fontSize: '6px', color: cat.accentColor }}>◆</span>
                    <div>
                      <h3
                        className="mb-2"
                        style={{ fontFamily: 'Georgia, serif', fontSize: '14px', letterSpacing: '1px', fontWeight: 700, color: '#1a1f2e' }}
                      >
                        {service.name}
                      </h3>
                      <p className="text-[#5a6272] text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#f0ede8] border-t border-[#c4a882]/15 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="section-title mb-4">Filloni Sot</p>
          <h2
            className="text-[#1a1f2e] mb-4"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(20px, 3vw, 32px)', letterSpacing: '3px', fontWeight: 700 }}
          >
            Keni Nevojë për një Shërbim?
          </h2>
          <p className="text-[#5a6272] mb-8 text-sm leading-relaxed">
            Na kontaktoni për konsultim fillestar dhe ne do t&apos;ju ndihmojmë të gjeni zgjidhjen
            e duhur ligjore për situatën tuaj.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+38345420656" className="btn-gold-filled">
              +383 45 420 656
            </a>
            <Link href="/kontakt" className="btn-gold">
              Forma e Kontaktit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
