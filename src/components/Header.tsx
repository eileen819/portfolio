import useMounted from "@/hooks/useMounted";
import useSectionScroll from "@/hooks/useSectionScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header({ handleMobile }: { handleMobile: () => void }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const { handleHome, handleSectionNav } = useSectionScroll();

  if (!mounted) return null;

  const currentTheme = theme === "system" ? (resolvedTheme ?? "light") : theme;
  const isDark = currentTheme === "dark";

  return (
    <header className="z-10 sticky top-0 h-16 bg-white/70 dark:bg-black/60 border-b border-black/10 dark:border-white/10 backdrop-blur transition-colors duration-300 ease-in-out">
      <nav className="max-w-5xl mx-auto h-full flex justify-between items-center">
        <div className="px-4 font-bold text-3xl">Hyeonju Hwang</div>
        <div className="hidden md:flex gap-4">
          <button
            onClick={handleHome}
            className="font-medium cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Home
          </button>
          <button
            onClick={() => handleSectionNav("about")}
            className="font-medium cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          >
            About
          </button>
          <button
            onClick={() => handleSectionNav("skills")}
            className="font-medium cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Skills
          </button>
          <button
            onClick={() => handleSectionNav("projects")}
            className="font-medium cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Projects
          </button>
          <button
            onClick={() => handleSectionNav("contact")}
            className="font-medium cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
          >
            Contact
          </button>
          <div className="hidden md:flex md:gap-4 p-4">
            <button
              className="flex items-center justify-center cursor-pointer transition duration-300 ease-in-out"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="moon"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon color="#fbc531" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="sun"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun color="#fbc531" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            {theme === "system" && <span>🖥️</span>}
          </div>
        </div>
        <button
          onClick={handleMobile}
          className="ml-auto pr-4 md:hidden flex items-center justify-center cursor-pointer"
        >
          <Menu />
        </button>
      </nav>
    </header>
  );
}
