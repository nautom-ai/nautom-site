import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import { Alias, SectionHead } from "./ui";

// Preguntas: acordeón nativo (<details>) y JSON-LD FAQPage desde la misma fuente,
// src/lib/faq.ts. El JSON-LD va sólo en la home.

export default function Faq() {
  return (
    <section
      id="preguntas"
      aria-labelledby="faq-title"
      className="on-light bg-surface py-sec text-ink"
    >
      <Alias id="faq" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="wrap">
        <SectionHead
          tone="surface"
          label="Preguntas"
          title="Preguntas frecuentes"
          titleId="faq-title"
        >
          <div className="mt-[clamp(28px,3vw,40px)] max-w-[860px] border-t border-line">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <details key={q} open={i === 0} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-[21px] text-[17px] leading-[1.4] font-semibold [&::-webkit-details-marker]:hidden">
                  {q}
                  <span
                    aria-hidden="true"
                    className="-mt-px flex-none font-mono text-[22px] leading-none font-normal text-accent-700"
                  >
                    <span className="group-open:hidden">+</span>
                    <span className="hidden group-open:inline">–</span>
                  </span>
                </summary>
                <p className="max-w-[70ch] pr-10 pb-6 text-base leading-[1.65] text-ink-2 max-sm:pr-0">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </SectionHead>
      </div>
    </section>
  );
}
