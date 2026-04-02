import "./Header.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#narrative", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#games", label: "Games" },
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
        <a href="#contact" className="site-nav-cta">
          BOOK NOW
        </a>
      </nav>
    </header>
  );
}
