// app/page.js

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./home/Hero";
import Features from "./home/Features";
import Video from "./home/Video";
import Products from "./home/Products";
import Testimonials from "./home/Testimonials";
import Map from "./home/Map";

/* ✅ HOMEPAGE SEO METADATA */
export const metadata = {
  title: "Pure Groundnut Oil in Jamnagar | Khodiyar Oil Mill",
  description:
    "Buy 100% pure groundnut oil made using traditional steam heating methods. Free home delivery in Jamnagar, Kalavad & nearby areas.",
};

export default function Home() {
  return (
    <>
      <Header />

      <main>

        {/* Hero already contains the H1 – PERFECT */}
        <Hero />

        {/* SEO-supporting sections */}
        <Features />
        <Video />
        <Products />
        <Testimonials />
        <Map />

      </main>

      <Footer />
    </>
  );
}
