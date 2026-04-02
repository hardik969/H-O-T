import "./Header.css";

const navItems = [
  { href: "#projets", label: "Home" },
  { href: "#agence", label: "About" },
  { href: "#process", label: "Reviews" },
  { href: "#shop", label: "Games" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <span className="site-logo">HOUSE OF THRILL</span>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <span className="nav-separator">|</span>
        <a href="#book" className="site-nav-cta">
          BOOK NOW
        </a>
      </nav>
    </header>
  );
}