import { Link } from "react-router-dom";
import { Building2, Landmark, Award, Phone, Mail, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import ArticleCard from "@/components/ArticleCard";
import { properties } from "@/data/properties";
import { articles } from "@/data/articles";

const Home = () => (
  <>
    <Navigation />

    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Luxury property"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[rgba(15,20,35,0.58)]" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="gold-overline mb-6">EXCLUSIVE REAL ESTATE INVESTMENT</p>
        <h1 className="font-heading text-5xl md:text-7xl text-offwhite leading-tight">
          Where Capital Meets Exceptional Property
        </h1>
        <p className="font-body text-base md:text-lg text-offwhite/70 mt-6 font-light">
          Curated investment opportunities for discerning international clients
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/portfolio"
            className="bg-navy border border-gold text-offwhite font-body text-sm px-8 py-4 tracking-wide hover:bg-navy/80 transition-colors"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/golden-visa"
            className="border border-gold text-gold font-body text-sm px-8 py-4 tracking-wide hover:bg-gold/10 transition-colors"
          >
            Golden Visa Programme
          </Link>
        </div>
      </div>
    </section>

    {/* Trust bar */}
    <section className="bg-navy py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {[
          { num: "€2.4B+", label: "Assets Managed" },
          { num: "340+", label: "International Investors" },
          { num: "18", label: "Years of Excellence" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <span className="font-heading text-3xl text-gold">{s.num}</span>
            <span className="block font-body text-xs text-navy-foreground/70 mt-1 tracking-wide">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Investment Approach */}
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="gold-overline mb-4">OUR APPROACH</p>
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Institutional Expertise. Personal Commitment.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            We combine the rigour of institutional investment analysis with the discretion and
            personalised service of a private office. Every opportunity is evaluated against
            exacting criteria before it reaches our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Building2, title: "Residential Premium", desc: "Prime residences in Lisbon, Porto, and the Algarve for lifestyle and capital growth." },
            { icon: Landmark, title: "Commercial Assets", desc: "Income-generating office, retail, and hospitality investments with institutional tenants." },
            { icon: Award, title: "Golden Visa Programme", desc: "Qualifying investments that deliver residency rights alongside financial returns." },
          ].map((c) => (
            <div key={c.title} className="border border-gold/30 p-6">
              <c.icon size={28} className="text-gold mb-4" />
              <h3 className="font-heading text-lg mb-2">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Portfolio */}
    <section className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="gold-overline mb-4">SELECTED INVESTMENTS</p>
        <h2 className="font-heading text-3xl md:text-4xl">Selected Properties</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.slice(0, 3).map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>

    {/* Golden Visa strip */}
    <section className="bg-navy section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="gold-overline mb-4">RESIDENCY BY INVESTMENT</p>
          <h2 className="font-heading text-3xl md:text-4xl text-navy-foreground mb-6">
            European Residency Through Strategic Investment
          </h2>
          <p className="font-body text-navy-foreground/70 leading-relaxed mb-8">
            Portugal's Golden Visa programme offers a proven pathway to European residency
            for qualifying investors. Our team guides clients through every stage, from
            property selection to application submission.
          </p>
          <Link
            to="/golden-visa"
            className="border border-navy-foreground text-navy-foreground font-body text-sm px-8 py-3 tracking-wide hover:bg-navy-foreground/10 transition-colors inline-block"
          >
            Learn More
          </Link>
        </div>
        <div className="space-y-6">
          {[
            { n: "01", text: "Minimum investment from €500,000 in qualifying real estate" },
            { n: "02", text: "Residency rights across 26 Schengen countries" },
            { n: "03", text: "Path to Portuguese citizenship after five years" },
          ].map((b) => (
            <div key={b.n} className="flex gap-4">
              <span className="font-heading text-2xl text-gold">{b.n}</span>
              <p className="font-body text-navy-foreground/80 pt-1">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Insights */}
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="gold-overline mb-4">NEWS & ANALYSIS</p>
        <h2 className="font-heading text-3xl md:text-4xl">Latest Insights</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.slice(0, 3).map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>

    {/* Contact CTA */}
    <section className="section-padding bg-offwhite text-center">
      <div className="max-w-2xl mx-auto">
        <p className="gold-overline mb-4">PRIVATE CONSULTATION</p>
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Begin Your Investment Journey</h2>
        <p className="font-body text-muted-foreground mb-8">
          Speak directly with a senior advisor about your investment objectives and how Meridian can help you achieve them.
        </p>
        <Link
          to="/contact"
          className="bg-navy text-navy-foreground font-body text-sm px-8 py-4 tracking-wide hover:bg-navy/90 transition-colors inline-block"
        >
          Schedule a Private Consultation
        </Link>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-muted-foreground">
          <span className="flex items-center gap-2 font-body text-sm">
            <Phone size={16} className="text-gold" /> +351 21 000 0000
          </span>
          <span className="flex items-center gap-2 font-body text-sm">
            <Mail size={16} className="text-gold" /> invest@meridian.pt
          </span>
          <span className="flex items-center gap-2 font-body text-sm">
            <MapPin size={16} className="text-gold" /> Avenida da Liberdade, Lisbon
          </span>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Home;
