import Link from "next/link";
import { ArrowRight, Clock, Frown, Smartphone, Store, Star, MapPin, Apple, Play, Check } from "lucide-react";
import LiveQueueDemo from "@/components/LiveQueueDemo";
import { SectionHeading, FeatureCard, CTABand } from "@/components/ui";
import { stats, customerFeatures, customerSteps, services } from "@/lib/content";

const areas = ["Boring Road", "Kankarbagh", "Rajendra Nagar", "Patliputra", "Bailey Road", "Ashok Rajpath", "Danapur", "Fraser Road", "Raja Bazar", "Anisabad"];

export default function Home() {
  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative overflow-hidden bg-brand text-white">
        <div className="bg-grid absolute inset-0" />
        <div className="glow glow-mint -left-56 -top-4 h-[36rem] w-[36rem]" />
        <div className="glow glow-sun -bottom-24 -right-24 h-[36rem] w-[36rem]" />

        <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
          <div>
            <span className="eyebrow bg-white/10 text-sun">
              <MapPin size={12} /> Now live in Patna
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Book Your <span className="text-sun">Time</span>,
              <br />
              Not The <span className="relative inline-block">
                Queue
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" aria-hidden="true">
                  <path d="M2 9C50 2 150 2 198 9" stroke="#FFD500" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Sunday rush or wedding season — stop standing in a salon line for 2 hours.
              Take a <strong className="text-white">live token</strong> from home, get an
              <strong className="text-white"> alert</strong> when it's your turn, and walk straight to the chair.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#download" className="btn-sun">
                <Smartphone size={18} /> Get the Customer App
              </Link>
              <Link href="/for-salons" className="btn-ghost">
                <Store size={18} /> I'm a salon owner <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["bg-sun", "bg-white", "bg-sun", "bg-white"].map((c, i) => (
                  <span key={i} className={`grid h-10 w-10 place-items-center rounded-full border-2 border-brand ${c} font-display text-sm font-extrabold text-brand`}>
                    {["R", "A", "S", "V"][i]}
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-sun">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-white/70">Loved by customers of our pilot salons</p>
              </div>
            </div>
          </div>

          {/* Hero visual: token card stack */}
          <div className="relative mx-auto mt-6 w-full max-w-md sm:mt-0">
            <div className="absolute -right-1 -top-12 z-20 sm:-right-2 sm:-top-6 animate-floaty rounded-2xl border-2 border-ink bg-sun px-4 py-3 text-ink shadow-pop">
              <p className="text-[10px] font-bold uppercase tracking-widest">Push · now</p>
              <p className="text-sm font-bold">Token 7 — please come to the chair ✂</p>
            </div>

            <div className="relative z-10 rounded-[2rem] bg-white p-6 text-ink shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-extrabold">Sameer Hair Studio</p>
                  <p className="text-xs text-ink-400">Boring Road · 2 barbers · ⭐ 4.8</p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand">Open</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-brand p-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Your token</p>
                  <p className="font-display text-5xl font-extrabold">#7</p>
                </div>
                <div className="rounded-2xl bg-sun p-4 text-ink">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink/70">ETA</p>
                  <p className="font-display text-5xl font-extrabold">35<span className="text-lg">m</span></p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[
                  { n: "Raju", s: "Busy · 3 waiting", c: "bg-sun" },
                  { n: "Sameer", s: "Available", c: "bg-live" },
                ].map((b) => (
                  <div key={b.n} className="flex items-center justify-between rounded-2xl border border-ink/10 px-4 py-3">
                    <span className="flex items-center gap-3">
                      <span className={`h-2.5 w-2.5 rounded-full ${b.c}`} />
                      <span className="font-semibold">{b.n}</span>
                    </span>
                    <span className="text-xs text-ink-400">{b.s}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-brand-50">
                <div className="h-full w-[62%] rounded-full bg-brand" />
              </div>
              <p className="mt-2 text-center text-xs text-ink-400">Position 4 · Live update every 2 sec</p>
            </div>

            <div className="absolute -bottom-6 -left-4 z-20 animate-floaty rounded-2xl bg-ink px-4 py-3 text-white shadow-xl [animation-delay:1.5s]">
              <p className="flex items-center gap-2 text-sm font-bold"><Clock size={16} className="text-sun" /> 1.5 hours saved</p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-t border-white/10 bg-brand-700/60 py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform">
            {[...areas, ...areas].map((a, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-lg font-bold text-white/60">
                {a} <span className="text-sun">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── STATS ───────────────── */}
      <section className="relative z-10 -mt-px bg-white">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-b-3xl border-x border-b border-ink/10 bg-ink/10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6 text-center sm:p-8">
                <p className="font-display text-3xl font-extrabold text-brand sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                <p className="text-xs text-ink-400">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── PROBLEM / SOLUTION ───────────────── */}
      <section className="section bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10"><Frown /></span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">What happens today?</h2>
            <ul className="mt-6 space-y-4 text-white/80">
              {[
                "1–2 hour lines during Eid, Diwali, Chhath and wedding season",
                "No idea how long the wait is — either stay or go back home",
                "The owner doesn't know who is coming or which barber is free",
                "The day's accounts live in a register and in memory",
              ].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-brand p-8 text-white sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sun text-ink"><Check /></span>
            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">With SevaSetu</h2>
            <ul className="mt-6 space-y-4 text-white/90">
              {[
                "A token from home, a live ETA and a push alert for your turn",
                "Fixed slot booking — up to 7 days ahead, with reminders",
                "Live queue, barbers and walk-ins on one screen for the salon",
                "An automatic daily report at 9 PM",
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check size={18} className="mt-0.5 shrink-0 text-sun" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────── LIVE DEMO ───────────────── */}
      <section id="demo" className="section relative overflow-hidden bg-brand-50">
        <div className="bg-dots pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <SectionHeading
            center
            eyebrow="Try it live"
            title={<>How does the queue work? <span className="text-brand">Try it yourself.</span></>}
            text="Tap the barber buttons in the Salon App panel — Rahul's token, ETA and alert on the phone change in real time. Exactly like the real app."
          />
          <div className="mt-14">
            <LiveQueueDemo />
          </div>
        </div>
      </section>

      {/* ───────────────── CUSTOMER FEATURES ───────────────── */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="For customers" title="Your haircut wait, now on your phone." />
            <Link href="/how-it-works" className="btn-outline self-start lg:self-auto">See the full flow <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {customerFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} tone={i % 2 ? "sun" : "brand"} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── STEPS ───────────────── */}
      <section className="section bg-brand text-white">
        <div className="container-x">
          <SectionHeading light center eyebrow="5 steps" title="From finding a salon to the chair" />
          <ol className="mt-14 grid gap-5 md:grid-cols-5">
            {customerSteps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-colors hover:bg-white/10">
                <span className="font-display text-5xl font-extrabold text-stroke">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
                {i < customerSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-sun md:block" size={22} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── MENU ───────────────── */}
      <section className="section bg-white">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Rate card"
              title={<>Patna's <span className="text-brand">honest</span> menu</>}
              text="Every salon sets its own prices and durations. These are starting templates — the app shows each salon's actual menu."
            />
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold">
              <span className="rounded-full bg-brand px-3 py-1 text-white">men</span>
              <span className="rounded-full bg-sun px-3 py-1 text-ink">kids</span>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-brand">unisex</span>
              <span className="rounded-full bg-ink px-3 py-1 text-white">women</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border-2 border-ink">
            {services.map((s, i) => {
              const tag = { men: "bg-brand text-white", kids: "bg-sun text-ink", unisex: "bg-brand-50 text-brand", women: "bg-ink text-white" }[s.tag];
              return (
                <div key={s.name} className={`flex items-center justify-between gap-4 px-5 py-4 sm:px-7 ${i % 2 ? "bg-brand-50/50" : "bg-white"}`}>
                  <div className="min-w-0">
                    <p className="font-display font-bold text-ink">{s.name}</p>
                    <p className="text-xs text-ink-400">{s.min} min</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`hidden rounded-full px-2.5 py-0.5 text-[10px] font-bold sm:inline ${tag}`}>{s.tag}</span>
                    <span className="font-display text-lg font-extrabold text-brand">{s.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── DOWNLOAD ───────────────── */}
      <section id="download" className="section scroll-mt-24 bg-brand text-white relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              eyebrow="Download"
              title={<>Two apps. <span className="text-sun">One mission.</span></>}
              text="Join the line with the Customer App. Run the line with the Salon App. Both on Android and iOS — launching with the Patna pilot."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#" className="btn bg-white text-ink hover:bg-sun"><Play size={18} fill="currentColor" /> Google Play</a>
              <a href="#" className="btn border-2 border-white/40 text-white hover:bg-white hover:text-ink"><Apple size={18} /> App Store</a>
            </div>
            <p className="mt-4 text-xs text-white/60">Store links go live at launch.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 text-ink">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white"><Smartphone /></span>
              <h3 className="mt-4 text-xl font-extrabold">Consumer App</h3>
              <p className="mt-2 text-sm text-ink-600">Nearby salons, queue join, slot booking, alerts and reviews.</p>
            </div>
            <div className="rounded-3xl border-2 border-ink bg-sun p-6 text-ink shadow-pop">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-sun"><Store /></span>
              <h3 className="mt-4 text-xl font-extrabold">Salon App</h3>
              <p className="mt-2 text-sm text-ink/80">Owner, manager and barber — live queue, walk-ins, earnings.</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
