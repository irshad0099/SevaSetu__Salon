import Link from "next/link";

export default function Logo({ light = false }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="SevaSetu Salon home">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl border-2 border-ink bg-sun shadow-[3px_3px_0_0_#222] transition-transform group-hover:-rotate-6">
        {/* bridge (setu) + scissors mark */}
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
          <path d="M3 22c4-9 22-9 26 0" stroke="#004D40" strokeWidth="3" strokeLinecap="round" />
          <path d="M9 22v-4M16 22v-6M23 22v-4" stroke="#004D40" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="16" cy="8" r="3" fill="#004D40" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold ${light ? "text-white" : "text-brand"}`}>SevaSetu</span>
        <span className={`block text-[10px] font-bold uppercase tracking-[0.3em] ${light ? "text-sun" : "text-ink-600"}`}>Salon</span>
      </span>
    </Link>
  );
}
