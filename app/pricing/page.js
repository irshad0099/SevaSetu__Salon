import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero, SectionHeading, CTABand } from "@/components/ui";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "Pricing",
  description: "Free for customers. For salons, an 8% commission only on completed customers who came through the app — 0% on walk-ins.",
};

const plans = [
  {
    name: "Customer",
    price: "Free",
    sub: "forever",
    tone: "bg-white",
    points: ["Nearby salons + live queue", "Token and slot booking", "Push alerts + reminders", "No booking fee, no advance"],
    cta: { href: "/#download", label: "Download the app" },
  },
  {
    name: "Salon Partner",
    price: "8%",
    sub: "only on completed customers who came through the app",
    tone: "bg-sun",
    featured: true,
    points: ["Salon App — owner, manager, barbers", "Live queue + walk-ins + appointments", "Daily report & analytics", "0% commission on counter walk-ins", "Payout every Monday", "Free onboarding during the pilot"],
    cta: { href: "/for-salons#register", label: "Become a partner" },
  },
];

const examples = [
  { case: "Online payment, service complete", pay: "₹150 to SevaSetu", ledger: "+₹138 to your wallet", c: "text-brand" },
  { case: "App token, pay-at-shop", pay: "₹150 to you", ledger: "−₹12 commission (wallet)", c: "text-ink" },
  { case: "Counter walk-in (via Salon App)", pay: "At the shop", ledger: "₹0 — no entry", c: "text-ink-400" },
];

export default function Pricing() {
  return (
    <>
      <PageHero eyebrow="Pricing" title="You pay only when" highlight="a customer comes." text="No monthly fee, no setup charge. Just a small commission on customers who came through the SevaSetu app and completed their service." />

      <section className="section bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-2 lg:gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`relative flex flex-col rounded-[2rem] border-2 border-ink p-8 sm:p-10 ${p.tone} ${p.featured ? "shadow-pop" : ""}`}>
              {p.featured && <span className="absolute -top-4 left-8 rounded-full bg-brand px-4 py-1.5 text-xs font-bold text-white">Patna pilot</span>}
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="mt-4 font-display text-6xl font-extrabold text-brand sm:text-7xl">{p.price}</p>
              <p className="mt-1 text-sm text-ink-600">{p.sub}</p>
              <ul className="mt-8 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm font-medium"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-white"><Check size={12} /></span>{pt}</li>
                ))}
              </ul>
              <Link href={p.cta.href} className={`mt-10 ${p.featured ? "btn bg-ink text-white hover:bg-brand" : "btn-outline"}`}>
                {p.cta.label} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-brand-50">
        <div className="container-x">
          <SectionHeading center eyebrow="Example: ₹150 Haircut + Beard" title="Fully transparent accounts" text="Every entry shows in the wallet ledger. If there's a mistake, we add a new adjustment — entries are never edited or deleted." />
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border-2 border-ink bg-white">
            <div className="hidden grid-cols-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-widest text-white/70 sm:grid">
              <span>Case</span><span>Customer pays</span><span>Ledger (8%)</span>
            </div>
            {examples.map((e, i) => (
              <div key={e.case} className={`grid gap-1 px-6 py-5 sm:grid-cols-3 sm:gap-4 ${i % 2 ? "bg-brand-50/40" : ""}`}>
                <span className="font-semibold">{e.case}</span>
                <span className="text-sm text-ink-600">{e.pay}</span>
                <span className={`font-display font-extrabold ${e.c}`}>{e.ledger}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              ["Every Monday, 10 AM", "Payout of your positive balance, with the UTR"],
              ["Negative balance?", "Adjusted from your next online earnings, or via a UPI link"],
              ["Razorpay fee", "SevaSetu absorbs it during the pilot"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-5 shadow-card">
                <p className="font-display font-extrabold text-brand">{t}</p>
                <p className="mt-1 text-sm text-ink-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title="Questions? Answers here." />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
