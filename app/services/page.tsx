import FooterSection from "@/components/sections/FooterSection";

export default function Services() {
  const services = [
    "Brand Strategy",
    "Social Media Marketing",
    "SEO Optimization",
    "Website Development",
    "Graphic Design",
    "Outdoor Advertising",
    "Paid Ads Campaigns",
  ];

  return (
    <main className="bg-[#070A12] text-white overflow-hidden">

      {/* ===== HERO BACKGROUND ===== */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.12),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,.10),transparent_45%)]" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">

        <div className="container mx-auto px-6 lg:px-8 text-center">

          <div className="max-w-3xl mx-auto">

            <span className="inline-flex px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-xs tracking-widest uppercase">
              Our Services
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight">
              Growth Services <br />
              <span className="text-cyan-400">That Scale Brands</span>
            </h1>

            <p className="mt-8 text-lg text-slate-300 leading-8">
              We deliver full-stack marketing solutions including branding,
              SEO, ads, development, and performance campaigns.
            </p>

          </div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="py-28">

        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">

          <h2 className="text-4xl font-bold">
            Everything You Need to Grow
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            From strategy to execution, we help businesses scale digitally with
            measurable performance systems.
          </p>

        </div>

      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="pb-28">

        <div className="container mx-auto px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((s) => (
              <div
                key={s}
                className="
                  group
                  p-8
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  text-center
                  transition
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                "
              >
                <span className="text-lg font-semibold text-white">
                  {s}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Scale Your Business?
          </h2>

          <p className="mt-6 text-slate-300">
            Let’s build a system that drives real performance and growth.
          </p>

          <a
            href="/contact"
            className="
              mt-10 inline-block
              px-10 py-4
              bg-cyan-400
              text-black
              font-semibold
              rounded-full
              hover:shadow-[0_0_40px_rgba(34,211,238,.4)]
              transition
            "
          >
            Get Started →
          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <FooterSection />

    </main>
  );
}