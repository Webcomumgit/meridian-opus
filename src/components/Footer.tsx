import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-navy text-navy-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Logo + tagline */}
        <div>
          <span className="font-heading text-2xl tracking-[0.15em] text-gold">MERIDIAN</span>
          <p className="font-body text-sm text-navy-foreground/60 mt-4 leading-relaxed max-w-xs">
            Curated real estate investment opportunities for discerning international clients since 2006.
          </p>
        </div>

        {/* Site links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <Link to="/about" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">About</Link>
            <Link to="/investments" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">Investments</Link>
            <Link to="/portfolio" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">Portfolio</Link>
            <Link to="/golden-visa" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">Golden Visa</Link>
          </div>
          <div className="space-y-3">
            <Link to="/insights" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">Insights</Link>
            <Link to="/contact" className="block font-body text-sm text-navy-foreground/70 hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>

        {/* Private Client Portal */}
        <div className="flex flex-col items-start md:items-end">
          <Link
            to="/login"
            className="border border-gold text-gold font-body text-sm px-6 py-3 hover:bg-gold/10 transition-colors tracking-wide"
          >
            Private Client Portal
          </Link>
        </div>
      </div>

      <div className="gold-rule mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-body text-xs text-navy-foreground/40">
          © 2024 Meridian Investment Group. All rights reserved.
        </span>
        <span className="font-body text-xs text-navy-foreground/40">EN · FR · AR</span>
      </div>
    </div>
  </footer>
);

export default Footer;
