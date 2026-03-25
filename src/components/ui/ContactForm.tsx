"use client";

export function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! Nicole's team will be in touch within one business day.");
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-label-md text-outline mb-2">First Name</label>
          <input
            type="text"
            placeholder="Alexandra"
            className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all"
          />
        </div>
        <div>
          <label className="block text-label-md text-outline mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Holloway"
            className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-label-md text-outline mb-2">Email Address</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all"
        />
      </div>

      <div>
        <label className="block text-label-md text-outline mb-2">Phone</label>
        <input
          type="tel"
          placeholder="(310) 000-0000"
          className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all"
        />
      </div>

      <div>
        <label className="block text-label-md text-outline mb-2">I&apos;m interested in</label>
        <select className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all appearance-none cursor-pointer">
          <option value="">Select a service</option>
          <option>Buying a Property</option>
          <option>Selling a Property</option>
          <option>Leasing / Renting</option>
          <option>Investment Consultation</option>
          <option>Market Analysis</option>
        </select>
      </div>

      <div>
        <label className="block text-label-md text-outline mb-2">Message</label>
        <textarea
          rows={5}
          placeholder="Tell Nicole about your goals, timeline, and any properties you have in mind..."
          className="w-full bg-surface-c rounded-xl px-4 py-3.5 text-body-md text-on-surface placeholder-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:bg-surface-c-high transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full gradient-cta text-on-secondary font-semibold text-label-lg py-4 rounded-full hover:opacity-90 transition-opacity shadow-ambient cursor-pointer"
      >
        Send Message
      </button>

      <p className="text-label-sm text-outline text-center">
        Your information is kept strictly confidential.
      </p>
    </form>
  );
}
