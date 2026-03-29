import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Copyright Notice | AusClear', description: 'AusClear copyright notice.' };

export default function Page() {
  return (<><Navigation />
    <main className="pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Copyright Notice' }]} />
        <Reveal>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.2rem,4vw,3.2rem)] font-normal leading-tight mb-8">Copyright Notice</h1>
          <p className="text-[1.05rem] text-[#9a968e] font-light leading-relaxed max-w-[800px] mb-12">All content on this website is the property of Nephthys Pty Ltd trading as AusClear.</p>
        </Reveal>
        <Reveal>
          <div className="text-center py-12">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 transition-all duration-300">Get In Touch<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg></Link>
          </div>
        </Reveal>
      </div>
    </main>
    <Footer /></>);
}
