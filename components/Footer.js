import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/for-salons", label: "For Salons" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#download", label: "Download App" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/contact#faq", label: "FAQ" },
      { href: "/for-salons#register", label: "Partner with us" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/contact", label: "Privacy Policy" },
      { href: "/contact", label: "Terms of Service" },
      { href: "/contact", label: "Data deletion (DPDP)" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="glow glow-mint -right-40 -top-40 h-[28rem] w-[28rem] opacity-60" />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
            A live queue + appointment platform for barber shops and salons. Starting in Patna —
            <span className="font-semibold text-sun"> Book Your Time, Not The Queue.</span>
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-sun" /> Boring Road, Patna, Bihar</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-sun" /> +91 99999 99999</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-sun" /> hello@sevasetu.in</li>
          </ul>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-sun">{c.title}</h3>
            <ul className="mt-4 space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-sun">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} SevaSetu. Made with ❤ in Bihar.</p>
          <p>Salon pilot · Patna</p>
        </div>
      </div>
    </footer>
  );
}
