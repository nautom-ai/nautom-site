import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import { Alias, Label } from "./ui";

export default function Faq() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="on-light relative bg-surface pb-16 text-ink md:pb-24">
      <Alias id="faq" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
      <div className="wrap">
        <div className="grid gap-8 border-t border-line pt-12 md:grid-cols-[1fr_1.5fr] md:gap-16 md:pt-16">
          <div>
            <Label tone="surface" copper>04 / Antes de empezar</Label>
            <h2 id="faq-title" className="mt-4 max-w-[16ch] font-mono text-[clamp(27px,3vw,36px)] leading-tight font-bold tracking-[-0.035em]">Lo que querés saber.</h2>
          </div>
          <div className="border-t border-line">
            {FAQ_ITEMS.map(({ q, a }) => (
              <details key={q} name="preguntas" className="group border-b border-line">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 py-4 text-[15px] leading-relaxed font-medium [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden="true" className="flex-none font-mono text-xl font-normal text-accent-700 group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-[65ch] pr-6 pb-6 text-[15px] leading-relaxed text-ink-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
