import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <About />
      <section id="skills" className="bg-pink-300 h-[300] scroll-mt-16">
        Skills
      </section>
      <section id="projects" className="bg-yellow-300 h-[300] scroll-mt-16">
        Projects
      </section>
      <section id="contact" className="bg-gray-300 h-[300] scroll-mt-16">
        Contact
      </section>
    </div>
  );
}
