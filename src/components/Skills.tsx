import Image from "next/image";

const images = [
  { name: "React", src: "/images/icons/react.png", alt: "react_icon" },
  { name: "Next.js", src: "/images/icons/nextjs_icon.png", alt: "nextjs_icon" },
  {
    name: "Typescript",
    src: "/images/icons/typescript.png",
    alt: "typescript_icon",
  },
  { name: "Recoil", src: "/images/icons/recoil.png", alt: "recoil_icon" },
  {
    name: "TanStack Query",
    src: "/images/icons/tanstack-query.png",
    alt: "tanstack-query_icon",
  },
  {
    name: "Firebase",
    src: "/images/icons/firebase-icon.png",
    alt: "firebase_icon",
  },
  {
    name: "Framer motion",
    src: "/images/icons/framer_motion.png",
    alt: "framer-motion_icon",
  },
  { name: "Sass", src: "/images/icons/sass.png", alt: "sass_icon" },
  { name: "Vercel", src: "/images/icons/vercel.png", alt: "vercel_icon" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-gray-300 mb-6">
      <h2 className="text-3xl font-semibold my-4">기술</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((i) => (
          <div
            key={i.name}
            className="bg-gray-100 rounded p-4 flex flex-col justify-center items-center shadow-md"
          >
            <Image
              src={i.src}
              alt={i.alt}
              width={50}
              height={50}
              className="mb-2"
            />
            <span className="text-center">{i.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
