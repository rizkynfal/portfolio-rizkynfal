"use client";
import { motion, useReducedMotion } from "framer-motion";

/** Fades + lifts children into view once, when scrolled into the viewport. */
export default function Reveal({ children, delay = 0, y = 24, className = "", as = "div" }) {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
