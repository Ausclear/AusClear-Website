'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ddItems = [
  { href: '/services', label: 'Services' },
  { href: '/baseline-security-clearance', label: 'Baseline Clearance' },
  { href: '/nv1-security-clearance', label: 'NV1 Clearance' },
  { href: '/nv2-security-clearance', label: 'NV2 Clearance' },
  { href: '/glossary', label: 'Glossary of Terms' },
  { href: 'https://support.ausclear.au', label: 'Knowledge Base', external: true },
];

const lk: React.CSSProperties = {
  fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.12em',
  textTransform: 'uppercase', color: '#9a968e', cursor: 'pointer',
  background: 'none', border: 'none', fontFamily: "'Raleway',sans-serif",
  textDecoration: 'none', transition: 'color 0.3s',
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [mobileDdOpen, setMobileDdOpen] = useState(false);
  const pathname = usePathname();
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setDdOpen(false); setMobileDdOpen(false); }, [pathname]);

  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false); };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  return (
    <>
      <style>{`
        .ac-desktop-nav { display: flex; }
        .ac-mobile-toggle { display: none; }
        .ac-mobile-menu { display: none; }
        @media (max-width: 1024px) {
          .ac-desktop-nav { display: none !important; }
          .ac-mobile-toggle { display: flex !important; }
          .ac-mobile-menu { display: flex !important; }
        }
      `}</style>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 clamp(16px, 4vw, 48px)',
        height: scrolled ? 64 : 80,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(9,9,9,0.95)' : 'rgba(9,9,9,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        transition: 'all 0.4s ease',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://ausclear.au/AusClear-Dark-Transparent.png" alt="AusClear" style={{ height: 44 }} />
        </Link>

        {/* Desktop */}
        <div className="ac-desktop-nav" style={{ alignItems: 'center', gap: 32 }}>
          <Link href="/" style={lk}>Home</Link>
          <Link href="/why-ausclear" style={lk}>Why Us</Link>
          <div ref={ddRef} style={{ position: 'relative' }} onMouseEnter={() => setDdOpen(true)} onMouseLeave={() => setDdOpen(false)}>
            <button onClick={() => setDdOpen(!ddOpen)} style={{ ...lk, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
              Clearance Help
              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.2s', transform: ddOpen ? 'rotate(180deg)' : 'none' }}><path d="M2 3.5l3 3 3-3" /></svg>
            </button>
            <div style={{
              position: 'absolute', top: '100%', left: 0, marginTop: 12, width: 220,
              background: '#141414', border: '1px solid rgba(201,168,76,0.12)',
              padding: '8px 0', boxShadow: '0 16px 48px rgba(0,0,0,0.4)',
              opacity: ddOpen ? 1 : 0, visibility: ddOpen ? 'visible' as const : 'hidden' as const,
              transform: ddOpen ? 'translateY(0)' : 'translateY(-8px)', transition: 'all 0.2s',
            }}>
              {ddItems.map(d => d.external ? (
                <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: '10px 20px', fontSize: '0.78rem', color: '#9a968e', textDecoration: 'none', fontFamily: "'Raleway',sans-serif" }}>{d.label}</a>
              ) : (
                <Link key={d.label} href={d.href} style={{ display: 'block', padding: '10px 20px', fontSize: '0.78rem', color: '#9a968e', textDecoration: 'none', fontFamily: "'Raleway',sans-serif" }}>{d.label}</Link>
              ))}
            </div>
          </div>
          <Link href="/faq" style={lk}>FAQ</Link>
          <Link href="/contact" style={lk}>Contact</Link>
          <Link href="/contact" style={{ padding: '10px 28px', border: '1px solid #c9a84c', color: '#c9a84c', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none', transition: 'all 0.3s' }}>Get Started</Link>
        </div>

        {/* Mobile toggle */}
        <button className="ac-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" style={{ flexDirection: 'column', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{ width: 24, height: 1.5, background: '#c9a84c', display: 'block' }} />
          <span style={{ width: 24, height: 1.5, background: '#c9a84c', display: 'block' }} />
          <span style={{ width: 24, height: 1.5, background: '#c9a84c', display: 'block' }} />
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="ac-mobile-menu" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: 'rgba(9,9,9,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.12)', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '32px 0' }}>
            <Link href="/" style={{ ...lk, fontSize: '0.9rem' }}>Home</Link>
            <Link href="/why-ausclear" style={{ ...lk, fontSize: '0.9rem' }}>Why Us</Link>
            <button onClick={() => setMobileDdOpen(!mobileDdOpen)} style={{ ...lk, fontSize: '0.9rem', color: '#c9a84c', display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
              Clearance Help
              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: mobileDdOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="M2 3.5l3 3 3-3" /></svg>
            </button>
            {mobileDdOpen && ddItems.map(d => d.external ? (
              <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: '#9a968e', textDecoration: 'none' }}>{d.label}</a>
            ) : (
              <Link key={d.label} href={d.href} style={{ fontSize: '0.85rem', color: '#9a968e', textDecoration: 'none' }}>{d.label}</Link>
            ))}
            <Link href="/faq" style={{ ...lk, fontSize: '0.9rem', marginTop: 8 }}>FAQ</Link>
            <Link href="/contact" style={{ ...lk, fontSize: '0.9rem' }}>Contact</Link>
            <Link href="/contact" style={{ padding: '10px 28px', border: '1px solid #c9a84c', color: '#c9a84c', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' as const, textDecoration: 'none', marginTop: 8 }}>Get Started</Link>
          </div>
        )}
      </nav>
    </>
  );
}
