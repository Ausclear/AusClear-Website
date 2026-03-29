import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Why Choose AusClear | Security Clearance Sponsorship', description: 'AusClear is a South Australian-based security clearance sponsor operating in the heart of Australia\'s leading defence state.' };

export default function WhyAusClear() {
  return (<><Navigation />
    <main className="pt-28 pb-20 px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Why AusClear' }]} />
        <Reveal>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.4rem,4.5vw,3.6rem)] font-normal leading-tight mb-8">Why Choose <em className="italic text-[#c9a84c]">AusClear</em>?</h1>
          <p className="text-[1.05rem] text-[#9a968e] font-light leading-relaxed max-w-[800px] mb-16">AusClear is a South Australian–based security clearance sponsor, operating in the heart of Australia's leading defence state. We support individuals and organisations seeking access to roles that require Australian Government security clearances, with a focus on clear, compliant pathways aligned with Defence requirements.</p>
        </Reveal>

        {/* Sections matching real site */}
        {[
          { title: 'Ongoing Support', desc: 'Security clearance is a long-term commitment. With AusClear, you\'re covered:', items: ['Regular Compliance Monitoring: Tracking training and renewal deadlines', 'Policy Updates: Keeping you informed on relevant changes', 'Proactive Guidance: Preparing you for new requirements'] },
          { title: 'Dedicated Support', desc: 'AusClear provides expert guidance throughout the security clearance process. Our team addresses all your queries to ensure a smooth journey.', items: ['Business Hours: Mon–Thu 9am–5pm, Fri 9am–6pm', 'After-Hours: Immediate responses via our live chatbot; detailed queries addressed next business day', 'Guaranteed Response: Responses within 24 hours on weekdays or by next business day on weekends'] },
          { title: 'Knowledge Base & FAQ', desc: 'Our Knowledge Base provides detailed articles on the security clearance process, covering everything from eligibility requirements to renewal procedures.', items: ['How to apply for a security clearance', 'Eligibility requirements for different clearance levels', 'Steps to renew your security clearance'] },
        ].map((section) => (
          <Reveal key={section.title} className="mb-16">
            <div className="p-10 bg-[#141414] border border-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300">
              <h2 className="font-['Playfair_Display'] text-2xl font-normal mb-4">{section.title}</h2>
              <p className="text-[0.95rem] text-[#9a968e] font-light leading-relaxed mb-6">{section.desc}</p>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item} className="flex gap-3 text-[0.88rem] text-[#9a968e] font-light">
                    <span className="text-[#c9a84c] mt-0.5">—</span><span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* CTA */}
        <Reveal>
          <div className="text-center py-16">
            <h2 className="font-['Playfair_Display'] text-[clamp(1.8rem,3vw,2.4rem)] font-normal mb-6">Ready to Get Started?</h2>
            <p className="text-[1rem] text-[#9a968e] font-light mb-10 max-w-[600px] mx-auto">Don't let the challenges of the security clearance process hold you back. Partner with AusClear and experience the confidence of knowing your clearance sponsorship is handled by a dedicated team of experts.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 transition-all duration-300">Contact Us Today<svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg></Link>
          </div>
        </Reveal>
      </div>
    </main>
    <Footer /></>);
}
