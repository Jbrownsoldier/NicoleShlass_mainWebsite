export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Adriana & Marcus Chen",
    role: "Buyers — Bel Air",
    quote:
      "Nicole found us our dream home in three weeks. Her knowledge of the Los Angeles luxury market is unmatched. From the first call to closing, every detail was handled with extraordinary care.",
    rating: 5,
  },
  {
    id: "t2",
    name: "James Holloway",
    role: "Seller — Beverly Hills",
    quote:
      "We listed at $9.75M and closed above asking. Nicole's marketing strategy—the photography, the network, the quiet outreach—attracted exactly the right buyer. She is the standard.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sophia Reinholt",
    role: "Lessee — Century City",
    quote:
      "As a busy executive relocating from New York, I needed someone who could move fast and think ahead. Nicole did both. She had me in a stunning Century City residence within two weeks.",
    rating: 5,
  },
];
