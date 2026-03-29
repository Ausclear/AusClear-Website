import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AusClear — Australian Security Clearance Sponsorship',
  description:
    'AusClear delivers Baseline, NV1 and NV2 security clearance sponsorship with pre-clearance checks and expert AGSVA-aligned support.',
  openGraph: {
    title: 'AusClear — Australian Security Clearance Sponsorship',
    description:
      'Direct sponsorship for Baseline, NV1 and NV2 security clearances. Expert guidance, AGSVA-aligned compliance, and a structured pathway from application to outcome.',
    url: 'https://ausclear.com.au',
    siteName: 'AusClear',
    locale: 'en_AU',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ausclear.com.au' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body font-light leading-relaxed">{children}</body>
    </html>
  );
}
