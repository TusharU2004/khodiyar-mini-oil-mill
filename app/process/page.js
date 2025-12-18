import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";

/* ✅ PAGE SEO METADATA */
export const metadata = {
  title: "Our Groundnut Oil Making Process",
  description:
    "Learn how Khodiyar Oil Mill in Jamnagar produces 100% pure groundnut oil using traditional steam heating and chemical-free methods.",
};

const processSteps = [
  {
    step: 1,
    title: "Sourcing Quality Groundnuts",
    description:
      "Our process begins at the source. We buy only premium quality groundnuts directly from local farmers in Gujarat.",
    imgSrc: "/process/step-1.png",
    imgAlt: "Local farmers supplying quality groundnuts in Gujarat",
  },
  {
    step: 2,
    title: "Cleaning the Groundnuts",
    description:
      "The sourced groundnuts are thoroughly cleaned to remove dust and impurities, ensuring only the best seeds move forward.",
    imgSrc: "/process/step-2.png",
    imgAlt: "Cleaned groundnuts prepared for oil extraction",
  },
  {
    step: 3,
    title: "Traditional Steam Extraction",
    description:
      "We use a traditional steam heating method to gently extract oil without chemicals or excessive heat, preserving nutrition and aroma.",
    imgSrc: "/process/step-3.png",
    imgAlt: "Traditional steam heating process for groundnut oil extraction",
  },
  {
    step: 4,
    title: "Cotton Cloth Filtering",
    description:
      "The extracted oil is filtered through clean cotton cloth to remove solid particles naturally.",
    imgSrc: "/process/step-4.png",
    imgAlt: "Groundnut oil filtered through cotton cloth",
  },
  {
    step: 5,
    title: "Final Filtration",
    description:
      "A final filtration step ensures crystal-clear, pure groundnut oil with consistent quality.",
    imgSrc: "/process/step-5.png",
    imgAlt: "Pure and clear groundnut oil after final filtration",
  },
  {
    step: 6,
    title: "Hygienic Packaging",
    description:
      "The oil is hygienically packed in 1L bottles, 5L cans, and 15Kg tins, ready for delivery across Jamnagar and nearby areas.",
    imgSrc: "/process/step-6.png",
    imgAlt: "Hygienic packaging of groundnut oil at Khodiyar Oil Mill",
  },
];

const ProcessPage = () => {
  return (
    <>
      <Header />

      <main className="process-section">
        <div className="container">

          {/* ✅ H1 (VERY IMPORTANT) */}
          <h1>Our Traditional Groundnut Oil Making Process</h1>

          <p className="subtitle">
            From the farm to your family, Khodiyar Oil Mill in Jamnagar ensures
            purity, quality, and trust at every step.
          </p>

          <div className="process-steps">
            {processSteps.map((item) => (
              <div className="step" key={item.step}>
                <div className="step-image">
                  <Image
                    src={item.imgSrc}
                    alt={item.imgAlt}
                    width={500}
                    height={400}
                  />
                </div>

                <div className="step-text">
                  <h2>
                    Step {item.step}: {item.title}
                  </h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ProcessPage;
