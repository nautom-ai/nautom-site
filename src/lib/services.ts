export interface ServiceItem {
  title: string;
  text: string;
}

// Fuente única de «Qué incluye» el servicio: la home lo renderiza en «Qué hacemos»
// y de acá salen los Service del JSON-LD Organization y la lista de /llms.txt.
export const SERVICES: ServiceItem[] = [
  {
    title: "Sistemas de gestión a medida",
    text: "La aplicación donde tu equipo trabaja todos los días, hecha para cómo opera tu empresa.",
  },
  {
    title: "Agentes de IA",
    text: "Leen información y resuelven una tarea concreta. En Altis Viajes, uno lee el PDF del mayorista y arma la cotización, y una persona la confirma.",
  },
  {
    title: "Automatizaciones",
    text: "Conectan las herramientas que ya usás para que nadie copie datos a mano de un lado a otro.",
  },
  {
    title: "Tableros",
    text: "Los números de la operación en un solo lugar y al día, para ver rápido dónde algo no cierra.",
  },
];
