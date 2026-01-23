import { useRouter } from "next/router";

export default function useSectionScroll() {
  const router = useRouter();

  const handleHome = () => {
    if (router.pathname === "/") {
      window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

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

  return { router, handleHome, handleSectionNav };
}
