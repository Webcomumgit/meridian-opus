import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const filters = ["All", "Residential", "Commercial", "Golden Visa Eligible"] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? properties : properties.filter((p) => p.type === active);

  return (
    <>
      <Navigation />
      <InnerHero
        variant="offwhite"
        overline="CURATED SELECTION"
        title="Investment Portfolio"
        subtitle="A curated selection of exceptional properties across Portugal's most coveted markets."
      />

      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-0 border-b border-lightgrey mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-body text-sm px-6 py-3 tracking-wide transition-colors ${
                  active === f
                    ? "border-b-2 border-gold text-charcoal"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
