interface LegalSectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
}

/** Section block for legal pages (/privacidad, /terminos) — same typography as /about */
export default function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <div className="pipe-copper">
        <h2 className="text-xl md:text-2xl font-mono font-bold text-white">
          {title}
        </h2>
      </div>
      <div className="text-muted text-base md:text-lg leading-relaxed space-y-4 [&_a]:text-primary [&_a:hover]:underline [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
