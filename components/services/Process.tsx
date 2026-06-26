const steps = [
  "Discovery & Audit",
  "Strategy Build",
  "Campaign Execution",
  "Scale & Optimize",
];

export default function Process() {
  return (
    <section className="py-28 bg-[#060810]">

      <div className="container mx-auto px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5 text-center"
            >
              <div className="text-cyan-400 text-2xl font-bold">
                {i + 1}
              </div>
              <p className="mt-4 text-slate-300">{step}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}