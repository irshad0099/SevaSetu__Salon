import { Ticket, CalendarCheck, Footprints, AlarmClock, RotateCcw, UserX, Ban } from "lucide-react";
import { PageHero, SectionHeading, CTABand } from "@/components/ui";
import { customerSteps } from "@/lib/content";

export const metadata = {
  title: "How it works",
  description: "Live queue token, fixed appointment and counter walk-in — the full SevaSetu Salon flow.",
};

const modes = [
  {
    icon: Ticket,
    tone: "bg-brand text-white",
    title: "Live Queue Token",
    tag: "Most popular",
    points: ["Join remotely at salons within 5 km", "Token number + live ETA", "“Time to leave” alert when ETA ≤ 10 min", "No advance payment, cancel free anytime"],
  },
  {
    icon: CalendarCheck,
    tone: "bg-ink text-sun",
    title: "Fixed Appointment",
    tag: "For planners",
    points: ["Book a slot up to 7 days ahead", "Pick your barber or choose “Any”", "Reminders 60 and 15 min before", "Reschedule once; cancel free up to 1 hour before"],
  },
  {
    icon: Footprints,
    tone: "bg-sun text-ink",
    title: "Counter Walk-in",
    tag: "Customers without the app",
    points: ["Salon staff issue a token at the counter", "Same line, same ETA logic", "Phone optional", "0% commission for the salon"],
  },
];

const statusFlow = [
  { s: "Confirmed", c: "bg-white text-ink" },
  { s: "Called", c: "bg-brand-50 text-brand" },
  { s: "In service", c: "bg-sun text-ink" },
  { s: "Completed", c: "bg-brand text-white" },
];

const rules = [
  { icon: AlarmClock, title: "Customer late?", text: "The barber taps “Skip”. You get a push — and a 10-minute grace period." },
  { icon: RotateCcw, title: "Arrived? Recall", text: "The manager recalls you and you rejoin the line 2 positions later." },
  { icon: UserX, title: "Grace over", text: "The token automatically becomes a no-show. No recall after more than 2 skips." },
  { icon: Ban, title: "3 no-shows / 30 days", text: "Remote queue joins are blocked for 7 days — so the line stays fair for everyone." },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Three ways, one line,"
        highlight="zero confusion."
        text="Remote token, fixed appointment and counter walk-in — all three merge into one live queue, so the ETA stays accurate for everyone."
      />

      <section className="section bg-white">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {modes.map(({ icon: I, ...m }) => (
            <div key={m.title} className="flex flex-col rounded-3xl border-2 border-ink bg-white p-7 shadow-pop transition-transform hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl ${m.tone}`}><I size={26} /></span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand">{m.tag}</span>
              </div>
              <h2 className="mt-6 text-2xl font-extrabold">{m.title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-600">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="section bg-brand-50">
        <div className="container-x">
          <SectionHeading center eyebrow="Customer journey" title="Rahul's Sunday haircut" text="At Sameer Hair Studio on Boring Road — Haircut + Beard, with barber Raju." />
          <div className="mx-auto mt-14 max-w-3xl space-y-4">
            {customerSteps.map((s, i) => (
              <div key={s.title} className="flex gap-5 rounded-3xl bg-white p-6 shadow-card">
                <span className="font-display text-4xl font-extrabold leading-none text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-ink-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status machine */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading center eyebrow="A token's journey" title="Every token follows a clear status" text="And every status change reaches your phone within 2 seconds." />
          <div className="mt-12 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:justify-center">
            {statusFlow.map((st, i) => (
              <div key={st.s} className="flex flex-col items-center gap-3 md:flex-row">
                <span className={`w-full rounded-2xl border-2 border-ink px-6 py-4 text-center font-display text-lg font-extrabold md:w-auto ${st.c}`}>{st.s}</span>
                {i < statusFlow.length - 1 && <span className="font-display text-2xl text-ink-400 md:rotate-0 rotate-90">→</span>}
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink-400">Side exits: skipped · no-show · cancelled · expired</p>
        </div>
      </section>

      {/* Fair rules */}
      <section className="section bg-ink text-white">
        <div className="container-x">
          <SectionHeading light eyebrow="Fair-play rules" title={<>Running late? <span className="text-sun">Don't worry.</span></>} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map(({ icon: I, ...r }, i) => (
              <div key={r.title} className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${i % 2 ? "bg-brand text-white" : "bg-sun text-ink"}`}><I size={22} /></span>
                <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/70">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
