import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concierge — Private Consultation",
  description:
    "Get in touch with Nicole Shlass. Personalized real estate guidance for buyers, sellers, and tenants across Toronto and the GTA.",
};

export default function ConciergePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=2000&q=80&auto=format"
          alt="Concierge consultation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "rgba(12,10,15,0.80)" }} />
        <div className="absolute inset-0 gradient-overlay-bottom" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-label-lg text-secondary mb-4">PRIVATE CONCIERGE</p>
          <h1 className="font-serif text-display-md text-on-surface font-semibold mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            Every great real estate journey starts with a conversation. Reach out — Nicole&apos;s
            team responds within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Form */}
            <div>
              <h2 className="font-serif text-headline-lg text-on-surface font-semibold mb-8">
                Request a Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-serif text-headline-lg text-on-surface font-semibold mb-6">
                  Direct Contact
                </h2>
                <ul className="space-y-6">
                  <li>
                    <a href="tel:+14162716316" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Phone size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-label-md text-outline mb-0.5">Phone</p>
                        <p className="text-title-md text-on-surface group-hover:text-secondary transition-colors">416-271-6316</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:nicole@nicoleshlassrealestate.ca" className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                        <Mail size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-label-md text-outline mb-0.5">Email</p>
                        <p className="text-title-md text-on-surface group-hover:text-secondary transition-colors">nicole@nicoleshlassrealestate.ca</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-label-md text-outline mb-0.5">Office</p>
                        <p className="text-title-md text-on-surface">235 Clinton St</p>
                        <p className="text-body-md text-on-surface-variant">Toronto, ON M6G 2Y5</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-secondary" />
                      </div>
                      <div>
                        <p className="text-label-md text-outline mb-0.5">Availability</p>
                        <p className="text-title-md text-on-surface">Mon – Sat, 9am – 6pm ET</p>
                        <p className="text-body-md text-on-surface-variant">Urgent inquiries accommodated 7 days</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Promise card */}
              <div className="glass-card rounded-2xl p-8 shadow-card mt-4">
                <p className="text-label-lg text-secondary mb-3">THE NICOLE PROMISE</p>
                <p className="font-serif text-headline-sm text-on-surface font-semibold mb-4">
                  Discretion is a given. Results are the standard.
                </p>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Every inquiry is handled personally and confidentially. You will hear from Nicole
                  directly — not an assistant — within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
