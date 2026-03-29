import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.12)] bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-['Raleway'] text-lg font-semibold tracking-[0.15em] uppercase">
              <span className="text-[#c9a84c] font-bold">(</span>A<span className="text-[#c9a84c] font-bold">)</span>
              <span className="text-white">us</span><span className="text-[#c9a84c]">Clear</span>
            </span>
            <p className="text-[0.85rem] text-[#6b6760] leading-relaxed font-light mt-4">
              Your trusted partner for security clearance sponsorship. We guide you through every step of the clearance process with expertise and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-[0.68rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-5 font-semibold">Quick Links</h6>
            <Link href="/privacy-policy" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">Terms &amp; Conditions</Link>
            <Link href="/copyright" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">Copyright Notice</Link>
            <a href="https://support.ausclear.au" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">Knowledge Base</a>
            <a href="https://support.ausclear.com.au/portal/en/kb/articles/ausclear-transparency-statement-ai-assisted-operations" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">AI Transparency Statement</a>
            <Link href="/faq" className="block text-[0.85rem] text-[#9a968e] no-underline mb-2.5 font-light hover:text-[#c9a84c] transition-colors">FAQ</Link>
          </div>

          {/* Acknowledgement */}
          <div>
            <h6 className="text-[0.68rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-5 font-semibold">Acknowledgement</h6>
            <p className="text-[0.8rem] text-[#6b6760] leading-relaxed font-light">
              We acknowledge the Traditional Owners of the land where we work and live. We pay our respects to Elders past and present. We celebrate the stories, culture and traditions of Aboriginal and Torres Strait Islander Elders of all communities who also work and live on this land.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-[0.68rem] tracking-[0.2em] uppercase text-[#c9a84c] mb-5 font-semibold">Contact</h6>
            <a href="mailto:support@ausclear.com.au?subject=Security%20Clearance%20Enquiry" className="block text-[0.85rem] text-[#9a968e] no-underline mb-3 font-light hover:text-[#c9a84c] transition-colors">support@ausclear.com.au</a>
            <a href="tel:1300027423" className="block text-[0.85rem] text-[#c9a84c] no-underline mb-3 font-light hover:text-[#d4b96a] transition-colors">1300 027 423</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[rgba(201,168,76,0.12)] space-y-3">
          <p className="text-[0.72rem] text-[#6b6760] font-light">
            <strong className="font-medium">&copy; 2026 Nephthys Pty Ltd t/as AusClear. All rights reserved.</strong>
          </p>
          <p className="text-[0.68rem] text-[#6b6760]/70 font-light">
            AusClear is not affiliated with AGSVA, Defence, or the Australian Government.
          </p>
          <p className="text-[0.68rem] text-[#6b6760]/70 font-light">
            Unauthorised copying, reproduction, scraping, AI training use, or redistribution of any content is strictly prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
}
