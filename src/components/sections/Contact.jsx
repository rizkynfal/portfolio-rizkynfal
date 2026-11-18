"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { socialLinks } from "../footer/Footer";
import Reveal from "../ui/Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.socials.email}`;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-600/30 via-ink-800 to-ink-900 px-6 py-16 text-center sm:px-16 sm:py-24">
          <div aria-hidden className="bg-grid absolute inset-0 opacity-60" />
          <div aria-hidden className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 animate-float rounded-full bg-brand-500/30 blur-[100px]" />
          <div className="relative">
            <span className="eyebrow justify-center">Contact</span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-zinc-400">
              I&apos;m open to full-time roles and freelance engagements in backend, Gen AI and mobile
              development. Replies usually within a day.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.socials.email}`} className="btn-primary">
                Email me <ArrowUpRight className="h-4 w-4" />
              </a>
              <button onClick={copy} className="btn-ghost" aria-live="polite">
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : profile.socials.email}
              </button>
              <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost">
                <Download className="h-4 w-4" /> CV
              </a>
            </div>

            <div className="mt-10 flex justify-center gap-3">
              {socialLinks.slice(1).map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
