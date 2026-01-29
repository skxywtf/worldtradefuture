import { SectionTitle } from "@/app/components/section-title";

export default function About() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="About"
        title="WorldTradeFuture is the blockchain front door for World Trade Factory"
        subtitle="One place to learn the WTF thesis, see progress, and access the ecosystem."
      />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">What this site is</h3>
        <p className="mt-2 text-sm text-zinc-300">
          A clean, public-facing hub for WTF: token utility, tokenization services, education, and the app portal.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <a className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10" href="https://www.worldtradefactory.com" target="_blank" rel="noreferrer">
          <div className="text-sm font-semibold text-zinc-100">WorldTradeFactory</div>
          <div className="mt-2 text-sm text-zinc-300">Core platform + broader ecosystem.</div>
        </a>

        <a className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10" href="https://worldtradefuture.ai" target="_blank" rel="noreferrer">
          <div className="text-sm font-semibold text-zinc-100">WorldTradeFuture.ai</div>
          <div className="mt-2 text-sm text-zinc-300">Current site / reference as you migrate to .io.</div>
        </a>
      </div>
    </div>
  );
}
