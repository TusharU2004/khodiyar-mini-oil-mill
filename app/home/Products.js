// app/components/home/Products.js
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Products = () => {
    const productData = [
        {
            img: "/products/product-1l.png",
            name: "1 Liter Groundnut Oil Bottle",
            desc: "Ideal for small families and daily cooking",
            details:
                "Pure groundnut oil in 1 liter bottle, traditionally steam heated, chemical-free and perfect for everyday use.",
        },
        {
            img: "/products/product-5l.png",
            name: "5 Liter Groundnut Oil Can",
            desc: "Best seller for homes in Gujarat",
            details:
                "Pure groundnut oil suitable for monthly cooking needs with rich taste, aroma, and nutrition.",
        },
        {
            img: "/products/product-15kg.png",
            name: "15 Kg Groundnut Oil Tin (Bulk Pack)",
            desc: "Ideal for restaurants, shops & bulk buyers",
            details:
                "Economical 15 kg pack of traditional steam-heated groundnut oil trusted by hotels and businesses.",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState(null);

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setIsOpen(false);
        if (isOpen) document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [isOpen]);

    const openModal = (product) => {
        setActiveProduct(product);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setActiveProduct(null);
    };

    return (
        <section className="products-section text-center">
            <div className="container">

                {/* ✅ SEO heading */}
                <h2>Our Pure Groundnut Oil Products</h2>
                <p style={{ maxWidth: 720, margin: "0 auto 1.5rem" }}>
                    Khodiyar Oil Mill offers 100% pure groundnut oil in multiple pack sizes
                    with free home delivery in Jamnagar, Kalavad, and nearby areas.
                </p>

                <div className="product-grid">
                    {productData.map((product) => (
                        <div className="product-card" key={product.name}>
                            <div className="product-image-container">
                                <Image
                                    src={product.img}
                                    alt={`${product.name} from Khodiyar Oil Mill`}
                                    width={250}
                                    height={250}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>

                            <h3>{product.name}</h3>
                            <p>{product.desc}</p>
                            <p className="product-details">{product.details}</p>

                            <button
                                type="button"
                                onClick={() => openModal(product)}
                                className="btn product-btn"
                                aria-haspopup="dialog"
                                aria-controls="payment-modal"
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="km-modal-overlay" role="dialog" aria-modal="true" id="payment-modal">
                    <div className="km-modal-backdrop" onClick={closeModal} />

                    <div className="km-modal">
                        <div className="km-modal-header">
                            <h3>{activeProduct?.name}</h3>
                            <button className="km-modal-close" onClick={closeModal} aria-label="Close">
                                ×
                            </button>
                        </div>

                        <div className="km-modal-body">
                            <p>
                                Online payments are currently unavailable.
                            </p>
                            <p style={{ marginTop: "0.5rem", color: "#555" }}>
                                Please contact us via phone or WhatsApp to place your order. We
                                provide guidance and free home delivery.
                            </p>
                        </div>

                        <div className="km-modal-actions">
                            <a
                                href={`https://wa.me/7043169204?text=${encodeURIComponent(
                                    `Hello! I want to buy ${activeProduct?.name} from Khodiyar Oil Mill in Jamnagar.`
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                                className="km-btn km-btn-primary"
                                onClick={closeModal}
                            >
                                Contact on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        .km-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .km-modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .km-modal {
          position: relative;
          z-index: 10000;
          background: #fff;
          width: 92%;
          max-width: 520px;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        .km-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 8px;
        }
        .km-modal-header h3 {
          margin: 0;
          font-size: 1.125rem;
        }
        .km-modal-close {
          background: transparent;
          border: none;
          font-size: 1.25rem;
          line-height: 1;
          cursor: pointer;
        }
        .km-modal-body {
          margin-top: 12px;
          font-size: 0.95rem;
        }
        .km-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 16px;
        }
        .km-btn {
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
              font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
        }
        .km-btn:hover {
            background: var(--dark-color);
            color: #fff;
            transform: translateY(-3px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            }
       
        .km-btn-primary {
            background: var(--primary-color);
            color: #fff;
            border: 1px solid rgba(0,0,0,0.05);
        }

        /* small responsive tweak */
        @media (max-width: 480px) {
          .km-modal { padding: 16px; }
          .km-modal-actions { flex-direction: column-reverse; gap: 8px; align-items: stretch; }
        }
      `}</style>
        </section>
    );
};

export default Products;
