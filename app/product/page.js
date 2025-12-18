import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Products from "../home/Products";

/* ✅ PAGE SEO METADATA */
export const metadata = {
  title: "Pure Groundnut Oil Products",
  description:
    "Buy 100% pure groundnut oil from Khodiyar Oil Mill in Jamnagar. Available in 1L, 5L, and 15Kg packs with free home delivery.",
};

const ProductPage = () => {
  return (
    <>
      <Header />

      <main>
        
        {/* ✅ Reused product cards */}
        <Products />

        {/* ✅ Trust & SEO Content */}
        <section className="product-info">
          <div className="container">
            <h2>Why Choose Our Groundnut Oil?</h2>
            <p>
              Our groundnut oil is extracted using a traditional steam heating
              method that preserves natural nutrients, aroma, and taste. We do
              not use chemicals, preservatives, or artificial additives.
            </p>

            <p>
              Available pack sizes include 1 liter bottles, 5 liter cans, and
              15 kg bulk tins suitable for homes, restaurants, and retailers.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ProductPage;
