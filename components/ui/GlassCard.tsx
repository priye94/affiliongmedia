export default function GlassCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="
      p-6 rounded-2xl
      border border-white/10
      bg-white/5
      backdrop-blur-xl
      hover:scale-[1.02]
      transition
      shadow-[0_0_40px_rgba(0,0,0,0.3)]
    ">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm text-slate-400 mt-2">
        {desc}
      </p>
    </div>
  );
}