import { profile, education, extras } from "@/data/profile";
import Reveal from "../ui/Reveal";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-400/70" /> About
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Backend first,
            <br />
            <span className="text-zinc-500">product minded.</span>
          </h2>
          <div className="card mt-10 p-6">
            <div className="flex items-start gap-4">
              <img src={education.logo} alt="" className="h-12 w-12 rounded-xl bg-white p-1.5 object-contain" />
              <div>
                <p className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500">
                  <GraduationCap className="h-3.5 w-3.5" /> Education
                </p>
                <p className="mt-1 font-semibold text-white">{education.school}</p>
                <p className="text-sm text-zinc-400">{education.degree}</p>
                <p className="mt-1 text-sm text-brand-300">{education.gpa}</p>
                <p className="text-xs text-zinc-500">{education.period} · {education.location}</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-5 text-sm text-zinc-400">
              {education.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-zinc-200 sm:text-xl">{profile.summary}</p>
          </Reveal>
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className="mt-6 leading-relaxed text-zinc-400">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {extras.map((e) => (
                <div key={e.label} className="card p-4">
                  <dt className="text-xs uppercase tracking-wider text-zinc-500">
                    {e.label} {e.year && <span className="text-zinc-600">· {e.year}</span>}
                  </dt>
                  <dd className="mt-2 text-sm text-zinc-300">{e.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
