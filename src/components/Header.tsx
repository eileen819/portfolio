import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleSectionNav = (id: string) => {
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? (resolvedTheme ?? "light") : theme;
  const isDark = currentTheme === "dark";

  return (
    <nav className="max-w-5xl mx-auto h-full flex justify-between items-center">
      <div className="px-4 font-bold text-3xl">Hyeonju Hwang</div>
      <div className="hidden sm:flex gap-4">
        <button
          onClick={() => handleSectionNav("about")}
          className="cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
        >
          About
        </button>
        <button
          onClick={() => handleSectionNav("skills")}
          className="cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
        >
          Skills
        </button>
        <button
          onClick={() => handleSectionNav("projects")}
          className="cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
        >
          Projects
        </button>
        <button
          onClick={() => handleSectionNav("contact")}
          className="cursor-pointer hover:text-gray-500 transition duration-300 ease-in-out"
        >
          Contact
        </button>
        <div className="hidden sm:flex sm:gap-4 p-4">
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
                  <Moon />
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
      <div className="ml-auto pr-4 sm:hidden">
        <button className="flex items-center justify-center cursor-pointer">
          <Menu />
        </button>
      </div>
    </nav>
  );
}
