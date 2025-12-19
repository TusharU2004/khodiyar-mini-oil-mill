'use client';

import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import '../globals.css';

const FAQPage = () => {
    const [faqs, setFaqs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch('/api/faqs');
                const data = await res.json();
                setFaqs(data);
            } catch (error) {
                console.error('Failed to fetch FAQs:', error);
            }
        };

        fetchFaqs();
    }, []);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Header />
            <main>
                <section className="faq-section">
                    <div className="container">
                        <div className="faq-header">
                            <h1>Frequently Asked Questions</h1>
                            <p>
                                Find answers to common questions about our products, process, and policies.
                                If you can't find what you're looking for, feel free to contact us.
                            </p>
                        </div>

                        <div className="faq-accordion">
                            {faqs.map((faq, index) => (
                                <div
                                    key={faq.id}
                                    className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        {faq.question}
                                        <span className="icon">{activeIndex === index ? '−' : '+'}</span>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default FAQPage;
