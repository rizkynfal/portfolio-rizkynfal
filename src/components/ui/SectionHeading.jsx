import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, desc, align = "left", action }) {
  const center = align === "center";
  return (
    <Reveal
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        center ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={center ? "max-w-2xl" : "max-w-2xl"}>
        {eyebrow && (
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand-400/70" />
            {eyebrow}
          </span>
        )}
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {desc && <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{desc}</p>}
      </div>
      {action}
    </Reveal>
  );
}
