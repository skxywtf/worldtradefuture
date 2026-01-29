import { SectionTitle } from "@/app/components/section-title";
import { FeatureGrid } from "@/app/components/feature-grid";

const appModules = [
  { title: "Dashboard", desc: "Positions, wallet status, and Trade Impact score.", status: "Planned" },
  { title: "Tutorial", desc: "Guided walkthrough of every tool and concept.", status: "Planned" },
  { title: "Swaps", desc: "Cross-chain swaps, limit orders, automated DCA, fiat onramp.", status: "Exploring" },
  { title: "Staking", desc: "Earn rewards for long-term participation.", status: "Planned" },
  { title: "Vaults", desc: "Aggregated strategies; later: insured structures.", status: "Exploring" },
  { title: "Borrowing & Lending", desc: "Collateralized liquidity for trade finance use cases.", status: "Exploring" },
  { title: "Insurance", desc: "Coverage primitives for protocol + trade flows.", status: "Future" },
  { title: "Governance", desc: "Voting + forum pages for the DAO.", status: "Planned" },
  { title: "Gated Pools", desc: "NFT/DAO-gated pools, tiered incentives, partner routes.", status: "Future" },
];

export default function AppPortal() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Launch App"
        title="A portal to WTF DeFi services"
        subtitle="Start as a clean directory. Add modules as they ship, without clutter."
      />

      <FeatureGrid items={appModules} />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Short-term recommendation</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Keep this page as a guided directory while core primitives are built. It’s a great
          on-ramp for users and a safe way to show progress with clear statuses.
        </p>
      </div>
    </div>
  );
}
