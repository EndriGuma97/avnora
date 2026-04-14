'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Kryefaqja' },
  { href: '/sherbimet', label: 'Shërbimet' },
  { href: '/blog', label: 'Artikuj' },
  { href: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#b8976a]/15 py-2'
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo — smaller on mobile */}
        <Link href="/" className="group flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="AV Contracts L.L.C. — Avnora Avdijaj"
            width={160}
            height={164}
            className={`transition-all duration-500 w-auto ${
              scrolled
                ? 'h-16 md:h-20'
                : 'h-20 md:h-28'
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-all duration-300 text-xs tracking-widest uppercase ${
                pathname === link.href
                  ? 'text-[#b8976a]'
                  : 'text-[#c8c8c8] hover:text-[#b8976a]'
              }`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+38345420656"
            className="btn-gold text-xs"
            style={{ padding: '8px 20px' }}
          >
            Na Kontaktoni
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Mbylle menunë' : 'Hap menunë'}
        >
          <span
            className={`block w-6 h-px bg-[#b8976a] transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#b8976a] transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#b8976a] transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#faf9f7] border-t border-[#b8976a]/15 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm tracking-widest uppercase transition-colors border-b border-[#b8976a]/5 ${
                pathname === link.href ? 'text-[#b8976a]' : 'text-[#c8c8c8]'
              }`}
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="tel:+38345420656"
              className="btn-gold-filled text-center py-3"
              onClick={() => setMenuOpen(false)}
            >
              +383 45 420 656
            </a>
            <a
              href="mailto:av.contracts.ks@gmail.com"
              className="btn-gold text-center py-3"
              onClick={() => setMenuOpen(false)}
            >
              av.contracts.ks@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
