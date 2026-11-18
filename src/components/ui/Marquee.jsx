/** Infinite horizontal ticker. Pure CSS, pauses on hover. */
export default function Marquee({ items, reverse = false }) {
  const row = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {row.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
