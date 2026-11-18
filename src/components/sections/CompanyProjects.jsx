import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { companies, getProject } from "@/data/profile";
import Reveal from "../ui/Reveal";
import ProjectCard from "./ProjectCard";

export default function CompanyProjects({ id }) {
  const c = companies[id];
  const list = c.projects.map(getProject);
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-x">
        <Reveal>
          <Link href="/#experience" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Experience
          </Link>
          <span className="eyebrow mt-8 flex">Projects at</span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">{c.name}</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-400">{c.blurb}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
