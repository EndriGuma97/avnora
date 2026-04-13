import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AV Contracts L.L.C. — Avnora Avdijaj | Shërbime Ligjore',
  description:
    'Juriste dhe draftuese profesionale kontratash. Shërbime ligjore kontraktuale: kontrata familjare, comerciale, real estate, vlerësime ligjore dhe ankesa. Kuptueshmëri · Siguri · Saktësi.',
  keywords:
    'kontrata, shërbime ligjore, juriste, draftuese kontratash, AV Contracts, Avnora Avdijaj, Kosovo',
  openGraph: {
    title: 'AV Contracts L.L.C. — Avnora Avdijaj',
    description: 'Shërbime profesionale ligjore kontraktuale në Kosovë.',
    locale: 'sq_AL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sq">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
