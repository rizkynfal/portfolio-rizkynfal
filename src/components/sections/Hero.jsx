"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "lucide-react";
import { profile, stats } from "@/data/profile";
import CountUp from "../ui/CountUp";

const words = ["backend systems", "Gen AI features", "ERP integrations", "mobile apps"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  const [w, setW] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setW((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] animate-float rounded-full bg-brand-600/25 blur-[120px]" />
        <div className="absolute right-[-10%] top-40 h-[380px] w-[380px] animate-float-slow rounded-full bg-sky-500/15 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <motion.div initial={reduce ? false : "hidden"} animate="show">
          <motion.div variants={fadeUp} custom={0} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-emerald-400" />
              Open to new opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            I engineer
            <span className="relative block h-[1.12em] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={words[w]}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-gradient absolute left-0 top-0 whitespace-nowrap pb-2"
                >
                  {words[w]}
                </motion.span>
              </AnimatePresence>
            </span>
            that teams can rely on.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Hi, I&apos;m <span className="text-zinc-100">{profile.name}</span> — a {profile.role.toLowerCase()} building
            high-throughput microservices, RAG pipelines and enterprise integrations for clients
            across Indonesia and Australia.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn-primary">
              View my work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm"
        >
          <div className="card relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-500/20 via-ink-800 to-ink-900">
            <img
              src={profile.photoAlt}
              alt={profile.name}
              className="absolute bottom-0 left-1/2 w-[115%] max-w-none -translate-x-1/2"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-900 to-transparent" />
          </div>
          <FloatingBadge className="-left-6 top-10 sm:-left-12" delay={0.6}>
            <span className="text-lg">⚡</span>
            <div>
              <p className="text-xs text-zinc-400">ERP API</p>
              <p className="text-sm font-semibold text-white">20s → 5s</p>
            </div>
          </FloatingBadge>
          <FloatingBadge className="-right-4 bottom-16 sm:-right-10" delay={0.8}>
            <span className="text-lg">🤖</span>
            <div>
              <p className="text-xs text-zinc-400">Shipping</p>
              <p className="text-sm font-semibold text-white">RAG in production</p>
            </div>
          </FloatingBadge>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="container-x mt-20">
        <div className="card grid grid-cols-2 divide-white/[0.06] lg:grid-cols-4 lg:divide-x">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 sm:p-8"
            >
              <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-zinc-300">{s.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{s.note}</p>
            </motion.div>
          ))}
        </div>
        <a
          href="#about"
          className="mx-auto mt-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 transition hover:text-zinc-300"
        >
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function FloatingBadge({ children, className, delay }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        y: { delay, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/80 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
