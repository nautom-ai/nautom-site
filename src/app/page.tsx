import type { Metadata } from "next";
import HomeClear from "@/components/home/HomeClear";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeClear />;
}
