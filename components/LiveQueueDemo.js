"use client";

import { useMemo, useState } from "react";
import { BellRing, PhoneCall, RotateCcw, UserPlus, Scissors, CheckCircle2 } from "lucide-react";

const MY_TOKEN = 7;

const initialTokens = [
  { no: 3, name: "Amit", service: "Haircut", min: 20, barber: "Raju", status: "in_service" },
  { no: 4, name: "Walk-in", service: "Shave", min: 15, barber: "Sameer", status: "in_service" },
  { no: 5, name: "Sonu", service: "Haircut + Beard", min: 30, barber: "Any", status: "waiting" },
  { no: 6, name: "Walk-in", service: "Beard trim", min: 10, barber: "Raju", status: "waiting" },
  { no: 7, name: "You (Rahul)", service: "Haircut + Beard", min: 30, barber: "Any", status: "waiting" },
  { no: 8, name: "Vikas", service: "Kids haircut", min: 15, barber: "Any", status: "waiting" },
];

const walkinPool = [
  { service: "Haircut", min: 20 },
  { service: "Head massage", min: 15 },
  { service: "Beard trim", min: 10 },
];

/** Simplified version of the PRD 11.4 ETA formula (any-barber token) */
function computeEta(tokens) {
  const mine = tokens.find((t) => t.no === MY_TOKEN);
  if (!mine || mine.status !== "waiting") return 0;
  const inService = tokens.filter((t) => t.status === "in_service");
  const ahead = tokens.filter((t) => t.status === "waiting" && t.no < MY_TOKEN);
  const remainingInService = inService.reduce((s, t) => s + Math.round(t.min / 2), 0); // assume half done
  const total = remainingInService + ahead.reduce((s, t) => s + t.min, 0);
  return Math.max(1, Math.round(total / 2)); // 2 barbers active
}

export default function LiveQueueDemo() {
  const [tokens, setTokens] = useState(initialTokens);
  const [nextNo, setNextNo] = useState(9);
  const [log, setLog] = useState(["9:42 AM · Got token #7 — position 3"]);

  const mine = tokens.find((t) => t.no === MY_TOKEN);
  const eta = useMemo(() => computeEta(tokens), [tokens]);
  const position = tokens.filter((t) => t.status === "waiting" && t.no <= MY_TOKEN).length;
  const waiting = tokens.filter((t) => t.status === "waiting").length;
  const done = tokens.filter((t) => t.status === "completed").length;

  const state = !mine ? "done" : mine.status === "in_service" ? "called" : eta <= 10 ? "soon" : "waiting";

  const pushLog = (msg) => setLog((l) => [msg, ...l].slice(0, 4));

  function callNext(barber) {
    const next = tokens.map((t) => ({ ...t }));
    const current = next.find((t) => t.status === "in_service" && t.assigned === barber) ||
      next.find((t) => t.status === "in_service" && t.barber === barber);
    if (current) current.status = "completed";
    // preferred line first, then common line (PRD 11.4 call-next order)
    const candidate =
      next.find((t) => t.status === "waiting" && t.barber === barber) ||
      next.find((t) => t.status === "waiting" && t.barber === "Any");
    if (candidate) {
      candidate.status = "in_service";
      candidate.assigned = barber;
      pushLog(`${barber} called token #${candidate.no}`);
    } else {
      pushLog(`${barber}'s line is empty`);
    }
    setTokens(next);
  }

  function addWalkin() {
    const w = walkinPool[nextNo % walkinPool.length];
    setTokens((p) => [...p, { no: nextNo, name: "Walk-in", ...w, barber: "Any", status: "waiting" }]);
    pushLog(`Counter walk-in → token #${nextNo}`);
    setNextNo((n) => n + 1);
  }

  function reset() {
    setTokens(initialTokens);
    setNextNo(9);
    setLog(["Demo reset · Token #7 — position 3"]);  }

  const ringPct = mine && mine.status === "waiting" ? Math.max(8, 100 - eta * 2) : 100;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Phone: Consumer App */}
      <div className="relative mx-auto w-full max-w-[320px]">
        <div className="glow glow-brand -inset-16 -z-10" />
        <div className="rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-2xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-white">
            <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-ink" />
            <div className="px-5 pb-6 pt-4">
              <div className="flex items-center justify-between text-xs text-ink-400">
                <span>Sameer Hair Studio</span>
                <span className="inline-flex items-center gap-1 font-semibold text-brand">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-live" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
                  </span>
                  Live
                </span>
              </div>
              <p className="text-[11px] text-ink-400">Boring Road, Patna · 1.2 km</p>

              <div
                className={`mt-4 rounded-2xl p-3 text-xs font-semibold transition-colors ${
                  state === "called"
                    ? "bg-brand text-white"
                    : state === "soon"
                    ? "bg-sun text-ink"
                    : state === "done"
                    ? "bg-ink text-white"
                    : "bg-brand-50 text-brand"
                }`}
                role="status"
                aria-live="polite"
              >
                <span className="inline-flex items-center gap-2">
                  <BellRing size={14} />
                  {state === "called" && "Token 7 — please come to the chair!"}
                  {state === "soon" && "Your turn is coming up — time to leave"}
                  {state === "waiting" && "Relax at home, we'll let you know"}
                  {state === "done" && "Service complete — please rate us ⭐"}
                </span>
              </div>

              <div className="relative mx-auto mt-5 grid h-40 w-40 place-items-center">
                <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
                  <circle cx="60" cy="60" r="52" stroke="#e6f2ef" strokeWidth="10" fill="none" />
                  <circle
                    cx="60" cy="60" r="52" fill="none" strokeWidth="10" strokeLinecap="round"
                    stroke="#004D40"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - ringPct / 100)}
                    style={{ transition: "stroke-dashoffset .6s ease" }}
                  />
                </svg>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ink-400">Token</p>
                  <p className="font-display text-5xl font-extrabold text-brand">#{MY_TOKEN}</p>
                  <p className="text-xs font-semibold text-ink-600">
                    {state === "waiting" || state === "soon" ? `~${eta} min` : state === "called" ? "Now serving" : "Done"}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-brand-50 p-2">
                  <p className="font-display text-lg font-extrabold text-brand">{mine?.status === "waiting" ? position : "—"}</p>
                  <p className="text-[10px] text-ink-400">Position</p>
                </div>
                <div className="rounded-xl bg-sun-50 p-2">
                  <p className="font-display text-lg font-extrabold text-ink">{waiting}</p>
                  <p className="text-[10px] text-ink-400">Waiting</p>
                </div>
                <div className="rounded-xl bg-ink/[0.05] p-2">
                  <p className="font-display text-lg font-extrabold text-ink">{done}</p>
                  <p className="text-[10px] text-ink-400">Done</p>
                </div>
              </div>
              <p className="mt-4 text-center text-[11px] text-ink-400">Haircut + Beard · Any barber · ₹140</p>
            </div>
          </div>
        </div>
      </div>

      {/* Salon App controls */}
      <div className="rounded-3xl border-2 border-ink bg-white p-5 shadow-pop sm:p-7">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">Salon App · Live queue</p>
            <h3 className="mt-1 text-xl font-extrabold text-ink">Try it from the barber's side</h3>
          </div>
          <button onClick={reset} className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 hover:bg-ink hover:text-white" aria-label="Reset demo">
            <RotateCcw size={16} />
          </button>
        </div>

        <ul className="mt-5 max-h-64 space-y-2 overflow-y-auto pr-1">
          {tokens
            .filter((t) => t.status !== "completed")
            .map((t) => (
              <li
                key={t.no}
                className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm ${
                  t.no === MY_TOKEN ? "bg-sun-50 ring-2 ring-sun" : "bg-ink/[0.03]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`grid h-9 w-9 place-items-center rounded-xl font-display font-extrabold ${t.status === "in_service" ? "border-2 border-ink bg-sun text-ink" : "bg-brand text-white"}`}>
                    {t.no}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="block text-xs text-ink-400">{t.service} · {t.min} min</span>
                  </span>
                </span>
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${t.status === "in_service" ? "bg-sun text-ink" : "bg-brand-50 text-brand"}`}>
                  {t.status === "in_service" ? `✂ ${t.assigned || t.barber}` : t.barber === "Any" ? "Any barber" : t.barber}
                </span>
              </li>
            ))}
        </ul>

        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          <button onClick={() => callNext("Raju")} className="btn bg-brand text-white hover:bg-brand-700 !px-3">
            <PhoneCall size={15} /> Raju: Next
          </button>
          <button onClick={() => callNext("Sameer")} className="btn bg-ink text-white hover:bg-brand-700 !px-3">
            <Scissors size={15} /> Sameer: Next
          </button>
          <button onClick={addWalkin} className="btn border-2 border-ink bg-sun text-ink hover:bg-sun-600 !px-3">
            <UserPlus size={15} /> Walk-in
          </button>
        </div>

        <div className="mt-5 rounded-2xl bg-ink p-4 font-mono text-[11px] text-white/80">
          {log.map((l, i) => (
            <p key={i} className={i === 0 ? "text-sun" : ""}>
              <CheckCircle2 size={11} className="mr-1.5 inline" />
              {l}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
