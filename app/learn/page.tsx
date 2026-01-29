import { SectionTitle } from "@/app/components/section-title";

const learnTracks = [
  {
    id: "utility",
    title: "WTF Utility (Trade + DeFi)",
    bullets: [
      "Settlement for cross-border transactions",
      "On-chain escrow + compliance + traceability concepts",
      "Staking + yield + collateral use cases",
    ],
  },
  {
    id: "ai",
    title: "AI Trade Intelligence",
    bullets: [
      "Premium analytics access via WTF",
      "Risk frameworks + macro insights",
      "Governance-driven model evolution",
    ],
  },
  {
    id: "governance",
    title: "Governance + Membership",
    bullets: [
      "Tiered access to research + tools",
      "DAO voting + forum structure",
      "Incentives, referrals, contributions",
    ],
  },
  {
    id: "industry",
    title: "Industry Developments (Feed)",
    bullets: [
      "Placeholder section (wire to CoinMetrics, blog, RSS, or your own research)",
      "Add tags: L2s, RWA, stablecoins, CBDCs, regulation, custody, on/off-ramps",
      "Use a CMS later (MDX, Ghost, or headless CMS)",
    ],
  },
];

export default function Learn() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Learn"
        title="Trade-native crypto education"
        subtitle="Teach users what you’re building, while covering industry developments in a structured way."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {learnTracks.map((t) => (
          <div id={t.id} key={t.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold text-zinc-100">{t.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Next upgrade (when you’re ready)</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Add a “Research” section powered by MDX posts or a CMS, and an “Index” page with filters
          (RWA / stablecoins / trade finance / infra).
        </p>
      </div>
    </div>
  );
}
