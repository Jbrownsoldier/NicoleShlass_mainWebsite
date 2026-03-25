import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Award, TrendingUp, Users } from "lucide-react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { featuredProperties } from "@/data/properties";
import { testimonials } from "@/data/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicole Shlass — Luxury Real Estate Los Angeles",
  description:
    "Los Angeles' premier luxury real estate agent. Discover bespoke buying, selling, and leasing services across Beverly Hills, Bel Air, Malibu, and beyond.",
};

const stats = [
  { icon: TrendingUp, value: "$2.4B+", label: "In Total Sales" },
  { icon: Award,      value: "18 Yrs", label: "Of Experience" },
  { icon: Users,      value: "400+",   label: "Clients Served" },
  { icon: Star,       value: "Top 1%", label: "LA Agent Ranking" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&q=85&auto=format"
          alt="Luxury Los Angeles estate"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 gradient-overlay-full" />
        <div className="absolute inset-0 gradient-overlay-bottom" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-3xl">
            <p className="text-label-lg text-secondary mb-6 tracking-widest">
              LOS ANGELES LUXURY REAL ESTATE
            </p>
            <h1 className="font-serif text-display-lg text-on-surface font-semibold mb-7 leading-tight">
              Your Home.<br />
              <span className="text-primary">Curated,</span>{" "}
              Negotiated,<br />
              Delivered.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Nicole Shlass brings an editorial eye and an elite network to every
              transaction. Whether you&apos;re acquiring, divesting, or leasing — expect
              nothing less than extraordinary.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="gradient-cta text-on-secondary font-semibold text-label-lg px-8 py-4 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-ambient"
              >
                View Listings <ArrowRight size={16} />
              </Link>
              <Link
                href="/concierge"
                className="glass text-on-surface font-medium text-label-md px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-surface-c/80 transition-all"
              >
                Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-primary-container border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-secondary" />
                </div>
                <div>
                  <p className="font-serif text-headline-sm text-on-surface font-semibold">{value}</p>
                  <p className="text-label-md text-outline">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Properties ────────────────────────────────────────────── */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-label-lg text-secondary mb-3">EXCLUSIVE LISTINGS</p>
              <h2 className="font-serif text-display-md text-on-surface font-semibold">
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden md:inline-flex items-center gap-2 text-label-md text-on-surface-variant hover:text-on-surface transition-colors group"
            >
              All Properties
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ───────────────────────────────────────────────────────── */}
      <section className="py-28 bg-surface-c-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-label-lg text-secondary mb-3">FULL-SPECTRUM EXPERTISE</p>
            <h2 className="font-serif text-display-md text-on-surface font-semibold">
              How Nicole Can Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                href: "/buying",
                label: "Buying",
                icon: "🏡",
                desc: "Access off-market inventory and strategic negotiation to secure your ideal property at the right price.",
              },
              {
                href: "/selling",
                label: "Selling",
                icon: "🏛",
                desc: "Commanding marketing, precise pricing, and an elite buyer network to close above asking — consistently.",
              },
              {
                href: "/leasing",
                label: "Leasing",
                icon: "🗝",
                desc: "Premium lease representation for both tenants and landlords across Los Angeles's finest addresses.",
              },
            ].map(({ href, label, icon, desc }) => (
              <Link
                key={href}
                href={href}
                className="group glass-card rounded-2xl p-8 flex flex-col gap-5 hover:bg-surface-c-highest/80 transition-all duration-300 hover:-translate-y-1 shadow-card"
              >
                <span className="text-4xl">{icon}</span>
                <div>
                  <h3 className="font-serif text-headline-sm text-on-surface font-semibold mb-2 group-hover:text-primary transition-colors">
                    {label}
                  </h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
                <span className="mt-auto text-label-md text-secondary flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Nicole ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-ambient">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format"
                alt="Nicole Shlass, Luxury Real Estate Agent"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-6 left-6">
                <div className="glass rounded-xl px-5 py-4">
                  <p className="font-serif text-title-lg text-on-surface font-semibold">Nicole Shlass</p>
                  <p className="text-label-md text-outline mt-0.5">Luxury Real Estate Specialist</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-label-lg text-secondary">THE AGENT BEHIND THE BRAND</p>
              <h2 className="font-serif text-display-md text-on-surface font-semibold">
                Precision.<br />Discretion.<br />Results.
              </h2>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                With nearly two decades in the Los Angeles luxury market, Nicole Shlass has
                built a reputation for delivering exceptional outcomes for her clients. Her
                approach is editorial — every detail curated, every negotiation strategic,
                every client relationship personal.
              </p>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                From intimate Bel Air retreats to architectural Malibu compounds, Nicole
                moves seamlessly across the spectrum of luxury — bringing the same
                commitment to every transaction.
              </p>
              <Link
                href="/about"
                className="self-start inline-flex items-center gap-2 text-label-lg text-secondary hover:text-on-surface transition-colors group mt-2"
              >
                Read Nicole&apos;s Story
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-primary-container">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-label-lg text-secondary mb-3">CLIENT STORIES</p>
            <h2 className="font-serif text-display-md text-on-surface font-semibold">
              What Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="glass-card rounded-2xl p-8 flex flex-col gap-5 shadow-card">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-body-lg text-on-surface-variant leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-serif text-title-md text-on-surface font-semibold">{t.name}</p>
                  <p className="text-label-md text-outline mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=2000&q=80&auto=format"
          alt="Luxury property"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: "rgba(12,10,15,0.75)" }} />
        <div className="absolute inset-0 gradient-overlay-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-label-lg text-secondary mb-5">BEGIN YOUR SEARCH</p>
          <h2 className="font-serif text-display-md text-on-surface font-semibold mb-6">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto leading-relaxed">
            Let Nicole&apos;s concierge team handle every detail — from first showing to closing day.
            Private, discreet, and entirely tailored to you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/concierge"
              className="gradient-cta text-on-secondary font-semibold text-label-lg px-9 py-4 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-ambient"
            >
              Request Private Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/properties"
              className="glass text-on-surface font-medium text-label-md px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-surface-c/80 transition-all"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
