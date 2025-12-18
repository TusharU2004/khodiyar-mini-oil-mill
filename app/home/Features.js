// app/components/Features.js

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">

        {/* ✅ Strong SEO heading */}
        <h2 className="section-title">
          Why Choose Khodiyar Oil Mill for Pure Groundnut Oil
        </h2>

        <div className="feature-box">
          <div className="icon">
            <i className="fa-solid fa-leaf"></i>
          </div>
          <h3>Traditional Steam Heating Method</h3>
          <p>
            We extract groundnut oil using a traditional steam heating process
            that preserves natural nutrients, aroma, and authentic taste without
            chemicals.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon">
            <i className="fa-solid fa-check-circle"></i>
          </div>
          <h3>100% Pure & Chemical-Free Oil</h3>
          <p>
            Our pure groundnut oil is completely free from chemicals and
            preservatives, making it safe and healthy for everyday cooking.
          </p>
        </div>

        <div className="feature-box">
          <div className="icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <h3>Trusted by 50,000+ Families in Gujarat</h3>
          <p>
            Families across Jamnagar, Rajkot, Kalavad, Surat and nearby areas trust Khodiyar Oil
            Mill for consistent quality, purity, and honest practices.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
