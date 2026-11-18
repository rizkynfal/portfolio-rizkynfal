import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center pt-32 text-center">
      <div>
        <span className="eyebrow">In progress</span>
        <h1 className="mt-4 font-display text-5xl font-semibold text-gradient sm:text-7xl">
          Coming soon
        </h1>
        <p className="mt-4 text-zinc-400">This page is under development.</p>
        <Link href="/" className="btn-ghost mt-8">
          Back home
        </Link>
      </div>
    </section>
  );
}
