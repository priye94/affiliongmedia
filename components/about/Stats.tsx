export default function Stats() {
  return (
    <section className="py-20 border-y border-white/10">

      <div className="container mx-auto px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">500+</h3>
          <p className="text-slate-400 mt-2">Campaigns Managed</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">120+</h3>
          <p className="text-slate-400 mt-2">Global Clients</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">10B+</h3>
          <p className="text-slate-400 mt-2">Ad Impressions</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-cyan-400">98%</h3>
          <p className="text-slate-400 mt-2">Client Retention</p>
        </div>

      </div>

    </section>
  );
}