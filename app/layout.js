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

// ✅ SEO Metadata (VERY IMPORTANT)
export const metadata = {
  title: {
    default: "Pure Groundnut Oil in Jamnagar | Khodiyar Oil Mill",
    template: "%s | Khodiyar Oil Mill",
  },
  description:
    "Buy 100% pure groundnut oil made using traditional methods. Free home delivery in Jamnagar, Kalavad & nearby areas.",
  keywords: [
    "pure groundnut oil",
    "groundnut oil Jamnagar",
    "peanut oil Gujarat",
    "oil mill in Jamnagar",
    "Khodiyar Oil Mill",
  ],
  verification: {
    google: "TA_A2hccp1wqsocFVT703LExXZzPKE43_3luPEejEwM",
  },
  openGraph: {
    title: "Pure Groundnut Oil in Jamnagar | Khodiyar Oil Mill",
    description:
      "Traditional method pure groundnut oil with free home delivery in Jamnagar & Kalavad.",
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
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable}`}
    >
      <body>
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

        {/* ✅ Font Awesome (Correct Way) */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
