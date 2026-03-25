export interface Property {
  id: string;
  title: string;
  address: string;
  neighborhood: string;
  city: string;
  price: number;
  priceLabel: string;
  beds: number;
  baths: number;
  sqft: number;
  type: "sale" | "lease" | "sold";
  tag?: string;
  image: string;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: "p1",
    title: "The Westwood Penthouse",
    address: "1240 Westwood Blvd, PH",
    neighborhood: "Westwood",
    city: "Los Angeles, CA",
    price: 8950000,
    priceLabel: "$8,950,000",
    beds: 4,
    baths: 5,
    sqft: 5200,
    type: "sale",
    tag: "Featured",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format",
    featured: true,
  },
  {
    id: "p2",
    title: "Bel Air Modern Estate",
    address: "750 Bel Air Rd",
    neighborhood: "Bel Air",
    city: "Los Angeles, CA",
    price: 14500000,
    priceLabel: "$14,500,000",
    beds: 6,
    baths: 8,
    sqft: 9800,
    type: "sale",
    tag: "New Listing",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80&auto=format",
    featured: true,
  },
  {
    id: "p3",
    title: "Malibu Oceanfront Villa",
    address: "22450 Pacific Coast Hwy",
    neighborhood: "Malibu",
    city: "Malibu, CA",
    price: 22000000,
    priceLabel: "$22,000,000",
    beds: 5,
    baths: 6,
    sqft: 7400,
    type: "sale",
    tag: "Exclusive",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format",
    featured: true,
  },
  {
    id: "p4",
    title: "Century City Sky Residence",
    address: "2025 Avenue of the Stars",
    neighborhood: "Century City",
    city: "Los Angeles, CA",
    price: 18500,
    priceLabel: "$18,500 / mo",
    beds: 3,
    baths: 3,
    sqft: 3100,
    type: "lease",
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80&auto=format",
  },
  {
    id: "p5",
    title: "Hollywood Hills Retreat",
    address: "8400 Mulholland Dr",
    neighborhood: "Hollywood Hills",
    city: "Los Angeles, CA",
    price: 6800000,
    priceLabel: "$6,800,000",
    beds: 4,
    baths: 4,
    sqft: 4300,
    type: "sale",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=80&auto=format",
  },
  {
    id: "p6",
    title: "Beverly Hills Trophy Home",
    address: "410 N Canon Dr",
    neighborhood: "Beverly Hills",
    city: "Beverly Hills, CA",
    price: 9750000,
    priceLabel: "Sold · $9,750,000",
    beds: 5,
    baths: 6,
    sqft: 6100,
    type: "sold",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80&auto=format",
  },
];

export const featuredProperties = properties.filter((p) => p.featured);
