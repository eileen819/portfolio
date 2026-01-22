import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="sm:h-[300] scroll-mt-16 sm:flex sm:justify-between sm:items-center p-6"
    >
      <div className="mx-auto border-2 border-gray-500 w-44 h-44 sm:w-64 sm:h-64 rounded-full shrink-0 overflow-hidden mb-4 sm:mr-6">
        <Image
          src="/avatar.png"
          alt="avatar"
          width={350}
          height={350}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col sm:text-right">
        <h1 className="text-4xl font-bold sm:text-5xl mb-2">황현주</h1>
        <span className="text-xl sm:text-xl mb-4">프론트엔드 개발자</span>
        <p className="">
          사용자에게 자연스럽고 직관적인 경험을 제공하기 위해 데이터 흐름과
          인터랙션을 세밀하게 설계합니다. React, TypeScript, Firebase를 활용해
          실무 수준의 서비스를 직접 구현하며 구조적 사고를 익혀왔습니다. 기능의
          완성도와 사용자의 편의성을 함께 고려하는 프론트엔드 개발을 지향합니다.
        </p>
      </div>
    </section>
  );
}
