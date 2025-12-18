// app/components/home/Map.js

const Map = () => {
  return (
    <section className="map-section text-center">
      <div className="container">

        {/* ✅ SEO-friendly heading */}
        <h2>Visit Khodiyar Oil Mill in Jamnagar</h2>

        <p>
          Khodiyar Oil Mill is located in Motavadala, Kalavad, Jamnagar, Gujarat.
          Visit our traditional oil mill to experience 100% pure and
          chemical-free groundnut oil made using time-tested methods.
        </p>

        <div className="map-placeholder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0905966801265!2d70.47175625263951!3d22.2687925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959d70b7ce9afa5%3A0x2a4dde261bf3268a!2sJay%20Khodiyal%20mini%20oil%20mill!5e1!3m2!1sen!2sin!4v1759837276372!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Khodiyar Oil Mill location in Motavadala Kalavad Jamnagar Gujarat"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Map;
