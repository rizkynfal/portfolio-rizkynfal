import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "../ui/Icons";
import { Mail } from "lucide-react";

export const socialLinks = [
  { label: "Email", href: `mailto:${profile.socials.email}`, Icon: Mail },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "WhatsApp", href: profile.socials.whatsapp, Icon: WhatsappIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            © {new Date().getFullYear()} · {profile.role} · {profile.location}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
