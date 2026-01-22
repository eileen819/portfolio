import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <section id="projects" className="bg-yellow-300 h-[300] scroll-mt-16">
        Projects
      </section>
      <section id="contact" className="bg-gray-300 h-[300] scroll-mt-16">
        Contact
      </section>
    </div>
  );
}
