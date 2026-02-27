import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";

const teamMembers = [
  { name: "António Ferreira", title: "Managing Director", bio: "25 years in European real estate. Former head of Iberian investments at a leading London-based fund.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Helena Monteiro", title: "Director, Capital Markets", bio: "Former investment banker with deep expertise in cross-border real estate transactions.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Carlos Ribeiro", title: "Director, Golden Visa Advisory", bio: "Specialist in residency-by-investment programmes with over 500 successful applications.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sofia Almeida", title: "Head of Research", bio: "Leading authority on Portuguese property market fundamentals and investment trends.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

const milestones = [
  { year: "2006", text: "Founded in Lisbon with a focus on prime residential advisory" },
  { year: "2010", text: "Expanded into commercial real estate and institutional partnerships" },
  { year: "2014", text: "Launched Golden Visa advisory service for international investors" },
  { year: "2019", text: "Opened Porto office and surpassed €1B in managed assets" },
  { year: "2024", text: "€2.4B+ under management across 340+ international investor relationships" },
];

const About = () => (
  <>
    <Navigation />
    <InnerHero
      overline="ABOUT MERIDIAN"
      title="A Legacy of Investment Excellence"
      subtitle="Since 2006, we have guided discerning international investors to exceptional opportunities in Portuguese real estate."
    />

    {/* Mission */}
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="font-heading text-2xl md:text-3xl italic text-charcoal leading-relaxed">
            "We believe that the finest investments are found at the intersection of deep market knowledge, rigorous analysis, and trusted relationships."
          </p>
        </div>
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>Meridian was founded with a singular conviction: that international investors deserve access to the same quality of advice and opportunity as the most established local institutions.</p>
          <p>Our team combines decades of experience across investment banking, asset management, and Portuguese real estate. We operate with the analytical discipline of an institutional investor and the personal commitment of a family office.</p>
          <p>Every client relationship begins with listening. We take the time to understand your objectives, risk tolerance, and vision before presenting a curated selection of opportunities that meet our exacting standards.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <p className="gold-overline mb-4 text-center">OUR VALUES</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">What Defines Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Discretion", desc: "Client confidentiality is absolute. We operate with the highest standards of privacy and professionalism in every engagement." },
            { title: "Expertise", desc: "Our team brings institutional-grade analysis to every opportunity. No investment reaches our clients without rigorous due diligence." },
            { title: "Long-term Vision", desc: "We build relationships measured in decades, not transactions. Our success is defined by our clients' sustained prosperity." },
          ].map((v) => (
            <div key={v.title} className="border-t-2 border-gold pt-6">
              <h3 className="font-heading text-xl mb-3">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <p className="gold-overline mb-4 text-center">LEADERSHIP</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((m) => (
            <div key={m.name}>
              <div className="aspect-square overflow-hidden mb-4">
                <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="font-heading text-lg">{m.name}</h3>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-gold mt-1">{m.title}</p>
              <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding bg-offwhite">
      <div className="max-w-3xl mx-auto">
        <p className="gold-overline mb-4 text-center">OUR JOURNEY</p>
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Milestones</h2>
        <div className="space-y-8">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-gold" />
                <div className="w-px h-full bg-gold/30 mt-1" />
              </div>
              <div>
                <span className="font-heading text-xl text-gold">{m.year}</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default About;
