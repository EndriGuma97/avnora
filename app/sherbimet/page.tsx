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
      'Kontratat familjare hartohen me kujdes të veçantë për të mbrojtur të drejtat dhe interesat e të gjithë paleve të përfshira. Çdo Kontratë është e personalizuar sipas situatës tuaj specifike.',
    services: [
      {
        name: 'Kontratë Paramartesore',
        desc: 'Besimi bazohet në dashuri dhe sigurinë që ofron për të ardhmen. JU e doni njëri tjetrin — keni besim të njeri tjetri dhe nuk doni të krijoni mosmarrëveshje të panevojshme rreth sigurisë së përbashkët materiale që mund ta vinin njëri tjetrin në rrethana të palakmueshme. ZGJIDHJA: Hartimi i një kontratë paramartesore e cila në mënyrë specifike do të përshkruante administrimin e pasurisë suaj të përbashket martesore.',
      },
      {
        name: 'Kontratë për Mbajtjen e Përjetshme',
        desc: 'Nuk jeni të sigurt se kush do të kujdeset për ju deri në fund të jetës suaj? ZGJIDHJA: Hartimi i një kontrate për mbatje të përjetshme nga profesionist që jo vetmëm e njohin ligjin për të drejtat sendore a trashëgimore por edhe ligjin e së drejtes së detyrimeve. Dhe për këtë ju garantojmë një kontratë plotësisht të sakt për qetësinë e të ardhmes suaj.',
      },
      {
        name: 'Kontratë Dhurate',
        desc: 'Jeni bujar me dhurata por nuk doni që bujaria juaj të keqpërdoret? ZGJIDHJA: Hartoni një Kontratë specifike për dhuraten me të drejta e detyrime që nuk ia ulin vleren e dinjitetit, bujarisë dhe mirënjohjes.',
      },
    ],
  },
  {
    id: 'comerciale',
    title: 'Kontrata Comerciale',
    icon: '📋',
    accentColor: '#5b8fa8',
    description:
      'Fushat tregtare kërkojnë Kontrata të sakta dhe të detajuara kundrejt vlerës së fitimit dhe taksa-tatimeve e tvsh-së në fuqi. Kontratat e hartuara nga AV CONTRACTS draftohen sipas vlerës së tregut dhe synimeve të klinetit tonë për siguri finaciare dhe sukses afatgjatë nga 1-5 vite e më shumë.',
    services: [
      {
        name: 'Know How Kontrata',
        desc: 'Shkëmbim njohurishë dhe trajnimesh me ndikim afatgjatë në punen tuaj ndërmarrese me Kompani; Trajner dhe Mentor të çertifikuar për avancimin e biznesit tuaj. Draftoni njohurinë specifike që dëshironi të përfitoni.',
      },
      {
        name: 'Kontratë Furnizimi',
        desc: 'Kërkesa juaj për "Tërheqjen e vërejtjes në ambalazh" është e drejtë e juaja themelore për tu mbrojtur nga ankesat e konsumatorve për të shmangur dëmet e paparishikuara dhe masa tjera përkatëse. Na lini neve draftimin e siguroni konsumatoret dhe të drejatat tuaja ligjore për të ardhmen.',
      },
      {
        name: 'Kontratë Përfaqësimi Tregtar',
        desc: 'Jeni CEO i Kompanisë suaj dhe ka ardhur koha të caktoni një përfaqësues tregtar që në emer dhe për llogari tuajen të ndërmjetësojë, si dhe me të marrë autorizimin të lidhë kontrata me persona të tretë sipas një kompensimi të caktuar. Besoni në ne dhe draftoni në mënyrë ligjore autorizimet tuaja.',
      },
      {
        name: 'Kontratë Këmbimi',
        desc: 'Nga kontrata e Këmbimit për secilin bashkëkontraktues krijohen të drejta dhe detyrime si ato që krijohen te kontrata e shitjes për shitësin dhe blerësin.',
      },
      {
        name: 'Kontratë Vepre',
        desc: 'Kontratë për kryerjen e puneve specifike me afate dhe kushte të caktuara. Çfarë aspekte të të drejtave dhe detyrimeve përfshinë Kontrata për vepren? Me Kuptueshmëri të qartë ju konkretizojmë shërbimet që hynë në Kontraten e Vepres.',
      },
      {
        name: 'Kontratë Urdhëri',
        desc: 'Objekti i kësaj kontrate mund të jetë kryerja e punëve juridike, punëve fizike dhe shërbimet intelektuale nga ana e dekretmarrësit, me shpërblim ose pa shpërblim.',
      },
      {
        name: 'Kontratë Frashizingu',
        desc: 'Frashizingu prodhues; frashizinu afarist; frashizingu për dhënjen e shërbimeve në rastet kur Frashëzingdhënësi i jep prodhimin e caktuar të mallit.',
      },
      {
        name: 'Kontratë Magazine',
        desc: 'Hartoni me ne Kontratën për Magazinë dhe siguroni saktësinë e të drejtave dhe detyrimeve mbi mallin që i takon palës tjetër dhe përmbushjes sipas kushteve kontraktuale për strehimin dhe ruajtjen e mallit në mes të subjekteve ekonomike.',
      },
      {
        name: 'Kontratë Udhëtimi',
        desc: 'Marrëveshje mes agjencive të udhëtimit dhe klienteve.',
      },
      {
        name: 'Kontratë Alotmani\\Hotelerie',
        desc: 'Kontratë Udhëtimi dhe rezervim hotelerije kolektive.',
      },
      {
        name: 'Kontratë Transporti',
        desc: 'Kryerja me shpërblim e transportit të mallit në vendin dhe kohen e caktuar, dërguesit ose përsonit të caktuar (marrësit). Apo një palë të tretë, konform rregullave Rregullat Incoterms dhe ICC. Ne sigurohemi që Kontrata juaj të jetë e përditësuar dhe shqyrtuar me nacionalizimin, shpronësimin dhe kompensimin ligjor internacional.',
      },
      {
        name: 'Kontrata për Lizing',
        desc: 'Dëshironi që pas shfrytëzimit të afatit kontraktues objekti i kontratës të kalojë në pronësinë tuaj apo të vazhdoni marrëdhënjen Lizing? Na kontaktoni dhe ju shpjegojmë nëse ia vlenë një rast i tillë.',
      },
      {
        name: 'Kontratë Ndërmjetësimi-Komitent',
        desc: 'Një kontratë e tillë e qarkullimit të mallrave, në bazë të së cilës ndërmjetësuesi detyrohet që palën tjetër — komitentin, ta sjellë në kontakt me ndonjë person tjetër të tretë, me qëllim që komitenti të lidhë me të ndonjë kontratë të qarkullimit të mallrave dhe ruajtjen e fshehtësisë afariste.',
      },
      {
        name: 'Kontratë Komisioni · Komisioner',
        desc: 'Në qarkullimin e mallrave komisionet paraqiten si komisione të shitjes, të blerjes dhe të transportit me komision. Komisionari detyrohet që të lidhë kontratë në emër të vet dhe për llogari të tjetrit (komitentit), kurse komitenti në shpengim të paguajë provizionin e kontraktuar. Shkruaj saktë të drejtat e paleve draftoje me AV Contracts delegimin e të drejtave dhe detyrimeve komisonare.',
      },
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
      {
        name: 'Kontratë Qiraje',
        desc: 'Cili është objekti i Kontratës së qirasë për prona rezidenciale dhe komerciale dhe a mbështetet në bazë të sakt ligjore sipas afatit dhe kushteve të të drejtave dhe detyrimeve të paleve kontraktuese? Çfarë alternativash keni në rast të mos përmbushjes së detyrimeve? AV CONTRACTS mendon në hollesi për ndryshimet e rrethanave dhe përmbushjen e tyre alternative.',
      },
      {
        name: 'Kontratë Shitblerje Paluajshmërie',
        desc: 'Kalimi i pronësinë së sendit përkatësisht ndonjë të drejte në emer të një titullari tjeter kërkon më shumë se sa pagimi i një çmimi të caktuar në Kontratë. Ekzistojnë: shitja me provë; shitja sipas modelit apo mostrës; shitja me specifikim; shitja me kushte; shitja me pagim të çmimit me këste; shitja me anë të akreditivit; urdhri i shitjes. Harto Kontraten tënde me dëmshpërblime të paracaktuara — Kamatë Vonesa dhe një plan B.',
      },
      {
        name: 'Kontratë Ndërtimi Sipërmarrës-Porositës',
        desc: 'Përcakton specifikisht sipas Ligjit të ndërtimit dhe planit të hartes kadastrale të detajuar — materialin e ndërtimit; kalimin e tjetërsimin e titullarit të pronësisë dokumentacionin e kompletuar dhe përcaktimin e organeve kompetenete për realizimin në kohë të regjistrimit në librat publikë kadastral.',
      },
      {
        name: 'Kontratë Huaje',
        desc: 'Kontratë huaje e një masë të caktuar sendesh të zëvendësueshme, dhe të pazëvendësueshme sipas të drejtave dhe detyrimeve të paleve kontraktuale.',
      },
      {
        name: 'Kontratë Huapërdoreje',
        desc: 'Kontratë huapërdoreje mbi një objekt, send apo të drejte në përdorim sipas kushteve kontraktuale.',
      },
      {
        name: 'Kontratë Depozite',
        desc: 'Ruajtja ose depozitimi për një kohë të caktuar të një sendi, sjellë edhe të drejat e detyrime të nevojshme. Hartoni depoztiten tuaj me shkrim dhe shmangni të papriturat.',
      },
      {
        name: 'Kontratë Magazine',
        desc: 'Hartoni me ne Kontratën për Magazinën dhe siguroni saktësinë e të drejtave dhe detyrimeve mbi mallin që i takon palës tjetër dhe përmbushjes sipas kushteve kontraktuale për strehimin dhe ruajtjen e mallit në mes të subjekteve ekonomike.',
      },
    ],
  },
  {
    id: 'ankesa',
    title: 'Ankesa & Peticione',
    icon: '📝',
    accentColor: '#8a8aaa',
    description:
      'Hartojmë dokumentacionin e nevojshëm administrativë dhe ligjor për mbrojtjen e të drejtave tuaja para institucione publike dhe private.',
    services: [
      { name: 'Ankesa & Lutje', desc: 'Hartim i ankesave dhe lutjeve drejtuar institucioneve publike dhe private.' },
      { name: 'Vendime Administrative', desc: 'Analizë dhe kontestim i vendimeve administrative.' },
      { name: 'Peticione', desc: 'Hartim i peticioneve zyrtare për mbrojtjen e të drejtave tuaja.' },
      { name: 'Aneks Kontrata & Procesverbale', desc: 'Shtesa dhe modifikime ligjore të kontratave ekzistuese si dhe hartim procesverbalave.' },
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
      {
        name: 'Marrëveshje Konfidencialiteti (NDA)',
        desc: 'Keni dikë që kujdeset për sigurinë tuaj kibernetike? Drejtohuni tek ne dhe hartoni një marrëveshje Konfidecialiteti-NDA. SIGURONI TË DREJTAT TUAJA me NE.',
      },
      {
        name: 'Marrëveshje Partneriteti',
        desc: 'Strukturimi ligjor i partneriteteve biznesore.',
      },
      {
        name: 'Marrëveshje Bashkëpunimi',
        desc: 'Kontratë mes partnereve për realizimin e projekteve të përbashkëta.',
      },
    ],
  },
  {
    id: 'konsultime',
    title: 'Konsultime Ligjore',
    icon: '🔍',
    accentColor: '#4a6a8a',
    description:
      'Konsultime ligjore profesionale · ju ndihmojmë të kuptoni pozicionin tuaj ligjor dhe të drejtat tuaja kontraktuale para se të ndërmerrni veprime. Ofrojmë kërkime ligjore në bashkëpunim me: AVOKAT — ZYRA LIGJORE DHE INDIVID.',
    services: [
      {
        name: 'Vlerësime Ligjore & Kërkime',
        desc: 'Vlerësime ligjore rreth dokumentacioneve të mbledhura mbi marrjen e një vendimi.',
      },
      { name: 'Padi Comerciale', desc: 'Vlerësim i rasteve të kontesteve tregtare kontraktuale dhe rekomandime strategjike.' },
      { name: 'Kontest Pune', desc: 'Analizë e marrëdhënieve të punës dhe të drejtave kontraktuale të punëmarrësit.' },
      { name: 'Ndarje Trashëgimie', desc: 'Vlerësim ligjor kontraktual i rasteve të trashëgimisë dhe ndarjes së pasurisë.' },
      { name: 'Parashkrime', desc: 'Vlerësim i afateve ligjore të parashkrimit dhe ndikimit në të drejtat tuaja kontraktuale.' },
      {
        name: 'Ngritje Padie për Fitimin e Humbur; Shpërblim Dëmi Material dhe Moral',
        desc: 'Vlerësim i dëmeve materiale dhe morale dhe të drejtës për kompensim kontraktual.',
      },
      { name: 'Ngritje Padie për Cenim Dinjiteti', desc: 'Vlerësim i rasteve të cënimit të dinjitetit personal dhe profesional.' },
      {
        name: 'Ngritje Padie mbi Lëndime në Vendin e Punës',
        desc: 'Lidhur me kontratat e punës dhe sigurimi në punë.',
      },
      {
        name: 'Invaliditeti — Siguria dhe Ligji',
        desc: 'Mbrojtja e të drejtave të pronareve të biznesit lidhur me invaliditetin dhe sigurimet.',
      },
      {
        name: 'Respektimi i Kontratave të Punës',
        desc: 'Përdorimi i mjeteve të sigurisë, paralajmerimet dhe zbatimet e masave të sigurimit.',
      },
      {
        name: 'Vlerësim Ligjor — Pasurimi pa Bazë Ligjore',
        desc: 'Rritja e pasurisë ose kursimi në pasurinë e një personi, duke u zvogëluar pasurinë e personit tjetër pa bazë të vlefshme juridike. Si mund të zhvillohet kjo në marrëdhënje kontraktuale dhe si mund të shmangim apo zgjidhim duke përfituar nga pasurimi me bazë ligjore edhe në fushen e real estate e më gjërë?',
      },
    ],
  },
  {
    id: 'kontrate-pune',
    title: 'Kontratë Pune',
    icon: '✍',
    accentColor: '#8a6a4a',
    description:
      'AV CONTRACTS mund të hartoj për ju Kontraten e përcaktuar sipas pozicionit individual të punëmarrësit dhe përgjësive solidare mbi të drejtat dhe detyrimet në punë, në përmbushjen e ligjit të punes dhe sigurisë në punë.',
    services: [
      {
        name: 'Kontratë Pune me Përgjegjësi Solidare',
        desc: 'Kush përgjigjet për dëmin të cilin ia shkakton personit të tretë punëmarrësi në punë ose lidhur me punën? Si kualifikohen përgjegjësitë brenda përshkrimit të të drejtave dhe detyrimeve kontraktuale? Si ju ndihmon kjo të keni parasysh edhe rastet e paparashikuara për të dyja palet me përgjegjësi solidare.',
      },
      {
        name: 'SHMANGI PROBLEMET',
        desc: 'Shkruani marrëveshjet më heret se sa ngjarjet e parashikuara.',
      },
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
