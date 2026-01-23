import useMounted from "@/hooks/useMounted";
import useSectionScroll from "@/hooks/useSectionScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

interface IMobileMenu {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: IMobileMenu) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();
  const { handleHome, handleSectionNav } = useSectionScroll();

  if (!mounted) return null;

  const currentTheme = theme === "system" ? (resolvedTheme ?? "light") : theme;
  const isDark = currentTheme === "dark";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          className="z-20 fixed inset-0 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <motion.aside
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute right-0 inset-y-0 w-50 bg-gray-50 dark:bg-gray-800 shadow-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="p-2 m-2 dark:text-gray-200 cursor-pointer"
            >
              <X />
            </button>
            <nav className="flex flex-col items-center gap-2 mt-2">
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
              <div className="p-2">
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
            </nav>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
