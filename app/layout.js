import Script from "next/script";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// ✅ SEO Metadata (FULL & OPTIMIZED)
export const metadata = {
  title: {
    default: "Pure Groundnut Oil in Jamnagar | Khodiyar Oil Mill",
    template: "%s | Khodiyar Oil Mill",
  },

  description:
    "Buy 100% pure groundnut oil made using traditional steam heating methods. Free home delivery across Jamnagar, Gujarat, and major cities in India.",

  keywords: [
    // 🔰 Brand Keywords
    "Khodiyar Oil Mill",
    "Khodiyar Oil Mill Jamnagar",
    "Khodiyar Mini Oil Mill",
    "Khodiyar Groundnut Oil",
    "Khodiyar Peanut Oil",

    // 🥜 Core Product Keywords
    "pure groundnut oil",
    "pure peanut oil",
    "traditional groundnut oil",
    "natural groundnut oil",
    "chemical free groundnut oil",
    "unrefined groundnut oil",
    "desi groundnut oil",
    "indian groundnut oil",

    // 🏭 Manufacturer / Mill
    "groundnut oil manufacturer",
    "groundnut oil manufacturer in India",
    "groundnut oil mill",
    "traditional oil mill in India",
    "oil mill in Jamnagar",
    "oil mill in Gujarat",
    "peanut oil manufacturer India",

    // 🛒 Buy / Delivery
    "buy groundnut oil online India",
    "groundnut oil home delivery",
    "pure groundnut oil delivery India",
    "order groundnut oil online",
    "bulk groundnut oil supplier",
    "wholesale groundnut oil India",

    // 🍳 Health & Cooking
    "healthy cooking oil India",
    "best oil for cooking",
    "groundnut oil for daily cooking",
    "groundnut oil for frying",
    "traditional cooking oil India",

    // 🌾 Traditional / Process
    "traditional steam heated groundnut oil",
    "village oil mill groundnut oil",
    "stone mill groundnut oil",
    "farm fresh groundnut oil",

    // 📍 Local + India Coverage
    "groundnut oil Jamnagar",
    "groundnut oil Gujarat",
    "groundnut oil Rajkot",
    "groundnut oil Ahmedabad",
    "groundnut oil Gandhinagar",
    "groundnut oil Surat",
    "groundnut oil India",
    "pure groundnut oil India",

    // 🔍 Near Me
    "groundnut oil near me",
    "oil mill near me",
    "pure groundnut oil near me",

    // 📦 Packaging
    "1 litre groundnut oil",
    "5 litre groundnut oil",
    "15 kg groundnut oil tin",
  ],

  /* ✅ Icons for Google Search Logo */
  icons: {
    icon: "/icon.png",        // app/icon.png
    shortcut: "/favicon.ico", // public/favicon.ico
    apple: "/icon.png",
  },

  verification: {
    google: "TA_A2hccp1wqsocFVT703LExXZzPKE43_3luPEejEwM",
  },

  openGraph: {
    title: "Pure Groundnut Oil in Jamnagar | Khodiyar Oil Mill",
    description:
      "100% pure groundnut oil made using traditional steam heating methods. Free home delivery in Jamnagar & major cities.",
    url: "https://khodiyar-oil-mill.onrender.com",
    siteName: "Khodiyar Oil Mill",
    images: [
      {
        url: "/global/logo.png",
        width: 800,
        height: 600,
        alt: "Khodiyar Oil Mill Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>

        {/* ✅ LocalBusiness Schema */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Khodiyar Oil Mill",
              url: "https://khodiyar-oil-mill.onrender.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Motavadala",
                addressRegion: "Jamnagar",
                addressCountry: "IN",
              },
              areaServed: [
                "Jamnagar",
                "Rajkot",
                "Ahmedabad",
                "Gandhinagar",
                "Surat",
                "Gujarat",
                "India",
              ],
            }),
          }}
        />

        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D87L8S86DV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D87L8S86DV');
            `,
          }}
        />

        {/* ✅ Font Awesome */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
