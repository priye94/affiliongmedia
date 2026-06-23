export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold">
            Let’s Build Your Growth System
          </h2>

          <p className="text-slate-400 mt-4">
            Book a strategy call and scale your business with AI systems.
          </p>
        </div>

        {/* RIGHT FORM */}
        <form className="space-y-4">

          <input
            className="w-full p-3 rounded-lg bg-[#0b1224] border border-white/10"
            placeholder="Name"
          />

          <input
            className="w-full p-3 rounded-lg bg-[#0b1224] border border-white/10"
            placeholder="Email"
          />

          <textarea
            className="w-full p-3 rounded-lg bg-[#0b1224] border border-white/10"
            placeholder="Message"
          />

          <button className="w-full py-3 rounded-lg bg-cyan-500 text-black font-medium">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}