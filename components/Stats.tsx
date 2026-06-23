export default function Stats() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "10+", label: "Industries Served" },
    { value: "99.9%", label: "Infrastructure Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center bg-slate-900 rounded-2xl p-8 border border-slate-800"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              {stat.value}
            </h3>
            <p className="text-slate-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}