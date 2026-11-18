import { skills } from "@/data/profile";
import SectionHeading from "../ui/SectionHeading";
import Marquee from "../ui/Marquee";
import Reveal from "../ui/Reveal";

export default function Skills() {
  const all = Object.values(skills).flat();
  const half = Math.ceil(all.length / 2);
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tech stack"
          desc="Tools I use in production day to day."
        />
      </div>
      <div className="space-y-3">
        <Marquee items={all.slice(0, half)} />
        <Marquee items={all.slice(half)} reverse />
      </div>
      <div className="container-x mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={(i % 4) * 0.05}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{group}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{items.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
