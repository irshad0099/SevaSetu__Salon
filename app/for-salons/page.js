import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock3, IndianRupee } from "lucide-react";
import { PageHero, SectionHeading, FeatureCard, CTABand } from "@/components/ui";
import LeadForm from "@/components/LeadForm";
import { salonFeatures, salonSteps, roles, dayTimeline } from "@/lib/content";

export const metadata = {
  title: "For Salons",
  description: "Live queue, barbers, walk-ins, payments and a daily report — in one Salon App. Free onboarding during the Patna pilot.",
};

export default function ForSalons() {
  return (
    <>
      <PageHero
        eyebrow="For salon owners"
        title="Your shop, your line —"
        highlight="now under control."
        text="Live queue, barbers, walk-ins, payments and the day's accounts — in one Salon App. Whether you have 1 chair or 6, setup takes 10 minutes."
      >
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="#register" className="btn-sun">Register for free <ArrowRight size={16} /></Link>
          <Link href="/pricing" className="btn-ghost">See pricing</Link>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { i: Clock3, t: "LIVE in 48 hours" },
            { i: IndianRupee, t: "0% commission on walk-ins" },
            { i: ShieldCheck, t: "KYC docs private & secure" },
          ].map(({ i: I, t }) => (
            <div key={t} className="flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
              <I size={18} className="text-sun" /> {t}
            </div>
          ))}
        </div>
      </PageHero>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Salon App" title="Forget the register, the memory and the maths" text="Every feature is built with Patna's 1–3 chair salons in mind." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {salonFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} tone={(i + Math.floor(i / 4)) % 2 ? "sun" : "brand"} />
            ))}
          </div>
        </div>
      </section>

      {/* Day timeline */}
      <section className="section bg-brand-50">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="A day with SevaSetu" title={<>A <span className="text-brand">Sunday</span> at Sameer Hair Studio</>} text="Boring Road, 2 chairs. Owner Sameer cuts hair himself, alongside barber Raju. See how the day runs." />
          </div>
          <ol className="relative space-y-6 border-l-2 border-dashed border-brand/30 pl-8">
            {dayTimeline.map((d, i) => (
              <li key={d.time} className="relative">
                <span className={`absolute -left-[45px] top-4 grid h-7 w-7 place-items-center rounded-full border-2 border-ink text-[11px] font-extrabold ${i % 2 ? "bg-brand text-white" : "bg-sun"}`}>
                  {i + 1}
                </span>
                <div className="card">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand">{d.time}</p>
                  <h3 className="mt-1 text-xl font-extrabold">{d.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roles */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="Team roles" title="Everyone gets only the access they need" text="One phone number = one user. Remove a barber and their access ends immediately." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {roles.map((r) => (
              <div key={r.role} className="overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-pop">
                <div className={`${r.color} px-6 py-5`}>
                  <h3 className="text-2xl font-extrabold">{r.role}</h3>
                </div>
                <p className="px-6 py-5 text-sm leading-relaxed text-ink-600">{r.can}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-600">
            💡 <strong>Owner-as-barber:</strong> does the owner cut hair too in your small salon? You can keep the Owner role and still appear in the queue as a barber.
          </p>
        </div>
      </section>

      {/* Onboarding + form */}
      <section id="register" className="section scroll-mt-24 bg-brand text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading light eyebrow="Onboarding" title={<>From draft to <span className="text-sun">LIVE</span> in 4 steps</>} />
            <ol className="mt-10 space-y-4">
              {salonSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sun font-display text-lg font-extrabold text-ink">{i + 1}</span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-3xl bg-white p-6 text-ink sm:p-8">
            <h3 className="text-2xl font-extrabold">Join the pilot</h3>
            <p className="mt-1 text-sm text-ink-600">Send your details and our team will call to help you set up.</p>
            <div className="mt-6">
              <LeadForm variant="salon" />
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
