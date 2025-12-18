// app/components/Video.js

const Video = () => {
  return (
    <section className="video-section text-center">
      <div className="container">

        {/* ✅ SEO-friendly heading */}
        <h2>Traditional Groundnut Oil by Khodiyar Oil Mill</h2>

        <p>
          At Khodiyar Oil Mill in Jamnagar, we preserve the original taste of
          groundnut oil using a traditional steam-heating process. Our oil is
          100% pure, chemical-free, and prepared without any artificial additives,
          making it ideal for healthy everyday cooking.
        </p>

        {/* Video can be added later without changing SEO */}
        {/*
        <div className="video-placeholder">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UC8hJcP5_gI"
            title="Traditional groundnut oil making process at Khodiyar Oil Mill"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        */}
      </div>
    </section>
  );
};

export default Video;
