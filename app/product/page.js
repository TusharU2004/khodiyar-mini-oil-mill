import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Products from "../home/Products";
import Image from "next/image";

export const metadata = {
  title: "Pure Groundnut Oil Products | Khodiyar Mini Oil Mill",
  description:
    "Buy 100% Pure Groundnut Oil manufactured using the traditional steam heating method. Available in 1L, 5L and 15Kg packs.",
};

export default function ProductPage() {
  return (
    <>
      <Header />

      <main>

        {/* Hero Section */}
        <section className="product-hero">
          <div className="container hero-grid">

            <div className="hero-content">

              <span className="hero-badge">
                🌿 100% Pure & Natural
              </span>

              <h1>
                Premium Groundnut Oil <br />
                Made The Traditional Way
              </h1>

              <p>
                At Khodiyar Mini Oil Mill, we manufacture premium quality
                groundnut oil using carefully selected G-20 groundnuts and
                our traditional steam heating process. No chemicals,
                no preservatives, only pure natural goodness.
              </p>

              <div className="hero-buttons">

                <a href="/contact" className="btn">
                  Contact Us
                </a>

                <a href="#products" className="btn btn-outline">
                  View Products
                </a>

              </div>

            </div>

            <div className="hero-image">

              <Image
                src="/products/product-15kg.png"
                alt="Pure Groundnut Oil"
                width={500}
                height={500}
                priority
              />

            </div>

          </div>
        </section>

        {/* Products */}

        <div id="products">
          <Products />
        </div>

        {/* Why Choose */}

        <section className="product-info">

          <div className="container">

            <h2>Why Choose Khodiyar Groundnut Oil?</h2>

            <div className="feature-grid">

              <div className="feature-card">
                🌿
                <h3>100% Pure</h3>
                <p>No chemicals. No preservatives.</p>
              </div>

              <div className="feature-card">
                🔥
                <h3>Traditional Steam Heating</h3>
                <p>Rich aroma and authentic taste.</p>
              </div>

              <div className="feature-card">
                🌾
                <h3>Farmer Direct</h3>
                <p>Premium G-20 Groundnuts sourced directly from farmers.</p>
              </div>

              <div className="feature-card">
                🚚
                <h3>Free Delivery</h3>
                <p>Available across Gujarat.</p>
              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
