import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Security Clearance Sponsorship Services | Baseline, NV1 & NV2 | AusClear', description: 'Structured support for Baseline, NV1, and NV2 security clearances. Direct sponsorship with expert AGSVA-aligned guidance.' };

const services = [
  { icon: null, level: 'Baseline', title: 'Baseline Security Clearance', desc: 'AusClear provides direct sponsorship for Baseline security clearances, assisting individuals and organisations with access to PROTECTED information.', items: ['Comprehensive eligibility guidance', 'Direct clearance sponsorship', 'Expert advisory support throughout'], fee: '$884', time: '20 business days', href: '/baseline-security-clearance' },
  { icon: null, level: 'NV1', title: 'NV1 Security Clearance', desc: 'AusClear provides structured sponsorship for NV1 security clearances, enabling access to SECRET-level information.', items: ['Complete NV1 sponsorship support', 'Expert eligibility assessment', 'Full case management'], fee: '$1,355', time: '3-4 months', href: '/nv1-security-clearance' },
  { icon: null, level: 'NV2', title: 'NV2 Security Clearance', desc: 'AusClear provides comprehensive sponsorship for NV2 security clearances, enabling access to highly sensitive TOP SECRET and codeword-level information.', items: ['Expert NV2 sponsorship support', 'Comprehensive eligibility guidance', 'Full vetting lifecycle management'], fee: '$2,486', time: '5-6 months', href: '/nv2-security-clearance' },
  { icon: null, level: 'SecurePath', title: 'SecurePath Initiative', desc: 'Expert guidance combines with powerful digital tools, giving you a clear, structured pathway to manage your security clearance journey through our integrated digital platform.', items: ['Real-time clearance status tracking', 'Secure message board and document sharing', 'Corporate sponsor dashboard access'], fee: null, time: 'Coming Soon', href: '#' },
];

export default function Services() {
  return (<><Navigation />
    <main className="pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        <Reveal>
          <div className="text-center mb-4"><a href="tel:1300027423" className="text-[#c9a84c] no-underline text-[0.85rem]">Call Us: 1300 027 423</a></div>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.4rem,4.5vw,3.6rem)] font-normal leading-tight mb-6">Security Clearance <em className="italic text-[#c9a84c]">Services</em></h1>
          <p className="text-[1.05rem] text-[#9a968e] font-light leading-relaxed max-w-[800px] mb-16">Structured support for Baseline, NV1, and NV2 security clearances, combining direct sponsorship and expert guidance to help individuals and organisations access clearance-required roles in a compliant and practical way.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((s) => (
            <Reveal key={s.level}>
              <div className="bg-[#141414] border border-[rgba(201,168,76,0.12)] p-10 h-full group hover:border-[rgba(201,168,76,0.3)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="w-10 h-px bg-[#c9a84c] mb-6" />
                <h2 className="font-['Playfair_Display'] text-xl font-medium mb-4">{s.title}</h2>
                <p className="text-[0.9rem] text-[#9a968e] font-light leading-relaxed mb-6">{s.desc}</p>
                <div className="space-y-2 mb-6">
                  {s.items.map((item) => (
                    <div key={item} className="flex gap-3 text-[0.85rem] text-[#9a968e] font-light"><span className="text-[#c9a84c]">—</span><span>{item}</span></div>
                  ))}
                </div>
                {s.fee && (
                  <div className="flex gap-8 mb-6 text-[0.78rem]">
                    <div><span className="text-[#6b6760] uppercase tracking-wider">AGSVA Fee:</span> <span className="text-[#f0ede6] font-medium">{s.fee}</span></div>
                    <div><span className="text-[#6b6760] uppercase tracking-wider">Processing:</span> <span className="text-[#f0ede6] font-medium">{s.time}</span></div>
                  </div>
                )}
                {!s.fee && <p className="text-[0.78rem] text-[#6b6760] mb-6">Status: {s.time}</p>}
                <Link href={s.href} className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#c9a84c] no-underline hover:gap-3.5 transition-all duration-300">Learn More <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4" /></svg></Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center py-12">
            <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.4rem)] font-normal mb-6">Ready to Get Started?</h2>
            <p className="text-[1rem] text-[#9a968e] font-light mb-10 max-w-[600px] mx-auto">Don't let the challenges of the security clearance process hold you back. Partner with AusClear for expert sponsorship and guidance.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 transition-all duration-300">Contact Us Today<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg></Link>
          </div>
        </Reveal>
      </div>
    </main>
    <Footer /></>);
}
