import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 lg:px-12 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(201,168,76,0.04)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(201,168,76,0.06)] pointer-events-none" />

        <div className="relative z-10 max-w-[820px]" style={{ animation: 'fadeInUp 1s ease 0.3s both' }}>
          <div className="inline-flex items-center gap-2.5 px-6 py-2 border border-[rgba(201,168,76,0.12)] text-[0.7rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-12">
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" style={{ animation: 'pulse 2s ease infinite' }} />
            Active AGSVA Clearance Sponsor
          </div>
          <h1 className="font-['Playfair_Display'] text-[clamp(2.6rem,5.5vw,4.6rem)] font-normal leading-[1.15] tracking-tight mb-7">
            Security Clearance Sponsorship <em className="italic text-[#c9a84c]">Made Simple</em>
          </h1>
          <p className="text-[1.05rem] text-[#9a968e] max-w-[600px] mx-auto mb-12 font-light leading-relaxed">
            AusClear provides direct sponsorship for Baseline, NV1, and NV2 security clearances, with structured pathways assisting individuals to access clearance-required roles. Expert guidance and case management throughout.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.2)] transition-all duration-300">
              Get Started Today
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2.5 px-10 py-4 bg-transparent text-[#f0ede6] text-[0.75rem] font-medium tracking-[0.15em] uppercase no-underline border border-[rgba(255,255,255,0.15)] hover:border-[#c9a84c] hover:text-[#c9a84c] hover:-translate-y-0.5 transition-all duration-300">
              Explore Sponsorship Levels
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[0.85rem]">
            <a href="tel:1300027423" className="text-[#c9a84c] no-underline hover:text-[#d4b96a] transition-colors">1300 027 423</a>
            <a href="mailto:support@ausclear.com.au?subject=Security%20Clearance%20Enquiry" className="text-[#c9a84c] no-underline hover:text-[#d4b96a] transition-colors">support@ausclear.com.au</a>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 border-y border-[rgba(201,168,76,0.12)] bg-[#0f0f0f]">
          {[
            { num: 'NV2', label: 'Highest Level' },
            { num: 'Fast', label: 'Expert Guidance' },
            { num: '24hr', label: 'Guaranteed Response' },
          ].map((m, i) => (
            <div key={i} className={`py-12 px-8 text-center hover:bg-[#141414] transition-colors ${i < 2 ? 'border-r border-[rgba(201,168,76,0.12)]' : ''}`}>
              <div className="font-['Playfair_Display'] text-[2.2rem] font-normal text-[#c9a84c] leading-none mb-2">{m.num}</div>
              <div className="text-[0.72rem] tracking-[0.15em] uppercase text-[#6b6760]">{m.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ABOUT */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-4">
              <span className="w-10 h-px bg-[#c9a84c]" />About AusClear
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-8">
              Start Your Security Clearance Journey Today
            </h2>
          </Reveal>
          <Reveal>
            <div className="space-y-6 text-[1rem] text-[#9a968e] font-light leading-relaxed">
              <p>At AusClear, we make the security clearance process straightforward and practical. We support individuals and organisations seeking access to roles that require Australian Government security clearances, providing clear, structured pathways aligned with Defence and AGSVA requirements.</p>
              <p>As an active clearance sponsor, we provide direct security clearance sponsorship for Baseline, NV1, and NV2 clearances, supporting individuals preparing for clearance-required roles and assisting Defence-industry organisations to access suitably cleared personnel.</p>
              <p>Our focus is on removing uncertainty from the clearance journey and ensuring it is handled with professionalism, accuracy, and a strong commitment to compliance.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE AUSCLEAR */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-4">
              <span className="w-10 h-px bg-[#c9a84c]" />Why Choose AusClear
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-16">
              Why Choose AusClear for Security Clearance Sponsorship?
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.12)]">
              {[
                { icon: null, title: 'Trusted Security Compliance', desc: 'We adhere to the highest standards of security and compliance throughout every stage of the sponsorship process.' },
                { icon: null, title: 'Expert Sponsorship Guidance', desc: 'Specialising in Baseline, NV1, and NV2 clearance sponsorship with direct AGSVA-aligned expertise.' },
                { icon: null, title: 'Efficient Sponsorship Process', desc: 'Our approach ensures applicants are fully prepared and compliant for a smooth clearance journey.' },
                { icon: null, title: 'Ongoing Support', desc: 'Providing continuous guidance and expert advice throughout the entire clearance sponsorship lifecycle.' },
                { icon: null, title: 'Compliance Guidance', desc: 'Expert advisory on all AGSVA compliance requirements to help you navigate secure clearance operations successfully.' },
                { icon: null, title: 'Pre-Clearance Consultation', desc: 'Dedicated pre-clearance consultation to streamline the process for both candidates and organisations.' },
              ].map((item) => (
                <div key={item.title} className="bg-[#141414] p-10 group hover:bg-[#1a1a1a] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-10 h-px bg-[#c9a84c] mb-6" />
                  <h3 className="font-['Playfair_Display'] text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-[0.88rem] text-[#9a968e] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* KNOWLEDGE BASE */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto text-center">
          <Reveal>
            <div className="flex justify-center mb-6"><div className="w-16 h-px bg-[#c9a84c]" /></div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-8">
              Australia&rsquo;s Largest Security Clearance Knowledge Base
            </h2>
            <div className="space-y-6 text-[1rem] text-[#9a968e] font-light leading-relaxed text-left max-w-[800px] mx-auto">
              <p>AusClear maintains Australia&rsquo;s largest publicly accessible security clearance knowledge base, covering Baseline, NV1, NV2, ESC, aftercare, travel reporting, and every aspect of the AGSVA vetting process.</p>
              <p>Independently authored and continuously updated, our knowledge base provides clear, factual guidance for individuals and organisations navigating Australian Government security clearances. Whether you&rsquo;re preparing your first application or managing ongoing compliance obligations, you&rsquo;ll find comprehensive information written in plain English.</p>
              <p>We believe informed applicants make better decisions, experience fewer delays, and achieve better outcomes.</p>
            </div>
            <a href="https://support.ausclear.com.au" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.2)] transition-all duration-300 mt-10">
              Browse Knowledge Base
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </Reveal>
        </div>
      </section>

      {/* SPONSORSHIP LEVELS */}
      <section id="services" className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0f0f0f]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-4">
              <span className="w-10 h-px bg-[#c9a84c]" />Security Clearance Sponsorship Levels
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-6">
              Sponsorship Services We Offer
            </h2>
            <p className="text-[1rem] text-[#9a968e] font-light leading-relaxed max-w-[700px] mb-16">
              AusClear provides direct security clearance sponsorship for Australian Government security clearance levels.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.12)]">
              {[
                { icon: null, level: 'Baseline', title: 'Baseline Clearance Sponsorship', desc: 'Entry-level clearance sponsorship providing access to government resources and facilities. Required for most government contractor positions.', time: '5-6 weeks', href: '/baseline-security-clearance' },
                { icon: null, level: 'NV1', title: 'NV1 Clearance Sponsorship', desc: 'Negative Vetting Level 1 sponsorship grants access to SECRET classified information. Essential for roles handling sensitive government material.', time: '3-6 months', href: '/nv1-security-clearance' },
                { icon: null, level: 'NV2', title: 'NV2 Clearance Sponsorship', desc: 'Negative Vetting Level 2 sponsorship provides access to TOP SECRET information. The highest Australian Government security clearance available.', time: '6-12 months', href: '/nv2-security-clearance' },
              ].map((s) => (
                <div key={s.level} className="bg-[#141414] p-10 md:p-12 group hover:bg-[#1a1a1a] transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-10 h-px bg-[#c9a84c] mb-6" />
                  <h3 className="font-['Playfair_Display'] text-xl font-medium mb-4">{s.title}</h3>
                  <p className="text-[0.88rem] text-[#9a968e] font-light leading-relaxed mb-6">{s.desc}</p>
                  <p className="text-[0.78rem] text-[#6b6760] mb-8">Typical Processing: {s.time}</p>
                  <Link href={s.href} className="inline-flex items-center gap-2 text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-[#c9a84c] no-underline hover:gap-3.5 transition-all duration-300">
                    Learn More
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-4">
              <span className="w-10 h-px bg-[#c9a84c]" />Our Sponsorship Process
            </div>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-6">
              How Security Clearance Sponsorship Works
            </h2>
            <p className="text-[1rem] text-[#9a968e] font-light leading-relaxed max-w-[700px] mb-16">
              A simple, straightforward sponsorship process to get your clearance underway.
            </p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {[
                { num: '1', title: 'Assessment', desc: 'We review your requirements and determine which clearance sponsorship level you need.' },
                { num: '2', title: 'Guidance', desc: 'We explain the sponsorship process, requirements, and what to expect throughout your clearance journey.' },
                { num: '3', title: 'Sponsorship', desc: 'AusClear sponsors your clearance directly through AGSVA with full case management.' },
                { num: '4', title: 'Ongoing Support', desc: 'We provide ongoing guidance throughout the entire clearance sponsorship process and beyond.' },
              ].map((s, i) => (
                <div key={s.num} className={`p-10 ${i < 3 ? 'lg:border-r border-[rgba(201,168,76,0.12)]' : ''} ${i < 2 ? 'max-lg:border-b border-[rgba(201,168,76,0.12)]' : ''} max-md:border-b max-md:border-[rgba(201,168,76,0.12)] max-md:last:border-b-0`}>
                  <div className="font-['Playfair_Display'] text-[3.5rem] font-normal text-[rgba(201,168,76,0.12)] leading-none mb-6">{s.num}</div>
                  <h4 className="font-['Playfair_Display'] text-lg font-medium mb-3">{s.title}</h4>
                  <p className="text-[0.85rem] text-[#9a968e] font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 bg-[#0f0f0f] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[700px] mx-auto">
          <Reveal>
            <h2 className="font-['Playfair_Display'] text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-tight mb-6">
              Ready to Get Security Clearance Sponsorship?
            </h2>
            <p className="text-[1rem] text-[#9a968e] font-light leading-relaxed mb-10">
              Join hundreds of Australians who have engaged with AusClear to navigate security clearance sponsorship, supporting entry into clearance-required roles through a structured, compliant approach.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#090909] text-[0.75rem] font-semibold tracking-[0.15em] uppercase no-underline hover:bg-[#d4b96a] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,168,76,0.2)] transition-all duration-300">
              Contact Us Now
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
