import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://emrecantuzer.com'),
  title: {
    default: "Emre Can Tüzer | Cyber Security Portfolio",
    template: "%s | Emre Can Tüzer"
  },
  description: "Portfolio of Emre Can Tüzer - Senior Network & Security Operations Engineer specializing in network security architectures, critical infrastructure protection, and network automation.",
  keywords: ["Cyber Security", "Network Security", "Palo Alto", "FortiGate", "PAM", "CyberArk", "Emre Can Tüzer", "Network Automation"],
  authors: [{ name: "Emre Can Tüzer" }],
  creator: "Emre Can Tüzer",
  openGraph: {
    title: "Emre Can Tüzer | Cyber Security Portfolio",
    description: "Portfolio of Emre Can Tüzer - Senior Network & Security Operations Engineer specializing in network security architectures, critical infrastructure protection, and network automation.",
    url: "/",
    siteName: "Emre Can Tüzer",
    images: [
      {
        url: "/emre-can-tuzer-og.png",
        width: 1200,
        height: 630,
        alt: "Emre Can Tüzer - Network Security Professional",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Can Tüzer | Cyber Security Portfolio",
    description: "Portfolio of Emre Can Tüzer - Senior Network & Security Operations Engineer",
    images: ["/emre-can-tuzer-og.png"],
    creator: "@emrecantuzer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Emre Can Tüzer",
    jobTitle: "Senior Network & Security Operations Engineer",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://emrecantuzer.com',
    sameAs: [
      "https://github.com/emrecantuzer",
      "https://x.com/emrecantuzer",
      "https://medium.com/@emrecantzer",
      "https://linkedin.com/in/emrecantuzer",
    ],
    description: "Senior Network & Security Operations Engineer specializing in network security architectures, critical infrastructure protection, and network automation.",
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://emrecantuzer.com'}/emre-can-tuzer-og.png`,
    knowsAbout: ["Network Security", "Palo Alto", "Fortinet", "CyberArk", "Wallix", "Python", "Docker", "Machine Learning"],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-900 text-slate-100 selection:bg-primary/30`}>
        {/* Microsoft Clarity Analytics */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", ${JSON.stringify(process.env.NEXT_PUBLIC_CLARITY_ID)});
              `,
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
