import { SectionTitle } from "@/app/components/section-title";

const offerings = [
  { title: "Tokenize assets", desc: "Real-world assets, revenue streams, trade instruments, and funds." },
  { title: "Investor-ready progress", desc: "Milestones and delivery status for institutional buyers." },
  { title: "Self-setup pack", desc: "Pre-order or license automation tooling for tokenization workflows." },
  { title: "Partners + integrations", desc: "Security, compliance, custody, on/off-ramps, and infra." },
];

export default function Tokenization() {
  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Tokenization"
        title="Put assets on-chain — with a trade-native design"
        subtitle="For businesses, institutions, and governments exploring tokenization and settlement."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {offerings.map((o) => (
          <div key={o.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold text-zinc-100">{o.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{o.desc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-sm font-semibold text-zinc-100">Contact</h3>
        <p className="mt-2 text-sm text-zinc-300">
          Wire this to your CRM (HubSpot / Tally / Typeform) or a simple email intake.
        </p>
        <a
          className="mt-4 inline-flex rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black hover:bg-emerald-400"
          href="mailto:sage@worldtradefactory.com?subject=WorldTradeFuture%20Tokenization%20Inquiry"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
