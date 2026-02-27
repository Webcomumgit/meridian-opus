import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";

const types = [
  {
    title: "Prime Residential",
    overline: "LIFESTYLE & CAPITAL GROWTH",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80",
    body: "Exceptional residences in Portugal's most desirable locations, selected for their architectural distinction, lifestyle appeal, and long-term capital appreciation potential.",
    points: ["— Prime locations in Lisbon, Cascais, and the Algarve", "— Properties from €500,000 to €15,000,000", "— Full acquisition and management advisory"],
  },
  {
    title: "Commercial & Mixed-Use",
    overline: "INCOME & STABILITY",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80",
    body: "Institutional-quality office, retail, and hospitality assets in established commercial corridors, delivering stable income streams with professional tenant covenants.",
    points: ["— Net yields of 4.5% to 6.5% in prime locations", "— Long-term lease structures with institutional tenants", "— Active asset management and value-add strategies"],
  },
  {
    title: "Development Projects",
    overline: "VALUE CREATION",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&q=80",
    body: "Carefully selected development opportunities in high-demand markets, offering enhanced returns through the creation of new residential and commercial assets.",
    points: ["— Joint ventures with established Portuguese developers", "— Target IRRs of 15% to 25% over 2–4 year cycles", "— Full project oversight and investor reporting"],
  },
];

const Investments = () => (
  <>
    <Navigation />
    <InnerHero
      overline="INVESTMENT STRATEGIES"
      title="Real Estate Investment Strategies"
      subtitle="Three distinct approaches to Portuguese real estate, each calibrated to deliver exceptional risk-adjusted returns."
    />

    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto space-y-24">
        {types.map((t, i) => (
          <div key={t.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="gold-overline mb-3">{t.overline}</p>
              <h2 className="font-heading text-3xl mb-4">{t.title}</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{t.body}</p>
              <div className="space-y-2">
                {t.points.map((p) => (
                  <p key={p} className="font-body text-sm text-charcoal">
                    <span className="text-gold">—</span> {p.replace("— ", "")}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-navy py-16 text-center">
      <p className="gold-overline mb-4">NEXT STEP</p>
      <h2 className="font-heading text-3xl text-navy-foreground mb-6">Discuss Your Investment Profile</h2>
      <Link
        to="/contact"
        className="bg-navy border border-gold text-gold font-body text-sm px-8 py-4 tracking-wide hover:bg-gold/10 transition-colors inline-block"
      >
        Schedule a Consultation
      </Link>
    </section>

    <Footer />
  </>
);

export default Investments;
