"use client";

import { motion } from "framer-motion";
import { Smartphone, MessageSquare, Bot, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <Smartphone className="w-5 h-5 text-primary" />,
    title: "Tu número, tu cuenta",
    description:
      "Cada cliente conecta su propio número de WhatsApp Business. Gracias a la coexistencia, sigue usando la app en el celular como siempre.",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: "Avisos operativos",
    description:
      "La plataforma envía mensajes de plantilla aprobados: confirmaciones, recordatorios, links personales y novedades de cada reserva o compra.",
  },
  {
    icon: <Bot className="w-5 h-5 text-primary" />,
    title: "Asistente + tu equipo",
    description:
      "Un asistente responde las consultas de tus clientes en nombre de tu negocio y deriva a tu equipo cuando hace falta una persona.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "Datos solo para el servicio",
    description:
      "Los datos se usan únicamente para prestarle el servicio a cada cliente. Nunca se venden ni se usan para publicidad.",
  },
];

export default function WhatsAppIntegration() {
  return (
    <div className="space-y-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-muted text-lg leading-relaxed max-w-3xl"
      >
        Nautom actúa como proveedor de tecnología: construimos y operamos la
        integración con la plataforma de WhatsApp Business en nombre de cada
        negocio, dentro de los productos que desarrollamos para ellos.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-card-border bg-card"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-white font-bold mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
