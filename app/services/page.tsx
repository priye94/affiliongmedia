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
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s} className="bg-slate-800 p-6 rounded-xl text-center">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}