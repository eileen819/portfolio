import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>황현주 | Frontend Developer</title>
        <meta
          name="description"
          content="React · Next.js · Firebase 기반 웹 서비스를 설계하고 구현하는 프론트엔드 개발자 포트폴리오입니다."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="황현주 | Frontend Developer" />
        <meta
          property="og:description"
          content="React · Next.js · Firebase 기반 웹 서비스를 설계하고 구현하는 프론트엔드 개발자 포트폴리오입니다."
        />
      </Head>
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
