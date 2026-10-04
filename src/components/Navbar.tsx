"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "./home/ui";

// Los links apuntan a secciones de la home; con "/#…" también funcionan desde las otras páginas.
const navLinks = [
  { href: "/#que-hacemos", label: "Servicios" },
  { href: "/#casos", label: "Casos" },
  { href: "/#productos", label: "Productos", mobileLabel: "Productos digitales" },
  { href: "/about", label: "Nosotros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Se cierra también al cambiar de página o de ancla (atrás, adelante o un link de afuera del menú).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  // El menú mobile se cierra al tocar fuera del panel o con Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/16 bg-background text-foreground">
      <div className="wrap flex min-h-[60px] items-center gap-2.5 sm:min-h-[72px] sm:gap-3 lg:gap-7">
        <Link href="/" aria-label="Nautom, inicio" className="mr-auto flex min-h-[44px] items-center">
          <Image
            src="/logo-white-copper.svg"
            alt="Nautom"
            width={148}
            height={15}
            preload
            className="h-3 w-auto sm:h-[15px]"
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-7 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block py-2.5 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="group inline-flex min-h-[42px] items-center gap-3 rounded bg-primary px-3 font-mono text-[13px] font-bold tracking-[0.01em] whitespace-nowrap text-background transition-colors hover:bg-accent-200 sm:min-h-[44px] sm:px-[18px] sm:text-sm"
        >
          Contanos tu caso
          <span className="hidden sm:contents">
            <ArrowIcon size={16} />
          </span>
        </Link>

        <div ref={menuRef} className="relative lg:hidden">
          <button
            ref={buttonRef}
            type="button"
            aria-label="Menú"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded border border-foreground/30 text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </button>
          {open && (
            <nav
              id="menu-movil"
              aria-label="Menú móvil"
              className="absolute top-[calc(100%+13px)] right-0 grid w-[min(280px,calc(100vw-32px))] rounded border border-foreground/30 bg-background p-1.5"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[46px] items-center rounded-xs px-3.5 text-base text-foreground hover:bg-foreground/6 [&+&]:border-t [&+&]:border-foreground/16"
                >
                  {link.mobileLabel ?? link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
