import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/profile";
import Gallery from "../ui/Gallery";
import Reveal from "../ui/Reveal";

export default function CaseStudy({ project }) {
  const withPages = projects.filter((p) => p.href);
  const idx = withPages.findIndex((p) => p.slug === project.slug);
  const next = withPages[(idx + 1) % withPages.length];

  const info = [
    ["Company", project.company],
    ["Role", project.role],
    ["Timeline", project.period],
    ["Stack", project.stack.slice(0, 3).join(", ")],
  ].filter(([, v]) => v);

  const groups = project.highlightGroups ?? [
    { title: null, items: project.highlights ?? [] },
  ];
  let n = 0; // running number across groups

  return (
    <article className="pb-24 pt-32 sm:pt-40">
      <div className="container-x">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">{project.category}</span>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-400">
                {project.summary}
              </p>
            </div>
            {project.logo && (
              <img
                src={project.logo}
                alt=""
                className="h-16 w-auto max-w-[160px] rounded-xl border border-white/10 bg-white/10 object-contain p-2"
              />
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl
            className={`card mt-10 grid grid-cols-2 gap-6 p-6 ${info.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}
          >
            {info.map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-wider text-zinc-500">
                  {k}
                </dt>
                <dd className="mt-1 text-sm text-zinc-200">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {project.gallery?.length > 0 && (
          <Reveal delay={0.15} className="mt-10">
            <Gallery
              images={project.gallery}
              title={project.title}
              portrait={project.portrait}
              accent={project.accent}
            />
          </Reveal>
        )}

        {project.metrics && (
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {m.value}
                  </p>
                  <p className="mt-2 text-sm text-zinc-400">{m.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {project.description && (
          <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <span className="eyebrow">The product</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                About {project.title}
              </h2>
            </Reveal>
            <div className="space-y-5">
              {project.description.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="leading-relaxed text-zinc-300 sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {project.loop && (
          <section className="mt-16">
            <Reveal>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                How the engine works
              </h3>
            </Reveal>
            <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {project.loop.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.08} as="li">
                  <div
                    className={`card relative h-full p-6 ${s.mine ? "border-brand-400/40 bg-brand-500/[0.06]" : ""}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm text-zinc-600">
                        0{i + 1}
                      </span>
                      {i < project.loop.length - 1 ? (
                        <ArrowRight className="h-4 w-4 text-zinc-600" />
                      ) : (
                        <span className="text-xs text-zinc-600">↺ loop</span>
                      )}
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold text-white">
                      {s.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {s.text}
                    </p>
                    {s.mine && (
                      <span className="mt-4 inline-flex rounded-full bg-brand-500/20 px-2.5 py-1 text-xs font-medium text-brand-200">
                        My work · {s.mine}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>
        )}

        <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <span className="eyebrow">My contribution</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white">
              What I did
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="space-y-10">
            {groups.map((g) => (
              <div key={g.title ?? "all"}>
                {g.title && (
                  <Reveal>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {g.title}
                    </h3>
                  </Reveal>
                )}
                <ol className="space-y-4">
                  {g.items.map((h, i) => {
                    n += 1;
                    return (
                      <Reveal key={h} delay={i * 0.05} as="li">
                        <div className="card flex gap-5 p-5">
                          <span className="w-6 shrink-0 font-display text-sm font-semibold text-brand-300">
                            {String(n).padStart(2, "0")}
                          </span>
                          <p className="leading-relaxed text-zinc-300">{h}</p>
                        </div>
                      </Reveal>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {next && next.slug !== project.slug && (
          <Reveal className="mt-20">
            <Link
              href={next.href}
              className="card group flex items-center justify-between p-8 transition-colors hover:border-white/20"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Next project
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-zinc-400 transition-transform group-hover:translate-x-2 group-hover:text-white" />
            </Link>
          </Reveal>
        )}
      </div>
    </article>
  );
}
