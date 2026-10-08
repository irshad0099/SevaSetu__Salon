"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="divide-y divide-ink/10 rounded-3xl border-2 border-ink bg-white">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-bold text-ink sm:text-lg">{f.q}</span>
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-[transform,background-color] duration-200 ${isOpen ? "rotate-45 bg-sun" : "bg-brand-50 text-brand"}`}>
                <Plus size={18} />
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-relaxed text-ink-600 sm:px-7 sm:text-base">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
