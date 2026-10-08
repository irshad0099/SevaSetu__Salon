import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/ui";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "Contact",
  description: "Talk to the SevaSetu team — salon onboarding, support or partnerships.",
};

const channels = [
  { icon: Phone, label: "Call us", value: "+91 99999 99999", href: "tel:+919999999999", tone: "bg-brand text-white" },
  { icon: MessageCircle, label: "WhatsApp", value: "Start a chat", href: "https://wa.me/919999999999", tone: "bg-sun text-ink" },
  { icon: Mail, label: "Email", value: "hello@sevasetu.in", href: "mailto:hello@sevasetu.in", tone: "bg-brand text-white" },
  { icon: MapPin, label: "Office", value: "Boring Road, Patna", href: "#", tone: "bg-sun text-ink" },
];

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk," highlight="over chai or a call." text="Salon onboarding, customer support or partnerships — our Patna team replies within 24 hours." />

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map(({ icon: I, ...c }) => (
              <a key={c.label} href={c.href} className="group flex items-center gap-4 rounded-3xl border-2 border-ink/10 bg-white p-5 transition-[border-color,box-shadow] duration-150 hover:border-ink hover:shadow-pop">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${c.tone}`}><I size={22} /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-widest text-ink-400">{c.label}</span>
                  <span className="block font-display text-lg font-bold text-ink group-hover:text-brand">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
          <div className="rounded-[2rem] border-2 border-ink bg-white p-6 shadow-pop sm:p-10">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Send a message</h2>
            <p className="mt-1 text-sm text-ink-600">We'll call you back.</p>
            <div className="mt-6"><LeadForm variant="contact" /></div>
          </div>
        </div>
      </section>

      <section id="faq" className="section scroll-mt-24 bg-brand-50">
        <div className="container-x max-w-4xl">
          <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12"><FAQ items={faqs} /></div>
        </div>
      </section>
    </>
  );
}
