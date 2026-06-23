export default function Services() {
  const services = [
    {
      title: "Software Development",
      description: "Custom web applications and SaaS platforms.",
    },
    {
      title: "AI Automation",
      description: "AI agents, workflows and chatbots.",
    },
    {
      title: "Cloud Infrastructure",
      description: "Hosting, deployment and scalability.",
    },
    {
      title: "SEO & Content",
      description: "Long-term organic growth systems.",
    },
    {
      title: "Paid Advertising",
      description: "Google Ads and Meta Ads campaigns.",
    },
    {
      title: "Analytics & Reporting",
      description: "Business intelligence dashboards.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Our Growth Ecosystem
        </h2>

        <p className="text-center text-slate-400 mb-16">
          Technology, infrastructure and marketing under one roof.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}