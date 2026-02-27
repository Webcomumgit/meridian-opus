import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Investments", href: "/investments" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Golden Visa", href: "/golden-visa" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const solid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          solid ? "bg-navy border-b border-gold/20" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl tracking-[0.15em] text-gold">
            MERIDIAN
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="font-body text-sm tracking-wide text-navy-foreground/80 hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <span className="font-body text-xs text-navy-foreground/50 tracking-wide">
              EN | FR | AR
            </span>
            <Link
              to="/login"
              className="font-body text-sm tracking-wide text-gold hover:text-gold/80 transition-colors"
            >
              Client Portal
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-navy-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 text-navy-foreground"
            onClick={() => setMobileOpen(false)}
          >
            <X size={28} />
          </button>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-heading text-3xl text-navy-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/login" className="font-body text-sm text-gold mt-8 tracking-wide">
            Client Portal
          </Link>
          <span className="font-body text-xs text-navy-foreground/50 mt-4">EN | FR | AR</span>
        </div>
      )}
    </>
  );
};

export default Navigation;
