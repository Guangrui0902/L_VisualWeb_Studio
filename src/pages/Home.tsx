import { Hero } from "../components/Hero";
import { Showcase } from "../components/Showcase";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Proof } from "../components/Proof";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <Services />
      <Process />
      <Proof />
      <CTA />
    </>
  );
}
