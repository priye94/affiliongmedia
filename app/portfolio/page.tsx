export default function Portfolio() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Work</h1>

      <p className="text-center text-gray-300 mb-10">
        Real campaigns and branding work delivered for clients.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-800 h-40 rounded-xl"></div>
        <div className="bg-slate-800 h-40 rounded-xl"></div>
        <div className="bg-slate-800 h-40 rounded-xl"></div>
      </div>
    </div>
  );
}