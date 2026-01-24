import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="md:h-[300] scroll-mt-16 md:flex md:justify-between md:items-center mt-6"
    >
      <div className="mx-auto border-2 border-gray-200 w-48 h-48 md:w-64 md:h-64 rounded-full shrink-0 overflow-hidden mb-4 md:mr-6">
        <Image
          src="/images/avatar.png"
          alt="avatar"
          width={350}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col text-center md:text-right">
        <h1 className="text-4xl font-bold md:text-5xl mb-2">황현주</h1>
        <span className="text-xl md:text-xl mb-4">프론트엔드 개발자</span>
        <p className="mb-6">
          사용자에게 자연스럽고 직관적인 경험을 제공하기 위해 데이터 흐름과
          인터랙션을 세밀하게 설계합니다. React, Next.js, Typescript를 활용해
          실무 수준의 서비스를 직접 구현하며 구조적 사고를 익혀왔습니다. 기능의
          완성도와 사용자의 편의성을 함께 고려하는 프론트엔드 개발을 지향합니다.
        </p>
      </div>
    </section>
  );
}
