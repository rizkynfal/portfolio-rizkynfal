"use client";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Lightweight image gallery with crossfade, arrows, thumbnails and autoplay. */
export default function Gallery({ images, title, portrait = false, accent = "" }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;
  const go = useCallback((d) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go, count]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className={`card relative overflow-hidden bg-gradient-to-br ${accent} ${
          portrait ? "aspect-[4/5] sm:aspect-[16/10]" : "aspect-[16/10]"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="absolute inset-0 h-full w-full object-contain p-4 sm:p-8"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-900/70 p-2 text-white backdrop-blur transition hover:bg-ink-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-ink-900/70 p-2 text-white backdrop-blur transition hover:bg-ink-900"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      {count > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition ${
                i === index ? "border-brand-400" : "border-white/10 opacity-50 hover:opacity-100"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
