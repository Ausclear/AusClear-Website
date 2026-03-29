'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const clearanceDropdown = [
  { href: '/services', label: 'Services' },
  { href: '/baseline-security-clearance', label: 'Baseline Clearance' },
  { href: '/nv1-security-clearance', label: 'NV1 Clearance' },
  { href: '/nv2-security-clearance', label: 'NV2 Clearance' },
  { href: '/glossary', label: 'Glossary of Terms' },
  { href: 'https://support.ausclear.au', label: 'Knowledge Base', external: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false); setMobileDropdownOpen(false); }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] px-6 lg:px-12 flex items-center justify-between border-b border-[rgba(201,168,76,0.12)] backdrop-blur-xl transition-all duration-400 ${scrolled ? 'h-16 bg-[#090909]/95' : 'h-20 bg-[#090909]/85'}`}>
      <Link href="/" className="flex items-center gap-3 no-underline">
        <span className="font-['Raleway'] text-xl font-semibold tracking-[0.15em] uppercase text-[#f0ede6]">
          <span className="text-[#c9a84c] font-bold">(</span>A<span className="text-[#c9a84c] font-bold">)</span>
          <span className="text-white">us</span>
          <span className="text-[#c9a84c]">Clear</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-8">
        <Link href="/" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c] transition-colors">Home</Link>
        <Link href="/why-ausclear" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c] transition-colors">Why Us</Link>

        {/* Clearance Help dropdown */}
        <div
          className="relative"
          ref={dropdownRef}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#9a968e] hover:text-[#c9a84c] transition-colors bg-transparent border-none cursor-pointer flex items-center gap-1.5 font-['Raleway']"
          >
            Clearance Help
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}><path d="M2 3.5l3 3 3-3"/></svg>
          </button>
          <div
            className="absolute top-full left-0 mt-3 w-56 bg-[#141414] border border-[rgba(201,168,76,0.12)] py-2 shadow-2xl transition-all duration-200"
            style={{
              opacity: dropdownOpen ? 1 : 0,
              visibility: dropdownOpen ? 'visible' : 'hidden',
              transform: dropdownOpen ? 'translateY(0)' : 'translateY(-8px)',
            }}
          >
            {clearanceDropdown.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="block px-5 py-2.5 text-[0.78rem] text-[#9a968e] no-underline hover:text-[#c9a84c] hover:bg-[#1a1a1a] transition-colors font-['Raleway']">{item.label}</a>
              ) : (
                <Link key={item.href} href={item.href} className="block px-5 py-2.5 text-[0.78rem] text-[#9a968e] no-underline hover:text-[#c9a84c] hover:bg-[#1a1a1a] transition-colors font-['Raleway']">{item.label}</Link>
              )
            )}
          </div>
        </div>

        <Link href="/faq" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c] transition-colors">FAQ</Link>
        <Link href="/contact" className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c] transition-colors">Contact</Link>
        <Link href="/contact" className="px-7 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-[0.72rem] tracking-[0.15em] uppercase no-underline hover:bg-[#c9a84c] hover:text-[#090909] transition-all duration-300">Get Started</Link>
      </div>

      {/* Mobile toggle */}
      <button className="flex lg:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
        <span className="w-6 h-[1.5px] bg-[#c9a84c]" /><span className="w-6 h-[1.5px] bg-[#c9a84c]" /><span className="w-6 h-[1.5px] bg-[#c9a84c]" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#090909]/95 backdrop-blur-xl border-b border-[rgba(201,168,76,0.12)] flex flex-col items-center gap-5 py-8 lg:hidden">
          <Link href="/" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Home</Link>
          <Link href="/why-ausclear" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Why Us</Link>
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="text-sm font-medium tracking-[0.12em] uppercase text-[#c9a84c] bg-transparent border-none cursor-pointer flex items-center gap-2 font-['Raleway'] mt-2"
          >
            Clearance Help
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}><path d="M2 3.5l3 3 3-3"/></svg>
          </button>
          {mobileDropdownOpen && (
            <div className="flex flex-col items-center gap-4">
              <Link href="/services" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Services</Link>
              <Link href="/baseline-security-clearance" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Baseline Clearance</Link>
              <Link href="/nv1-security-clearance" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">NV1 Clearance</Link>
              <Link href="/nv2-security-clearance" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">NV2 Clearance</Link>
              <Link href="/glossary" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Glossary</Link>
              <a href="https://support.ausclear.au" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Knowledge Base</a>
            </div>
          )}
          <Link href="/faq" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c] mt-2">FAQ</Link>
          <Link href="/contact" className="text-sm font-medium tracking-[0.12em] uppercase text-[#9a968e] no-underline hover:text-[#c9a84c]">Contact</Link>
          <Link href="/contact" className="px-7 py-2.5 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.15em] uppercase no-underline hover:bg-[#c9a84c] hover:text-[#090909] transition-all mt-2">Get Started</Link>
        </div>
      )}
    </nav>
  );
}
