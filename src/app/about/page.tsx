import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nicole Shlass",
  description:
    "Meet Nicole Shlass — Toronto Sales Representative helping first-time buyers, upsizers, and families find homes that fit their life. 14+ years in the Toronto market.",
};

const accolades = [
  { icon: Clock,  value: "14 Yrs", label: "In the Toronto Market" },
  { icon: Award,  value: "2011",   label: "Career Start" },
  { icon: Users,  value: "400+",   label: "Clients Represented" },
  { icon: Award,  value: "416",    label: "Area Specialist" },
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
                Nicole Shlass has spent over 14 years helping Toronto buyers, sellers, and
                families navigate one of Canada&apos;s most dynamic real estate markets —
                earning a reputation for transparency, dependability, and a deeply
                personalized approach that her clients describe as unmatched.
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
              As a natural people person and relentless question-asker, Nicole loves getting
              to the heart of what truly matters to her clients. She believes in transparency,
              dependability, and tailoring the experience to each person she works with.
            </p>
            <p>
              Her clients often tell her they appreciate her responsiveness, honesty, and
              ability to get them the information they need as fast as possible. One of the
              most rewarding parts of the job is growing alongside clients as their lives
              evolve — from first homes to the next chapter.
            </p>
            <p>
              Nicole is especially passionate about helping first-time buyers and upsizers find
              homes that truly fit their lifestyle and long-term goals. Over the years, those
              relationships have grown into a strong network of referrals and long-term
              connections. Her commitment goes far beyond the transaction — she&apos;s here
              to help clients navigate big decisions with confidence, clarity, and a little
              bit of fun along the way.
            </p>
            <p>
              Outside of work, Nicole spends time with family and friends, helps care for her
              dad who lives with a traumatic brain injury, explores Toronto&apos;s neighbourhood
              gems, takes pottery classes, reads a good book, or escapes to her cottage by the
              lake — her favourite place to recharge.
            </p>
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
