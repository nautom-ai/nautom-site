"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  // La primera carga se ve sin esperar al JS; el fundido queda para las
  // navegaciones dentro del sitio. Sólo opacidad: un desplazamiento correría
  // los anclajes que llegan desde otra página.
  const firstLoad = useRef(true);
  useEffect(() => {
    firstLoad.current = false;
  }, []);

  return (
    <motion.main
      key={pathname}
      initial={firstLoad.current || reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      id="contenido"
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}
