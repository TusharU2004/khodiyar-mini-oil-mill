import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";

/* ✅ PAGE SEO METADATA */
export const metadata = {
    title: "About Khodiyar Oil Mill",
    description:
        "Learn about Khodiyar Oil Mill, a family-owned traditional oil mill in Motavadala, Kalavad, Jamnagar producing pure groundnut oil.",
};

const AboutPage = () => {
    return (
        <>
            <Header />
            <main>
                {/* --- About Section --- */}
                <section className="about-section">
                    <div className="container">
                        <div className="about-header">

                            {/* ✅ H1 (VERY IMPORTANT) */}
                            <h1>About Khodiyar Oil Mill</h1>

                            <p>
                                We are a family-owned business rooted in the traditions of Gujarat,
                                dedicated to providing pure and natural groundnut oil to families
                                in Jamnagar, Kalavad, and nearby areas.
                            </p>
                        </div>

                        <div className="about-content">
                            <div className="about-text">

                                <h2>Our Story</h2>
                                <p>
                                    Khodiyar Oil Mill was born from a simple idea: to bring back the
                                    authentic taste and health benefits of traditionally made
                                    groundnut oil. Based in Motavadala, Kalavad (Jamnagar), we follow
                                    time-tested oil extraction methods without chemicals.
                                </p>

                                <h2>Our Mission</h2>
                                <p>
                                    Our mission is to deliver 100% pure and healthy groundnut oil to
                                    every household. We support local farmers in Gujarat and
                                    preserve traditional oil-making techniques for quality and
                                    trust.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>

                {/* --- Team Section --- */}
                <section className="founders-section">
                    <div className="container">
                        <h2>Meet Our Team</h2>

                        <div className="founders-grid">

                            <div className="founder-card">
                                <Image
                                    src="/about/f-1.png"
                                    alt="Pareshbhai Umretiya - Founder of Khodiyar Oil Mill"
                                    width={200}
                                    height={200}
                                />
                                <h3>Pareshbhai Umretiya</h3>
                                <h4>Founder</h4>
                                <p>
                                    With decades of experience in traditional oil milling,
                                    Pareshbhai ensures every bottle meets high purity standards.
                                </p>
                            </div>

                            <div className="founder-card">
                                <Image
                                    src="/about/f-2.png"
                                    alt="Jayeshbhai Umretiya - Founder of Khodiyar Oil Mill"
                                    width={200}
                                    height={200}
                                />
                                <h3>Jayeshbhai Umretiya</h3>
                                <h4>Founder</h4>
                                <p>
                                    Jayeshbhai manages sourcing from local farmers, ensuring only
                                    premium quality groundnuts are used.
                                </p>
                            </div>

                            <div className="founder-card">
                                <Image
                                    src="/about/f-3.png"
                                    alt="Tushar Umretiya - Operations and Quality Manager"
                                    width={200}
                                    height={200}
                                />
                                <h3>Tushar Umretiya</h3>
                                <h4>Operations & Quality</h4>
                                <p>
                                    Tushar oversees daily operations and maintains quality control
                                    using modern management with traditional methods.
                                </p>
                            </div>

                            <div className="founder-card">
                                <Image
                                    src="/about/f-4.png"
                                    alt="Brijesh Umretiya - Sales and Marketing Head"
                                    width={200}
                                    height={200}
                                />
                                <h3>Brijesh Umretiya</h3>
                                <h4>Sales & Marketing</h4>
                                <p>
                                    Brijesh focuses on customer relationships and spreading
                                    awareness about pure groundnut oil across Jamnagar.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
