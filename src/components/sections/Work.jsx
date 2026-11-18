"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";

const filters = [
  { id: "all", label: "All" },
  {
    id: "backend",
    label: "Backend & AI",
    match: ["atlas", "adenco", "projectedai", "saunders", "gobill"],
  },
  {
    id: "mobile",
    label: "Mobile & Frontend",
    match: ["pei", "scc", "hazob", "invitee"],
  },
];

export default function Work({ limit }) {
  const [filter, setFilter] = useState("all");
  const list = useMemo(() => {
    const f = filters.find((x) => x.id === filter);
    const items = f.match
      ? projects.filter((p) => f.match.includes(p.slug))
      : projects;
    return limit ? items.slice(0, limit) : items;
  }, [filter, limit]);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies"
          desc="A few of the products I've helped build — from AI platforms to Play Store apps."
          action={
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    filter === f.id
                      ? "text-ink-900"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {filter === f.id && (
                    <motion.span
                      layoutId="work-filter"
                      className="absolute inset-0 -z-10 rounded-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {f.label}
                </button>
              ))}
            </div>
          }
        />

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {limit && (
          <div className="mt-12 flex justify-center">
            <Link href="/experiences" className="btn-ghost">
              See all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
