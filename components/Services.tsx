import GlassCard from "@/components/GlassCard";

export default function Services() {
  const services = [
    {
      title: "AI Automation Systems",
      desc: "Workflows, agents, and intelligent business automation.",
    },
    {
      title: "SaaS Development",
      desc: "Scalable cloud applications and platforms.",
    },
    {
      title: "Performance Marketing",
      desc: "High-ROI paid ads and growth campaigns.",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Deployment, hosting, and scaling systems.",
    },
    {
      title: "SEO Systems",
      desc: "Long-term organic growth engines.",
    },
    {
      title: "Analytics Dashboards",
      desc: "Data-driven decision systems.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          A complete growth engineering stack
        </h2>

        <p className="text-center text-slate-400 mt-4">
          Not services. Systems that scale businesses.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <GlassCard key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}