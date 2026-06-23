interface Props {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: Props) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-semibold">
        {label}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}