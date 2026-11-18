import { services } from "@/data/profile";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Spotlight from "../ui/Spotlight";
import { serviceIcons } from "../ui/Icons";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What I do"
          title="Capabilities"
          desc="End-to-end engineering across the stack, with deepest expertise in backend, data and applied AI."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <Spotlight className="card h-full p-7 transition-colors duration-300 hover:border-white/15 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-500/25 to-transparent text-brand-300 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-zinc-600">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
