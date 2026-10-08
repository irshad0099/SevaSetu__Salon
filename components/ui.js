import Link from "next/link";
import {
  Ban, BarChart3, BellRing, CalendarClock, Circle, Coffee, Heart, ListOrdered,
  MapPin, PhoneCall, Scissors, Star, Timer, UserPlus, Wallet,
} from "lucide-react";

// Only the icons named in lib/content.js — add new ones here when content uses them.
const Icons = {
  Ban, BarChart3, BellRing, CalendarClock, Circle, Coffee, Heart, ListOrdered,
  MapPin, PhoneCall, Scissors, Star, Timer, UserPlus, Wallet,
};

export function Icon({ name, size = 22, className = "" }) {
  const C = Icons[name] || Icons.Circle;
  return <C size={size} className={className} aria-hidden="true" />;
}

export function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={light ? "eyebrow bg-white/10 text-sun" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2 className={`h2 mt-4 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/75" : "text-ink-600"}`}>{text}</p>}
    </div>
  );
}

export function FeatureCard({ icon, title, text, tone = "brand" }) {
  const tones = {
    brand: "bg-brand text-white",
    sun: "bg-sun text-ink",
  };
  return (
    <div className="card group relative overflow-hidden transition-transform duration-200 hover:-translate-y-1">
      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tones[tone]} transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110`}>
        <Icon name={icon} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{text}</p>
    </div>
  );
}

export function PageHero({ eyebrow, title, highlight, text, children }) {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="glow glow-mint -left-40 -top-10 h-[28rem] w-[28rem]" />
      <div className="glow glow-sun -bottom-24 -right-32 h-[28rem] w-[28rem]" />
      <div className="container-x relative py-16 text-center sm:py-24">
        <span className="eyebrow bg-white/10 text-sun">{eyebrow}</span>
        <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-sun">{highlight}</span>}
        </h1>
        {text && <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-sun p-8 shadow-pop sm:p-12 lg:p-16">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-brand/10" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Say bye to the line. <br className="hidden sm:block" />
                <span className="text-brand">Say hi to the salon.</span>
              </h2>
              <p className="mt-4 max-w-xl text-ink/80">
                Customer? Download the app. Salon owner? Register in 10 minutes — onboarding is free during the pilot.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Link href="/#download" className="btn bg-brand text-white hover:bg-brand-700 sm:w-auto lg:w-64">Get the Customer App</Link>
              <Link href="/for-salons#register" className="btn border-2 border-ink bg-white text-ink hover:bg-ink hover:text-white sm:w-auto lg:w-64">Register your salon</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
