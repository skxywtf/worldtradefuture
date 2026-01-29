import Link from "next/link";
import Image from "next/image";
import { Card } from "@/app/components/ui";

const pillars = [
  {
    title: "Trade Settlement Layer",
    desc: "Instant cross-border settlement + programmable trade automation.",
    href: "/learn#utility",
  },
  {
    title: "AI Trade Intelligence",
    desc: "Dashboards, SKORE-style risk, macro insights, and model access.",
    href: "/learn#ai",
  },
  {
    title: "DeFi + Yield Infrastructure",
    desc: "Staking, vaults, lending, insurance, and token-gated pools (phased).",
    href: "/app",
  },
  {
    title: "Tokenization Services",
    desc: "Tokenize assets for institutions, enterprises, and governments.",
    href: "/tokenization",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.35),transparent_45%)]" />

        <div className="relative space-y-8">
          {/* Brand Row */}
          <div className="flex items-center gap-4">
            <Image
              src="/wtf-digital.jpg"
              alt="WTF"
              width={96}
              height={96}
              priority
              className="rounded-2xl border border-white/10"
            />
            <div className="text-sm text-zinc-300">
              <div className="text-zinc-100 font-semibold tracking-wide">
                WORLD TRADE FUTURE
              </div>
              <div>Digital currency + learning hub</div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-zinc-100">WTF</span>{" "}
            <span className="text-zinc-300">
              powers the future of global trade.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="max-w-2xl text-pretty text-base text-zinc-300 md:text-lg">
            WorldTradeFuture.io is the public gateway to World Trade Factory’s
            blockchain initiative—uniting trade settlement, DeFi infrastructure,
            tokenization, and institutional-grade learning.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/app"
              className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-400"
            >
              Launch App
            </Link>
            <Link
              href="/tokenization"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Tokenization
            </Link>
            <Link
              href="/learn"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Learn
            </Link>
            <Link
              href="/whitepaper"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-white/10"
            >
              Whitepaper
            </Link>
          </div>

          {/* Pillars */}
          <div className="grid gap-4 pt-4 md:grid-cols-2">
            {pillars.map((p) => (
              <Card key={p.title} title={p.title} desc={p.desc} href={p.href} />
            ))}
          </div>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-zinc-100">
            Branding Protocol
          </h3>
          <p className="mt-2 text-sm text-zinc-300">
            Primary name: <span className="font-semibold">WTF</span> (uppercase).
            Symbol: <span className="font-semibold">WTF</span>. Avoid “WTF
            Token/Coin”.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-zinc-100">
            Token Supply
          </h3>
          <p className="mt-2 text-sm text-zinc-300">
            Fixed supply:{" "}
            <span className="font-semibold">1,000,000,000 WTF</span>.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm font-semibold text-zinc-100">Roadmap</h3>
          <p className="mt-2 text-sm text-zinc-300">
            2025 launch & listings → 2026 AI & risk frameworks → 2027 oracles &
            trade bridges.
          </p>
        </div>
      </section>
    </div>
  );
}
