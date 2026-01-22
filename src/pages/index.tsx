import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <section
        id="contact"
        className="h-[300] border-t scroll-mt-16  border-gray-300 mb-6"
      >
        <h2 className="text-3xl font-semibold my-4">Contact</h2>
      </section>
    </div>
  );
}
