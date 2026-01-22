import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const projects = [
  {
    id: 1,
    url: "/projects/twircle",
    image: "/images/projects/twircle_image.png",
    title: "🌐 twircle",
    description: "Firebase 기반 실시간 SNS 서비스",
    tags: ["React", "Typescript", "Firebase"],
    links: {
      gitHub: "https://github.com/eileen819/twircle",
      demo: "https://twircle.vercel.app",
    },
  },
  {
    id: 2,
    url: "/projects/newflix",
    image: "/images/projects/newflix_image.png",
    title: "🎬 Newflix",
    description: "TMDB API 기반 영화/TV 정보 서비스",
    tags: ["React", "Typescript", "TMDB API"],
    links: {
      gitHub: "https://github.com/eileen819/newflix",
      demo: "https://newflix-eileen.vercel.app/",
    },
  },
  {
    id: 3,
    url: "/projects/dnd",
    image: "/images/projects/dnd_image.png",
    title: "📋 dnd To-Do List",
    description: "일정 관리를 위한 Kanban 스타일 보드 앱",
    tags: ["React", "Typescript", "@hello-pangea/dnd", "Recoil"],
    links: {
      gitHub: "https://github.com/eileen819/dnd-todo",
      demo: "https://eileen819.github.io/dnd-todo/",
    },
  },
  {
    id: 4,
    url: "/projects/coin-list",
    image: "/images/projects/coinlist_image.png",
    title: "📈 Coin-List",
    description: "실시간 암호화폐 시세 조회 서비스",
    tags: ["React", "Typescript", "Tanstack Query", "Recoil"],
    links: {
      gitHub: "https://github.com/eileen819/coin-list",
      demo: "https://eileen819.github.io/coin-list/",
    },
  },
  {
    id: 5,
    url: "/projects/moment-app",
    image: "/images/projects/momentApp_image.png",
    title: "📝 Moment App",
    description: "바닐라 JS 기반 일정 관리 앱",
    tags: ["HTML", "CSS", "Javascript"],
    links: {
      gitHub: "https://github.com/eileen819/moment-app",
      demo: "https://moment-of-today.netlify.app/",
    },
  },
];

export default function Projects() {
  const router = useRouter();

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-gray-300 mb-6"
    >
      <h2 className="text-3xl font-semibold my-4">프로젝트</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.id}
            onClick={() => {
              router.push(p.url);
            }}
            className="bg-white h-full rounded-md border border-gray-200 shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          >
            <div className="flex justify-center items-start h-50 border-b border-gray-200 overflow-hidden">
              <Image src={p.image} alt="" width={500} height={500} />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-1">{p.title}</h4>
              <p className="text-sm mb-4">{p.description}</p>
              <div className="mb-3 flex flex-wrap gap-1">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-700 rounded-lg bg-amber-200 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-x-1">
                <Link
                  href={p.links.gitHub}
                  target="_blank"
                  className="text-center text-sm text-gray-100 rounded-full bg-gray-900 px-2 py-1 hover:bg-gray-500 transition-colors duration-300 ease-in-out"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.stopPropagation();
                  }}
                >
                  Github
                </Link>
                <Link
                  href={p.links.demo}
                  target="_blank"
                  className="text-sm text-gray-50 rounded-full bg-blue-500 px-2 py-1 hover:bg-blue-400 transition-colors duration-300 ease-in-out"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.stopPropagation();
                  }}
                >
                  Demo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
