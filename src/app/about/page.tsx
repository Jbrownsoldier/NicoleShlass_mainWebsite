import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Star, Users, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nicole Shlass",
  description:
    "Meet Nicole Shlass — Los Angeles luxury real estate specialist with 18 years of experience, $2.4B+ in sales, and an unwavering commitment to her clients.",
};

const accolades = [
  { icon: TrendingUp, value: "$2.4B+", label: "Career Sales Volume" },
  { icon: Award,      value: "Top 1%", label: "Los Angeles Agent Ranking" },
  { icon: Users,      value: "400+",   label: "Clients Represented" },
  { icon: Star,       value: "18 Yrs", label: "In the LA Market" },
];

const press = [
  { outlet: "Forbes", headline: "The Agents Reshaping Luxury Real Estate" },
  { outlet: "Architectural Digest", headline: "10 Agents Who Understand Beautiful Homes" },
  { outlet: "Los Angeles Magazine", headline: "The City's Most Trusted Real Estate Names" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-primary-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-label-lg text-secondary mb-4">ABOUT NICOLE</p>
              <h1 className="font-serif text-display-md text-on-surface font-semibold mb-6">
                Where Precision<br />Meets Passion
              </h1>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                Nicole Shlass has spent nearly two decades mastering the Los Angeles luxury
                market — earning a reputation for discretion, results, and an editorial
                attention to detail that her clients describe as unmatched.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-ambient">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format"
                alt="Nicole Shlass"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {accolades.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon size={20} className="text-secondary" />
                </div>
                <div>
                  <p className="font-serif text-display-md text-on-surface font-semibold">{value}</p>
                  <p className="text-label-md text-outline">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-label-lg text-secondary mb-5">HER STORY</p>
          <h2 className="font-serif text-headline-lg text-on-surface font-semibold mb-8">
            Built on Trust. Defined by Results.
          </h2>
          <div className="space-y-6 text-body-lg text-on-surface-variant leading-relaxed">
            <p>
              Nicole began her career in the art world — as a curator at a prominent LA gallery
              where she developed an eye for the exceptional. When she transitioned to real estate,
              she brought that same editorial sensibility to how she evaluates, markets, and presents
              properties. A home, she believes, is more than square footage — it&apos;s a curated life.
            </p>
            <p>
              Over 18 years, she has built a client roster spanning entertainment executives,
              international investors, and multi-generational family estates. Her approach has
              never changed: listen deeply, advise honestly, and execute flawlessly.
            </p>
            <p>
              Nicole is consistently ranked among the top 1% of agents in Greater Los Angeles.
              She specializes in Beverly Hills, Bel Air, Malibu, Westwood, and the Hollywood Hills
              — neighborhoods where relationships and reputation determine access.
            </p>
            <p>
              When she&apos;s not closing deals, Nicole sits on the board of the LA Arts Foundation
              and mentors emerging agents through the city&apos;s leading brokerage network.
            </p>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 bg-surface-c-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-label-lg text-secondary mb-3">AS SEEN IN</p>
            <h2 className="font-serif text-headline-lg text-on-surface font-semibold">Press & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {press.map(({ outlet, headline }) => (
              <div key={outlet} className="glass-card rounded-2xl p-8 flex flex-col gap-4 shadow-card">
                <p className="text-label-lg text-secondary">{outlet}</p>
                <p className="font-serif text-title-lg text-on-surface font-medium leading-snug">
                  &ldquo;{headline}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-serif text-headline-lg text-on-surface font-semibold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            Whether you&apos;re buying, selling, or leasing — Nicole is ready to put her
            expertise to work for you.
          </p>
          <Link
            href="/concierge"
            className="gradient-cta text-on-secondary font-semibold text-label-lg px-8 py-4 rounded-full inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-ambient mx-auto"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
