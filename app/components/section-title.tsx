export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        {eyebrow}
      </div>
      <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
      {subtitle ? <p className="max-w-2xl text-sm text-zinc-300 md:text-base">{subtitle}</p> : null}
    </div>
  );
}
