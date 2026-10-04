"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ClientLogos from "@/components/ClientLogos";
import ProductCards from "@/components/ProductCards";
import WhatsAppIntegration from "@/components/WhatsAppIntegration";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CaseTabs from "@/components/CaseTabs";
import SectionTitle from "@/components/SectionTitle";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQ_ITEMS, faqJsonLd } from "@/lib/faq";
import TeamSection from "@/components/TeamSection";
import HowWeWork from "@/components/HowWeWork";
// FloatingUIFragments preserved but no longer rendered in hero
// import FloatingUIFragments from "@/components/FloatingUIFragments";

export default function Home() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[calc(100vh-4rem)] flex items-center justify-center border-b border-card-border overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight text-foreground">
              Tu equipo de{" "}
              <br className="hidden md:block" />
              tecnología{" "}
              <span className="text-primary">AI-first.</span>
            </h1>
            <p className="mt-4 md:mt-6 text-muted text-base md:text-xl max-w-2xl mx-auto">
              Desarrollamos plataformas propias y proyectos a medida para
              empresas que necesitan moverse rápido y con inteligencia.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#products"
                className="bg-primary hover:bg-accent-700 text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Ver productos
              </Link>
              <Link
                href="/contact"
                className="border border-card-border hover:border-primary text-white font-medium px-8 py-3 rounded-full transition-colors"
              >
                Empezar un proyecto
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.a
          href="#clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 scroll-hint-bounce flex flex-col items-center gap-1"
          aria-label="Scroll hacia abajo"
        >
          <span className="text-muted opacity-50 font-sans" style={{ fontSize: "11px" }}>
            Explorar
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted opacity-50"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.a>
      </section>

      {/* ── 2. Client Logos ───────────────────────────────────────── */}
      <section id="clients" className="py-10 md:py-16 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted mb-10 text-sm uppercase tracking-widest"
          >
            Ya confían en nosotros
          </motion.p>
          <ClientLogos />
        </div>
      </section>

      {/* ── 3. Products (NEW — highlight section) ────────────────── */}
      <section id="products" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Nuestros productos"
            subtitle="Plataformas que construimos, operamos y evolucionamos"
            className="mb-12"
          />
          <ProductCards />
        </div>
      </section>

      {/* ── 3b. Integraciones con WhatsApp Business ──────────────── */}
      <section id="whatsapp" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Integraciones con WhatsApp Business"
            subtitle="Tus clientes te escriben por WhatsApp. Nuestras plataformas responden y avisan en nombre de tu negocio."
            className="mb-12"
          />
          <WhatsAppIntegration />
        </div>
      </section>

      {/* ── 4. Services / Cases (RENOVATED) ──────────────────────── */}
      <section id="cases" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              title="Proyectos a medida"
              subtitle="Lo que construimos para nuestros clientes — resultados reales con soluciones potenciadas por IA"
            />
            <Link
              href="/contact"
              className="hidden md:block bg-primary hover:bg-accent-700 text-white font-medium px-8 py-3 rounded-full transition-colors text-center whitespace-nowrap"
            >
              Contáctanos
            </Link>
          </div>
          <CaseTabs />
        </div>
      </section>

      {/* ── 5. Testimonials ──────────────────────────────────────── */}
      <section className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle
              title="Lo que dicen nuestros clientes"
              subtitle="Equipos que confiaron en nosotros para automatizar y escalar sus operaciones"
            />
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── 6. Nosotros ──────────────────────────────────────────── */}
      <section id="about" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Quiénes somos"
            subtitle="Dos personas, un estudio, enfoque AI-first"
            className="mb-12"
          />
          <TeamSection />
        </div>
      </section>

      {/* ── 7. Cómo trabajamos ───────────────────────────────────── */}
      <section id="how" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Cómo trabajamos"
            subtitle="Stack moderno, enfoque AI-first, entrega rápida"
            className="mb-12"
          />
          <HowWeWork />
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="py-10 md:py-20 border-b border-card-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Preguntas frecuentes"
            subtitle="Respuestas claras sobre cómo trabajamos"
            className="mb-12"
          />
          <FAQAccordion items={FAQ_ITEMS} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </div>
      </section>

      {/* ── 9. CTA final ─────────────────────────────────────────── */}
      <section className="py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl font-mono font-bold text-white mb-4">
              ¿Listo para automatizar tu operación?
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl mx-auto">
              Hablemos sobre cómo podemos ayudar a tu equipo
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-accent-700 text-white font-medium px-10 py-4 rounded-full text-lg transition-colors"
            >
              Empezar un proyecto
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
