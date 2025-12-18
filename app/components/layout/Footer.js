import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Brand */}
        <div className="footer-col">
          <Link href="/" className="footer-logo">
            <Image
              src="/global/logo.png"
              alt="Khodiyar Oil Mill – Pure Groundnut Oil in Jamnagar"
              width={100}
              height={70}
            />
          </Link>
          <p>
            Khodiyar Oil Mill produces 100% pure and natural groundnut oil using
            traditional methods. Trusted by families across Jamnagar and Gujarat.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="nav-footer">
            <NavLinks color="light" />
          </ul>
        </div>

        {/* Address & Contact */}
        <div className="footer-col">
          <h4>Address</h4>
          <p>
            Khodiyar Oil Mill<br />
            Motavadala, Kalavad,<br />
            Jamnagar, Gujarat – 361162
          </p>

          <h4>Contact</h4>
          <p>
            📞{" "}
            <a
              href="tel:+917043169204"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              +91 70431 69204
            </a>
            <br />
            ⏰ 11:00 AM – 5:00 PM
            <br />
            ✉️{" "}
            <a
              href="mailto:khodiyaroilmill@outlook.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              khodiyaroilmill@outlook.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Khodiyar Oil Mill | All Rights Reserved</p>

        <div className="social-icons">
          <a
            href="https://wa.me/917043169204"
            aria-label="WhatsApp Khodiyar Oil Mill"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          {/* Replace with real links when available */}
          <a
            href="https://www.facebook.com/"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
