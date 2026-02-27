export interface Property {
  id: string;
  name: string;
  location: string;
  price: string;
  type: "Residential" | "Commercial" | "Golden Visa Eligible";
  image: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: string;
  floor: string;
  yearBuilt: number;
  goldenVisaEligible: boolean;
  description: string[];
  features: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    name: "Palácio da Estrela Residence",
    location: "Estrela, Lisbon",
    price: "€2,850,000",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: "420 m²",
    floor: "Ground + 2",
    yearBuilt: 1890,
    goldenVisaEligible: true,
    description: [
      "A meticulously restored 19th-century palácio in one of Lisbon's most prestigious neighbourhoods. This exceptional residence combines period grandeur with contemporary refinement, offering unparalleled living across three levels.",
      "Original frescoed ceilings, marble floors, and ornamental ironwork have been preserved and complemented by a comprehensive modernisation programme including underfloor heating, home automation, and a private elevator.",
      "The south-facing garden terrace offers panoramic views across the Tagus estuary, while the interior courtyard provides a private sanctuary in the heart of the city.",
    ],
    features: ["Private garden", "Elevator", "Wine cellar", "Staff quarters", "Period features", "River views"],
  },
  {
    id: "2",
    name: "Comporta Beach Estate",
    location: "Comporta, Alentejo",
    price: "€4,200,000",
    type: "Golden Visa Eligible",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      "https://images.unsplash.com/photo-1602343168117-bb8bbe693f0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
    ],
    bedrooms: 6,
    bathrooms: 5,
    area: "580 m²",
    floor: "Ground + 1",
    yearBuilt: 2022,
    goldenVisaEligible: true,
    description: [
      "An architectural masterwork set within two hectares of protected rice paddies and native pine forest, minutes from the pristine beaches of Comporta — Europe's most coveted coastal retreat.",
      "Designed by a leading Portuguese studio, the estate comprises a main residence, guest pavilion, and infinity pool, all oriented to capture the Atlantic light and ocean breezes.",
      "Fully turnkey with bespoke furnishings, this property represents the pinnacle of contemporary coastal living and qualifies for Portugal's Golden Visa programme.",
    ],
    features: ["Infinity pool", "Guest pavilion", "2 hectares", "Beach access", "Bespoke interiors", "Smart home"],
  },
  {
    id: "3",
    name: "Avenida da Liberdade Commercial",
    location: "Avenida da Liberdade, Lisbon",
    price: "€6,500,000",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    ],
    bedrooms: 0,
    bathrooms: 6,
    area: "1,200 m²",
    floor: "Entire Building",
    yearBuilt: 1925,
    goldenVisaEligible: false,
    description: [
      "A landmark mixed-use building on Lisbon's premier boulevard, fully renovated to Class A office specification with ground-floor retail. Currently generating a net yield of 5.2% with long-term institutional tenants.",
      "The property benefits from its position on Avenida da Liberdade, consistently ranked among Europe's most valuable commercial corridors, with demand driven by international luxury brands and professional services firms.",
      "An exceptional opportunity for investors seeking stable, income-generating commercial real estate in one of Europe's fastest-growing capital cities.",
    ],
    features: ["Prime location", "5.2% net yield", "Class A offices", "Retail ground floor", "Long-term tenants", "Fully renovated"],
  },
  {
    id: "4",
    name: "Chiado Heritage Apartment",
    location: "Chiado, Lisbon",
    price: "€1,450,000",
    type: "Golden Visa Eligible",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
    floor: "4th Floor",
    yearBuilt: 1780,
    goldenVisaEligible: true,
    description: [
      "A beautifully appointed apartment in a fully restored 18th-century building in Chiado, Lisbon's cultural heart. High ceilings, original hardwood floors, and generous proportions define this exceptional residence.",
      "The open-plan living and dining area flows onto a south-facing balcony with views across the rooftops to the river. The kitchen has been designed with premium European appliances and natural stone surfaces.",
    ],
    features: ["River views", "Balcony", "Concierge", "Restored building", "Central location", "Period details"],
  },
  {
    id: "5",
    name: "Cascais Waterfront Villa",
    location: "Cascais, Lisbon Coast",
    price: "€3,750,000",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472556-e636c2acda9e?w=800&q=80",
    ],
    bedrooms: 4,
    bathrooms: 4,
    area: "350 m²",
    floor: "Ground + 1",
    yearBuilt: 2019,
    goldenVisaEligible: false,
    description: [
      "A contemporary villa on the Cascais waterfront with direct ocean views and private beach access. The architecture maximises natural light and integrates indoor and outdoor living through floor-to-ceiling glazing.",
      "The lower level houses a private cinema, gym, and temperature-controlled wine room. The rooftop terrace features a heated pool and outdoor kitchen, ideal for entertaining.",
    ],
    features: ["Ocean views", "Private beach", "Rooftop pool", "Cinema room", "Wine cellar", "Gym"],
  },
  {
    id: "6",
    name: "Porto Ribeira Commercial",
    location: "Ribeira, Porto",
    price: "€2,100,000",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1555883006-0f5a0915a80f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80",
    ],
    bedrooms: 0,
    bathrooms: 4,
    area: "650 m²",
    floor: "Entire Building",
    yearBuilt: 1870,
    goldenVisaEligible: true,
    description: [
      "A UNESCO World Heritage listed building in Porto's iconic Ribeira district, fully converted into a boutique hospitality asset. The property operates as a licensed short-term rental with strong year-round occupancy.",
      "Comprising eight individually designed suites, a residents' lounge, and a ground-floor café, the property represents a compelling income-generating investment in one of Europe's most visited cities.",
    ],
    features: ["UNESCO listed", "8 suites", "Licensed rental", "River views", "Café space", "High occupancy"],
  },
];

export const getPropertyById = (id: string) => properties.find((p) => p.id === id);
