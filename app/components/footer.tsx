export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-sm font-semibold text-zinc-100">WorldTradeFuture.io</div>
            <div className="mt-1 text-xs text-zinc-400">
              WTF • AI-driven global trade + DeFi + blockchain
            </div>
          </div>

          <div className="text-xs text-zinc-400">© {new Date().getFullYear()} SKXYWTF / World Trade Factory</div>
        </div>
      </div>
    </footer>
  );
}
