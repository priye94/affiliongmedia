import Reveal from "@/components/ui/Reveal";

const services = [
  "Affiliate Marketing",
  "Performance Ads",
  "Lead Generation",
  "Media Buying",
  "Campaign Optimization",
  "Growth Strategy",
];

export default function Services() {
  return (
    <section className="py-28">

      <div className="container mx-auto px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition">
                <p className="text-white font-medium">{s}</p>
              </div>
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}