import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="dark:text-gray-100 min-h-screen">
      <header className="z-10 sticky top-0 h-16 bg-white/70 dark:bg-black/60 border-b border-black/10 dark:border-white/10 backdrop-blur transition-colors duration-300 ease-in-out">
        <Header />
      </header>
      <main className="max-w-4xl mx-auto px-6">{children}</main>
      <footer className="h-12 flex justify-center items-center bg-gray-100 dark:bg-[#050505] border-t border-[#e5e7eb] dark:border-[#262626] text-zinc-600 dark:text-zinc-400">
        <Footer />
      </footer>
    </div>
  );
}
