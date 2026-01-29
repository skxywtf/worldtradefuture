"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const otherLinks = [
  { label: "WorldTradeFactory", href: "https://www.worldtradefactory.com" },
  { label: "WorldTradeForever", href: "https://worldtradeforever.com" },
  { label: "WorldTradeFrontier", href: "https://worldtradefrontier.ai" },
  { label: "InfinityXZ", href: "https://infinityxz.ai" },
  { label: "SKXYWTF", href: "https://skxywtf.com" },
  { label: "Careers", href: "https://www.worldtradefactory.com/careers" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={[
        "rounded-xl px-3 py-2 text-sm transition",
        active
          ? "bg-white/10 text-zinc-100"
          : "text-zinc-300 hover:bg-white/5 hover:text-zinc-100",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3">
        {/* BRAND */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/skxywtf.png"
            alt="SKXYWTF — World Trade Factory"
            width={140}
            height={28}
            priority
          />

          <span className="h-5 w-px bg-white/10" />

           </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink href="/app" label="Launch App" />
          <NavLink href="/tokenization" label="Tokenization" />
          <NavLink href="/learn" label="Learn" />
          <NavLink href="/about" label="About" />
          <NavLink href="/whitepaper" label="Whitepaper" />

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
            >
              Other ▾
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur">
                {otherLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-zinc-100"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* MOBILE CTA */}
        <div className="md:hidden">
          <Link
            href="/app"
            className="rounded-2xl bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400"
          >
            Launch
          </Link>
        </div>
      </div>
    </header>
  );
}
