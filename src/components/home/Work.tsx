import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { Alias, ArrowIcon, Label } from "./ui";

export default function Work() {
  return (
    <section id="que-hacemos" aria-labelledby="work-title" className="on-light relative bg-surface py-16 text-ink md:py-24">
      <div className="wrap">
        <div className="grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12">
          <Label tone="surface" copper className="md:pt-2">01 / Qué hacemos</Label>
          <h2 id="work-title" className="max-w-[25ch] font-mono text-[clamp(27px,3vw,40px)] leading-tight font-bold tracking-[-0.035em]">
            Tu operación, con menos trabajo manual.
          </h2>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {SERVICES.map(({ title, text }, i) => (
            <li key={title} className="border-t border-line pt-5">
              <span className="font-mono text-xs text-accent-700" aria-hidden="true">0{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{text}</p>
            </li>
          ))}
        </ul>
        <div id="como-trabajamos" className="relative mt-10 flex flex-col gap-4 border-t border-line pt-6 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-10">
          <Alias id="how" />
          <p className="max-w-[65ch] text-[15px] leading-relaxed text-ink-2">
            Entendemos tu operación, elegimos por dónde empezar y lo construimos con vos. Después, seguimos mejorándolo.
          </p>
          <Link href="/about" className="group inline-flex min-h-11 shrink-0 items-center gap-3 text-sm font-semibold underline underline-offset-4">
            Cómo trabajamos <ArrowIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
