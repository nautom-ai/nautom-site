import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import SelectedWork from "@/components/home/SelectedWork";
import ProductIndex from "@/components/home/ProductIndex";
import Faq from "@/components/home/Faq";
import Closing from "@/components/home/Closing";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <SelectedWork />
      <ProductIndex />
      <Faq />
      <Closing />
    </>
  );
}
