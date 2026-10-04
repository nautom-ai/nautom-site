import Link from "next/link";
import { Alias, ArrowIcon, Label } from "./ui";

const products = [
  { name: "Locker Company", description: "Lockers para eventos, del pago al retiro.", href: "/productos#p-loc" },
  { name: "Nautom Alojamientos", description: "Reservas, cobros y atención a huéspedes.", href: "/productos#p-alo" },
  { name: "Nautom Gestión", description: "La caja de tu PyME, en un solo panel.", href: "/productos#p-ges" },
];

export default function ProductIndex() {
  return (
    <section id="productos" aria-labelledby="products-title" className="on-light relative bg-surface py-16 text-ink md:py-24">
      <Alias id="products" />
      <div className="wrap grid gap-8 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div>
          <Label tone="surface" copper>03 / Productos digitales</Label>
          <h2 id="products-title" className="mt-4 max-w-[18ch] font-mono text-[clamp(27px,3vw,36px)] leading-tight font-bold tracking-[-0.035em]">También construimos productos.</h2>
          <p className="mt-5 max-w-[33ch] text-[15px] leading-relaxed text-ink-2">Plataformas que diseñamos, operamos y seguimos evolucionando.</p>
        </div>
        <div>
          <ul className="border-t border-line">
            {products.map(({ name, description, href }) => (
              <li key={name} className="border-b border-line">
                <Link href={href} className="group flex items-center justify-between gap-5 py-5">
                  <div><h3 className="text-lg font-semibold">{name}</h3><p className="mt-1.5 text-sm leading-relaxed text-ink-2">{description}</p></div>
                  <ArrowIcon size={20} />
                </Link>
              </li>
            ))}
          </ul>
          <p id="whatsapp" className="pt-5 text-sm leading-relaxed text-ink-2">
            <Link href="/productos#whatsapp" className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-ink">Conocé nuestras integraciones con WhatsApp Business</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
