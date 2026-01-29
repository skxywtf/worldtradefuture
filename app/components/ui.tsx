import Link from "next/link";

export function Card({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-sm font-semibold text-zinc-100">{title}</div>
        <div className="text-xs text-zinc-400 transition group-hover:text-zinc-200">Open →</div>
      </div>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
    </Link>
  );
}
