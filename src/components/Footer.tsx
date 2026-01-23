export default function Footer() {
  return (
    <footer className="h-12 flex justify-center items-center bg-gray-100 dark:bg-[#050505] border-t border-[#e5e7eb] dark:border-[#262626] text-zinc-600 dark:text-zinc-400">
      <div className="space-x-2">
        <span>&copy; {new Date().getFullYear()} 황현주</span>
        <span>|</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
