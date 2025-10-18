import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Service";
import Skills from "@/components/sections/Skills";

export default function page() {
  return (
    <section>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </section>
  );
}
