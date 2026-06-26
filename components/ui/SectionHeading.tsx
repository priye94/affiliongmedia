interface Props {
  label?: string;   // old system
  badge?: string;   // new system
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  badge,
  title,
  description,
}: Props) {

  // fallback logic (important)
  const displayLabel = label || badge;

  return (
    <div className="text-center mb-16">

      {/* LABEL / BADGE */}
      {displayLabel && (
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs font-semibold">
          {displayLabel}
        </p>
      )}

      {/* TITLE */}
      <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {/* DESCRIPTION */}
      {description && (
        <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}

    </div>
  );
}