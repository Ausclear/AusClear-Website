import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'NV1 Security Clearance Australia | AusClear', description: 'NV1 Security Clearance sponsorship. Access to SECRET classified information. Requirements, fees, process and timelines.' };

export default function Page() {
  return (<><Navigation />
    <main className="pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'NV1 Security Clearance' }]} />
        <Reveal>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-tight mb-8">NV1 Security Clearance</h1>
          <p className="text-[1.05rem] text-[#9a968e] font-light leading-relaxed max-w-[800px] mb-12">Access to information classified up to <strong className="text-[#c9a84c] font-medium">SECRET</strong>. AusClear provides direct sponsorship for this clearance level with full case management and AGSVA-aligned compliance.</p>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[rgba(201,168,76,0.12)] mb-16">
            <div className="bg-[#141414] p-8 text-center"><div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6760] mb-2">AGSVA Fee</div><div className="font-['Playfair_Display'] text-2xl text-[#c9a84c]">$1,355</div><div className="text-[0.72rem] text-[#6b6760] mt-1">inc. GST</div></div>
            <div className="bg-[#141414] p-8 text-center"><div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6760] mb-2">Processing Time</div><div className="font-['Playfair_Display'] text-2xl text-[#f0ede6]">3-4 months</div></div>
            <div className="bg-[#141414] p-8 text-center"><div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6760] mb-2">Background History</div><div className="font-['Playfair_Display'] text-2xl text-[#f0ede6]">10 years</div></div>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-8 mb-16">
            <div className="bg-[#141414] border border-[rgba(201,168,76,0.12)] p-10">
              <h2 className="font-['Playfair_Display'] text-xl font-medium mb-4">What We Provide</h2>
              <div className="space-y-3 text-[0.9rem] text-[#9a968e] font-light">
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Assessment of eligibility and preparation for clearance sponsorship</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Direct security clearance sponsorship through AGSVA</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Comprehensive guidance throughout the clearance process</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Application preparation support and advice</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Expert advice on AGSVA and PSPF guidelines</div>
              </div>
            </div>
            <div className="bg-[#141414] border border-[rgba(201,168,76,0.12)] p-10">
              <h2 className="font-['Playfair_Display'] text-xl font-medium mb-4">Requirements</h2>
              <div className="space-y-3 text-[0.9rem] text-[#9a968e] font-light">
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Australian citizenship (verified through official documents)</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Checkable background including employment and residential history</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Character assessment through reference checks</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>Criminal history check and identity verification</div>
                <div className="flex gap-3"><span className="text-[#c9a84c]">&#x2014;</span>10 years employment and residential address history</div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-center py-12">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 transition-all duration-300">Apply Now<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg></Link>
          </div>
        </Reveal>
      </div>
    </main>
    <Footer /></>);
}
