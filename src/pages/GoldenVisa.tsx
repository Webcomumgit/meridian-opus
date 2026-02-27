import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const faqs = [
  { q: "What is the minimum investment for the Golden Visa?", a: "The minimum qualifying investment is €500,000 in commercial real estate or qualifying fund structures. Residential property in low-density areas may qualify at reduced thresholds." },
  { q: "How long does the application process take?", a: "The typical timeline from initial investment to residency card issuance is 8–12 months, depending on the complexity of the application and current processing volumes." },
  { q: "Do I need to live in Portugal?", a: "No. The Golden Visa requires only an average of 7 days per year in Portugal. This makes it one of Europe's most flexible residency-by-investment programmes." },
  { q: "Can my family be included?", a: "Yes. The programme allows for family reunification, including spouse, dependent children, and dependent parents of the main applicant." },
  { q: "What happens after five years?", a: "After five years of maintaining your investment and residency, you become eligible to apply for permanent residency or Portuguese citizenship, granting full EU rights." },
];

const GoldenVisa = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation />

      {/* Hero with image */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80"
          alt="Portugal coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(15,20,35,0.65)]" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="gold-overline mb-4">RESIDENCY BY INVESTMENT</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-offwhite leading-tight">
            Portugal Golden Visa Programme
          </h1>
          <p className="font-body text-base text-offwhite/70 mt-4">
            A proven pathway to European residency through strategic property investment.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="gold-overline mb-4">OVERVIEW</p>
            <h2 className="font-heading text-3xl mb-6">A Gateway to European Residency</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Portugal's Golden Visa programme, established in 2012, allows non-EU nationals to obtain residency rights through qualifying investments. The programme has attracted over €6 billion in foreign investment and remains one of Europe's most respected residency-by-investment schemes.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Meridian provides end-to-end advisory services, from identifying qualifying investments that align with your financial objectives to managing the entire application process through our network of specialist immigration lawyers.
            </p>
          </div>
          <div className="space-y-8">
            {[
              { num: "€500K", label: "Minimum Investment" },
              { num: "5 Years", label: "Path to Citizenship" },
              { num: "26", label: "Schengen Countries" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-4">
                <span className="font-heading text-4xl text-gold">{s.num}</span>
                <span className="font-body text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <p className="gold-overline mb-4 text-center">ELIGIBILITY</p>
          <h2 className="font-heading text-3xl text-center mb-12">Qualifying Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { n: "1", title: "Investment Commitment", desc: "A qualifying investment in commercial real estate, rehabilitation property, or approved investment fund meeting the minimum threshold." },
              { n: "2", title: "Clean Record", desc: "Applicants must have no criminal record and meet standard background check requirements for residency applications." },
              { n: "3", title: "Maintain Investment", desc: "The qualifying investment must be maintained for a minimum of five years from the date of residency card issuance." },
            ].map((c) => (
              <div key={c.n} className="border border-gold/30 p-8">
                <span className="font-heading text-3xl text-gold">{c.n}</span>
                <h3 className="font-heading text-xl mt-4 mb-2">{c.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto">
          <p className="gold-overline mb-4 text-center">THE PROCESS</p>
          <h2 className="font-heading text-3xl text-center mb-12">Five Steps to Residency</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { n: "01", title: "Consultation", desc: "Initial assessment of objectives and eligibility" },
              { n: "02", title: "Property Selection", desc: "Identify qualifying investments aligned with goals" },
              { n: "03", title: "Acquisition", desc: "Complete purchase with full legal and tax advisory" },
              { n: "04", title: "Application", desc: "Submit Golden Visa application with supporting documents" },
              { n: "05", title: "Residency", desc: "Receive residency card and begin path to citizenship" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <span className="font-heading text-3xl text-gold">{s.n}</span>
                <h3 className="font-heading text-lg mt-3 mb-2">{s.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="gold-overline mb-4 text-center">FAQ</p>
          <h2 className="font-heading text-3xl text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-0">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-lightgrey">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-body text-sm font-medium pr-4">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gold transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="font-body text-sm text-muted-foreground pb-5 leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-center">
        <p className="gold-overline mb-4">BEGIN YOUR JOURNEY</p>
        <h2 className="font-heading text-3xl text-navy-foreground mb-6">Start Your Golden Visa Journey</h2>
        <Link
          to="/contact"
          className="border border-gold text-gold font-body text-sm px-8 py-4 tracking-wide hover:bg-gold/10 transition-colors inline-block"
        >
          Schedule a Consultation
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default GoldenVisa;
