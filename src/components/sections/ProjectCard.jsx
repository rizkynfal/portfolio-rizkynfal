"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, featured = false }) {
  const {
    title,
    category,
    summary,
    stack,
    cover,
    accent,
    href,
    period,
    portrait,
  } = project;
  const Wrapper = href ? Link : "div";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="h-full"
    >
      <Wrapper
        href={href ?? undefined}
        className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-white/20"
      >
        <div
          className={`relative overflow-hidden bg-gradient-to-br ${accent} ${
            featured ? "aspect-[16/9]" : "aspect-[16/10]"
          }`}
        >
          {cover ? (
            <img
              src={cover}
              alt={`${title} preview`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full p-5 transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                portrait ? "object-contain" : "object-contain sm:p-8"
              }`}
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-4xl font-semibold text-white/80">
                {title}
              </span>
            </div>
          )}
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-ink-900/70 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-semibold text-white">
                {title}
              </h3>
              {period && (
                <p className="mt-0.5 text-xs text-zinc-500">{period}</p>
              )}
            </div>
            {href && (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:border-white/30 group-hover:bg-white group-hover:text-ink-900">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            )}
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
            {summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.slice(0, 4).map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
