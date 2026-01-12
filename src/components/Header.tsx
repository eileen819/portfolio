export default function Header() {
  const handleSectionNav = async (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <div className="h-full flex items-center gap-2.5">
      <div className="px-2.5">황현주</div>
      <nav className="flex-1 flex gap-2.5">
        <button
          onClick={() => handleSectionNav("about")}
          className="cursor-pointer"
        >
          About
        </button>
        <button
          onClick={() => handleSectionNav("skills")}
          className="cursor-pointer"
        >
          Skills
        </button>
        <button
          onClick={() => handleSectionNav("projects")}
          className="cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => handleSectionNav("contact")}
          className="cursor-pointer"
        >
          Contact
        </button>
      </nav>
      <div className="p-4">mode</div>
    </div>
  );
}
