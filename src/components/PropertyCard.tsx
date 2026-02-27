import { Link } from "react-router-dom";
import type { Property } from "@/data/properties";

const PropertyCard = ({ property, className = "" }: { property: Property; className?: string }) => (
  <Link to={`/portfolio/${property.id}`} className={`group block ${className}`}>
    <div className="border border-lightgrey overflow-hidden">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block font-body text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2 py-1 mb-3">
          {property.type}
        </span>
        <h3 className="font-heading text-xl mb-1">{property.name}</h3>
        <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
          {property.location}
        </p>
        <p className="font-heading text-lg text-charcoal">From {property.price}</p>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
