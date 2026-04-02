import "./Footer.css";
import { FaArrowRight } from "react-icons/fa";

const menuLinks = ["Search", "Agents", "Join", "About Us", "Agent Portal"];
const socialLinks = ["Facebook", "Instagram", "Book", "Whatsapp"];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-shell">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h2 className="footer-heading">Enter your Phone Number!</h2>
            <div className="footer-input-row">
              <input
                type="email"
                placeholder="Enter Phone Number"
                className="footer-input"
                aria-label="Phone Number"
              />
              <button className="footer-arrow" aria-label="Subscribe">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="footer-links">
            <nav className="footer-menu" aria-label="Footer">
              {menuLinks.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </nav>

            <div className="footer-social">
              {socialLinks.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-contact-block">
            <span className="footer-label">Head Office</span>
            <p>
              10 No. Market, Vande Mataram Square,
              <br />
              Bhopal, MP 462043
            </p>
          </div>

          <div className="footer-contact-block">
            <span className="footer-label">Email Us</span>
            <a href="mailto:info@houseofthrill.com">info@houseofthrill.com</a>
          </div>

          <div className="footer-contact-block">
            <span className="footer-label">Call Us</span>
            <a href="tel:+918253097199">+91 82530 97199</a>
          </div>
        </div>

        <div className="footer-brand-row">
          <div className="footer-brand">THRILL.</div>
        </div>
      </div>
    </footer>
  );
}
