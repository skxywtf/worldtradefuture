import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/app/components/nav";
import { Footer } from "@/app/components/footer";

export const metadata: Metadata = {
  title: "WorldTradeFuture.io — WTF",
  description:
    "WTF is the native digital currency powering World Trade Factory — AI-driven global trade + DeFi + blockchain.",
  metadataBase: new URL("https://worldtradefuture.io"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.10),transparent_35%),radial-gradient(circle_at_60%_80%,rgba(168,85,247,0.10),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.9))]" />
        </div>

        <Nav />
        <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
