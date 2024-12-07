import About from "@/components/about";
import { AnimatedTestimonialsDemo } from "@/components/animatedtestemonialsDemo";
import Cta from "@/components/cta";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import Register from "@/components/register";
import Service from "@/components/service";
import Subfooter from "@/components/subfooter";
import Team from "@/components/team";
import { Testemonial } from "@/components/testemonial";
import WhyChoose from "@/components/whyChoose";

export default function Home() {

  return (
    <div>
      <Hero/>
      <Cta/>
      <About/>
      <Service/>
      <WhyChoose/>
      <Projects/>
      <Team/>
      <Testemonial/>
      <Register/>
      <AnimatedTestimonialsDemo/>
      <Subfooter/>
    </div>
  );
}
