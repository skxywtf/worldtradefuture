import { SectionTitle } from "@/app/components/section-title";

const tokenomics = [
  { k: "Total Supply", v: "1,000,000,000 WTF (fixed)" },
  { k: "Ecosystem Incentives", v: "40%" },
  { k: "Platform Development", v: "30%" },
  { k: "Team & Advisors (vested)", v: "20%" },
  { k: "Liquidity & Partnerships", v: "10%" },
];

const roadmap = [
  { year: "2025", items: ["WTF launch", "CEX listings", "Smart contract deployments"] },
  { year: "2026", items: ["XY Model integration", "SKORE risk framework launch", "Expansion to trade hubs"] },
  { year: "2027", items: ["Global trade partnerships", "Real-time economic oracle deployment", "CBDC bridge concepts"] },
];

export default function Whitepaper() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Whitepaper"
        title="WTF — the digital currency of World Trade Factory"
        subtitle="A clean, public summary. Link the full PDF for download."
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Branding protocol</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Primary name: <span className="font-semibold">WTF</span> (uppercase). Symbol:{" "}
          <span className="font-semibold">WTF</span>. Avoid “WTF Token” / “WTF Coin”.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-zinc-100">Tokenomics</h3>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            {tokenomics.map((t) => (
              <div key={t.k} className="flex items-center justify-between gap-4">
                <span className="text-zinc-200">{t.k}</span>
                <span className="text-zinc-300">{t.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-zinc-100">Roadmap</h3>
          <div className="mt-3 space-y-3 text-sm text-zinc-300">
            {roadmap.map((r) => (
              <div key={r.year}>
                <div className="font-semibold text-zinc-200">{r.year}</div>
                <ul className="mt-1 list-inside list-disc">
                  {r.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Download</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Place your PDF at <code className="rounded bg-black/40 px-2 py-1">/public/wtf-whitepaper.pdf</code> and link it below.
        </p>
        <a
          className="mt-4 inline-flex rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10"
          href="/wtf-whitepaper.pdf"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
