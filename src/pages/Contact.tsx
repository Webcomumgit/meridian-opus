import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";

const Contact = () => (
  <>
    <Navigation />
    <InnerHero
      overline="PRIVATE CONSULTATION"
      title="Get in Touch"
      subtitle="Our senior advisors are available to discuss your investment objectives in complete confidence."
    />

    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div>
          <h2 className="font-heading text-2xl mb-6">Send an Enquiry</h2>
          <div className="space-y-5">
            <input placeholder="Full Name" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="Email Address" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
            <input placeholder="Phone Number" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
            <select className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors text-muted-foreground">
              <option>Investment Enquiry</option>
              <option>Golden Visa</option>
              <option>Property Viewing</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Your Message" rows={5} className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
            <button className="bg-navy text-navy-foreground font-body text-sm px-8 py-3 tracking-wide hover:bg-navy/90 transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-10">
          <div className="space-y-8">
            {[
              { icon: Phone, label: "Phone", value: "+351 21 000 0000" },
              { icon: Mail, label: "Email", value: "invest@meridian.pt" },
              { icon: MapPin, label: "Office", value: "Avenida da Liberdade 110, 1250-146 Lisbon, Portugal" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <c.icon size={20} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-body text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Clock size={20} className="text-gold flex-shrink-0 mt-1" />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">Office Hours</p>
              <p className="font-body text-sm">Monday – Friday: 09:00 – 18:00</p>
              <p className="font-body text-sm">Saturday: By appointment</p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-navy flex flex-col items-center justify-center py-16">
            <MapPin size={28} className="text-gold mb-3" />
            <p className="font-heading text-lg text-navy-foreground">Office Location</p>
            <p className="font-body text-xs text-navy-foreground/50 mt-1">Google Maps</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default Contact;
