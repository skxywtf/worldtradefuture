export function FeatureGrid({
  items,
}: {
  items: { title: string; desc: string; status: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((i) => (
        <div key={i.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-zinc-100">{i.title}</h3>
            <span className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-300">
              {i.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-zinc-300">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}
