import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/#que-hacemos", label: "Qué hacemos" },
  { href: "/casos", label: "Casos" },
  { href: "/productos", label: "Productos" },
  { href: "/productos#whatsapp", label: "WhatsApp Business" },
  { href: "/about", label: "Nosotros" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/contact", label: "Contacto" },
];

// Meta revisa estas URLs y los datos del prestador de abajo (verificación de Tech Provider).
const legalLinks = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/terminos", label: "Términos y condiciones" },
  { href: "/privacidad#eliminacion", label: "Eliminación de datos" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-12 pb-9 text-sm text-muted">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <Link href="/" aria-label="Nautom, inicio" className="flex min-h-[44px] items-center">
            <Image
              src="/logo-white-copper.svg"
              alt="Nautom"
              width={138}
              height={14}
              className="h-3.5 w-auto"
            />
          </Link>

          <nav aria-label="Pie">
            <ul className="flex flex-wrap gap-x-[22px]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://www.linkedin.com/company/nautom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nautom en LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded border border-foreground/16 transition-colors hover:text-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
        </div>

        {/* Legal + provider identity + copyright */}
        <div className="mt-6 grid gap-1.5 border-t border-foreground/16 pt-5">
          <ul className="flex flex-wrap gap-x-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-[1.6]">
            Nautom es un servicio prestado por Ignacio Ramognino · CUIT
            20-39244092-6 · Ciudad Autónoma de Buenos Aires, Argentina ·{" "}
            <a
              href="mailto:nacho@nautom.com"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              nacho@nautom.com
            </a>
          </p>
          <p className="text-xs leading-[1.6]">
            Copyright &copy; {new Date().getFullYear()} Nautom | Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
