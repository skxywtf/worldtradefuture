import Image from "next/image";

const links = [
  { label: "WorldTradeFactory", href: "https://www.worldtradefactory.com" },
  { label: "WorldTradeForever", href: "https://worldtradeforever.com" },
  { label: "WorldTradeFrontier", href: "https://worldtradefrontier.ai" },
  { label: "InfinityXZ", href: "https://infinityxz.ai" },
  { label: "SKXYWTF", href: "https://skxywtf.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/skxywtf.png"
              alt="SKXYWTF — World Trade Factory"
              width={160}
              height={32}
            />
            </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-300">
            {links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="hover:text-zinc-100">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>WTF • AI-driven global trade + DeFi + blockchain</div>
          <div>© {new Date().getFullYear()} SKXYWTF / World Trade Factory</div>
        </div>
      </div>
    </footer>
  );
}
