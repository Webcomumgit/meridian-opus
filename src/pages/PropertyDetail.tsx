import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Maximize, Layers, Calendar, Award, MapPin, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { getPropertyById, properties } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = getPropertyById(id || "1");

  if (!property) return <div className="min-h-screen flex items-center justify-center font-heading text-2xl">Property not found</div>;

  const similar = properties.filter((p) => p.id !== property.id).slice(0, 3);

  const features = [
    { icon: Bed, label: "Bedrooms", value: property.bedrooms || "N/A" },
    { icon: Bath, label: "Bathrooms", value: property.bathrooms },
    { icon: Maximize, label: "Area", value: property.area },
    { icon: Layers, label: "Floor", value: property.floor },
    { icon: Calendar, label: "Year Built", value: property.yearBuilt },
    { icon: Award, label: "Golden Visa", value: property.goldenVisaEligible ? "Eligible" : "No" },
  ];

  return (
    <>
      <Navigation />

      {/* Hero image */}
      <div className="h-[60vh] md:h-[70vh] mt-0">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
      </div>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <span className="gold-overline">{property.type}</span>
            <h1 className="font-heading text-3xl md:text-4xl mt-2 mb-1">{property.name}</h1>
            <p className="font-body text-sm uppercase tracking-[0.15em] text-muted-foreground mb-8">
              {property.location}
            </p>

            {property.description.map((p, i) => (
              <p key={i} className="font-body text-muted-foreground leading-relaxed mb-4">{p}</p>
            ))}

            {/* Features grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 mb-10">
              {features.map((f) => (
                <div key={f.label} className="border border-lightgrey p-4">
                  <f.icon size={20} className="text-gold mb-2" />
                  <p className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground">{f.label}</p>
                  <p className="font-heading text-lg">{f.value}</p>
                </div>
              ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {property.images.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={`${property.name} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.1em] text-muted-foreground mb-1">Price</p>
                <p className="font-heading text-3xl text-gold">{property.price}</p>
              </div>

              {/* Contact form */}
              <div className="border border-lightgrey p-6">
                <h3 className="font-heading text-xl mb-4">Request Information</h3>
                <div className="space-y-4">
                  <input placeholder="Name" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input placeholder="Email" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input placeholder="Phone" className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors" />
                  <textarea placeholder="Message" rows={4} className="w-full border border-lightgrey bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                  <button className="w-full bg-navy text-navy-foreground font-body text-sm py-3 tracking-wide hover:bg-navy/90 transition-colors">
                    Send Enquiry
                  </button>
                </div>
              </div>

              {/* Agent card */}
              <div className="border border-lightgrey p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Advisor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-heading text-base">António Ferreira</p>
                    <p className="font-body text-xs text-muted-foreground">Managing Director</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Phone size={14} className="text-gold" /> +351 21 000 0000
                  </p>
                  <p className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Mail size={14} className="text-gold" /> antonio@meridian.pt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-navy py-20 flex flex-col items-center justify-center">
        <MapPin size={32} className="text-gold mb-4" />
        <p className="font-heading text-xl text-navy-foreground">Location Map</p>
        <p className="font-body text-sm text-navy-foreground/50 mt-1">Google Maps Integration</p>
      </section>

      {/* Similar */}
      <section className="section-padding bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <p className="gold-overline mb-4 text-center">YOU MAY ALSO CONSIDER</p>
          <h2 className="font-heading text-3xl text-center mb-12">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PropertyDetail;
