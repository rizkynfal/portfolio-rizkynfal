"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => setOpen(false), [pathname]);

  const href = (id) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-brand-500 via-fuchsia-400 to-sky-400"
      />
      <div className="container-x pt-3">
        <nav
          className={`flex items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-4 ${
            scrolled || open
              ? "border border-white/10 bg-ink-900/70 shadow-lg shadow-black/30 backdrop-blur-xl"
              : "border border-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Home"
          >
            <img
              src={profile.photo}
              alt=""
              className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
            />
            <span className="font-display text-sm font-semibold tracking-tight text-white">
              {profile.handle}
              <span className="text-brand-400">.</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={href(l.id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active === l.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={href("contact")}
              className="hidden items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-brand-300 sm:inline-flex"
            >
              Let&apos;s talk <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="rounded-full p-2 text-zinc-200 hover:bg-white/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-3xl border border-white/10 bg-ink-900/90 p-3 backdrop-blur-xl md:hidden"
            >
              {[...links, { id: "contact", label: "Contact" }].map((l, i) => (
                <motion.a
                  key={l.id}
                  href={href(l.id)}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i }}
                  className="block rounded-2xl px-4 py-3 text-base text-zinc-200 hover:bg-white/5"
                >
                  {l.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
