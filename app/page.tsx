import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>

      <Hero />

      {/* SERVICES */}
      <section className="py-20 px-6 bg-slate-900">
        <h2 className="text-3xl text-center font-bold mb-10">
          What We Do Best
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Branding & Identity",
            "Performance Marketing",
            "SEO Optimization",
            "Social Media Growth",
            "Website Development",
            "Paid Ad Campaigns",
          ].map((s) => (
            <div key={s} className="p-6 bg-slate-800 rounded-xl">
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Why Clients Choose Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          We focus on results, not just design. Our campaigns are built to
          generate leads, increase visibility, and grow revenue.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600">
        <h2 className="text-3xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-3">Let’s build your digital presence together.</p>

        <a
          href="/contact"
          className="mt-6 inline-block bg-black px-6 py-3 rounded-xl"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}