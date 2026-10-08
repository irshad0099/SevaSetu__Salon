"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const emptyForm = { name: "", phone: "", salon: "", area: "", chairs: "1-2", message: "" };
const input = "mt-1.5 w-full rounded-2xl border-2 border-ink/10 bg-white px-4 py-3 text-sm outline-none transition-[border-color,box-shadow] focus:border-brand focus:ring-4 focus:ring-brand/15";

function Err({ msg }) {
  return msg ? <p className="mt-1 text-xs font-semibold text-red-600">{msg}</p> : null;
}

/**
 * Lead form — there is no backend yet, so submit just shows the success state.
 * Once the backend is ready, add the API call in handleSubmit (marked TODO).
 */
export default function LeadForm({ variant = "salon" }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name";
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = "Enter a valid 10-digit mobile number";
    if (variant === "salon" && !form.salon.trim()) e.salon = "Enter your salon name";
    if (variant === "contact" && !form.message.trim()) e.message = "Write a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // TODO: call the backend here once it is ready, e.g.
    // await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, variant }) });
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-brand-50 p-10 text-center">
        <CheckCircle2 size={56} className="text-brand" />
        <h3 className="mt-4 text-2xl font-extrabold text-ink">Thank you, {form.name.trim().split(" ")[0]}!</h3>
        <p className="mt-2 max-w-sm text-ink-600">
          Our team will call you on <strong>+91 {form.phone}</strong> within 24 hours.
        </p>
        <button onClick={() => { setStatus("idle"); setForm(emptyForm); }} className="btn-outline mt-6">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-semibold text-ink">
        Your name
        <input className={input} value={form.name} onChange={set("name")} placeholder="Sameer" autoComplete="name" />
        <Err msg={errors.name} />
      </label>
      <label className="text-sm font-semibold text-ink">
        Mobile number
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 mt-[3px] -translate-y-1/2 text-sm text-ink-400">+91</span>
          <input className={`${input} pl-12`} value={form.phone} onChange={set("phone")} inputMode="numeric" maxLength={10} placeholder="98XXXXXX10" autoComplete="tel-national" />
        </div>
        <Err msg={errors.phone} />
      </label>

      {variant === "salon" ? (
        <>
          <label className="text-sm font-semibold text-ink">
            Salon name
            <input className={input} value={form.salon} onChange={set("salon")} placeholder="Sameer Hair Studio" />
            <Err msg={errors.salon} />
          </label>
          <label className="text-sm font-semibold text-ink">
            Area
            <input className={input} value={form.area} onChange={set("area")} placeholder="Boring Road, Patna" />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-semibold text-ink">How many chairs?</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {["1-2", "3-5", "6+"].map((c) => (
                <label key={c} className={`cursor-pointer rounded-2xl border-2 py-3 text-center text-sm font-bold transition-colors ${form.chairs === c ? "border-ink bg-sun" : "border-ink/10 hover:border-ink/30"}`}>
                  <input type="radio" name="chairs" value={c} checked={form.chairs === c} onChange={set("chairs")} className="sr-only" />
                  {c}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      ) : (
        <label className="text-sm font-semibold text-ink sm:col-span-2">
          Message
          <textarea className={`${input} min-h-32`} value={form.message} onChange={set("message")} placeholder="Tell us how we can help…" />
          <Err msg={errors.message} />
        </label>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-sun sm:col-span-2 disabled:opacity-60">
        {status === "loading" ? "Sending…" : <><Send size={16} /> {variant === "salon" ? "Request a callback" : "Send message"}</>}
      </button>
      <p className="text-center text-xs text-ink-400 sm:col-span-2">
        By submitting, you allow SevaSetu to call or SMS you. No spam, promise.
      </p>
    </form>
  );
}
