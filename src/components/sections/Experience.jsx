"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { experiences } from "@/data/profile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const PREVIEW = 3;

export default function Experience() {
  const [tab, setTab] = useState(0);
  const exp = experiences[tab];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          desc="Enterprise delivery across ERP, AI platforms, supply chain and mobile — full-time, part-time and freelance."
        />

        <Reveal className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Company tabs */}
          <div role="tablist" aria-label="Companies" className="flex gap-2 overflow-x-auto lg:flex-col">
            {experiences.map((e, i) => (
              <button
                key={e.company}
                role="tab"
                aria-selected={tab === i}
                onClick={() => setTab(i)}
                className={`relative shrink-0 rounded-2xl px-5 py-4 text-left transition-colors ${
                  tab === i ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab === i && (
                  <motion.span
                    layoutId="exp-tab"
                    className="absolute inset-0 -z-10 rounded-2xl border border-white/10 bg-white/[0.05]"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <span className="block font-display font-semibold">{e.company}</span>
                <span className="mt-0.5 block text-xs text-zinc-500">
                  {e.roles.length} role{e.roles.length > 1 ? "s" : ""} · {e.roles.at(-1).period.split(" — ")[0]} – {e.roles[0].current ? "Now" : e.roles[0].period.split(" — ")[1]}
                </span>
              </button>
            ))}
          </div>

          {/* Roles */}
          <AnimatePresence mode="wait">
            <motion.div
              key={exp.company}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-6">
                <div className="max-w-xl">
                  <h3 className="font-display text-2xl font-semibold text-white">{exp.company}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{exp.about}</p>
                </div>
                <Link
                  href={exp.href}
                  className="inline-flex items-center gap-1 text-sm text-brand-300 hover:text-brand-200"
                >
                  Related projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <ol className="relative mt-8 space-y-10 border-l border-white/10 pl-6 sm:pl-8">
                {exp.roles.map((r) => (
                  <Role key={r.title + r.period} role={r} />
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function Role({ role }) {
  const [expanded, setExpanded] = useState(false);
  const shown = role.highlights.slice(0, PREVIEW);
  const rest = role.highlights.slice(PREVIEW);

  return (
    <li className="relative">
      <span
        className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-ink-900 sm:-left-[39px] ${
          role.current ? "animate-pulse-dot bg-emerald-400" : "bg-brand-400"
        }`}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h4 className="font-display text-lg font-semibold text-white">
          {role.title}{" "}
          <span className="text-sm font-normal text-zinc-500">· {role.type}</span>
        </h4>
        <p className="text-sm text-zinc-500">{role.period}</p>
      </div>
      <p className="text-xs text-zinc-600">{role.location}</p>

      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-300">
        {shown.map((h) => (
          <Bullet key={h}>{h}</Bullet>
        ))}
        <AnimatePresence initial={false}>
          {expanded &&
            rest.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto", transition: { delay: i * 0.04 } }}
                exit={{ opacity: 0, height: 0 }}
                className="flex gap-3 overflow-hidden"
              >
                <Dot />
                <span>{h}</span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {rest.length > 0 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-300 hover:text-brand-200"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show ${rest.length} more`}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {role.stack.map((s) => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </li>
  );
}

const Dot = () => <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />;
const Bullet = ({ children }) => (
  <li className="flex gap-3">
    <Dot />
    <span>{children}</span>
  </li>
);
