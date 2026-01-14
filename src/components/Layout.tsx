import { ReactNode } from "react";
import Header from "./Header";
import { ThemeProvider } from "next-themes";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="dark:text-gray-100 min-h-screen bg-blue-300">
      <header className="sticky top-0 h-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ease-in-out">
        <Header />
      </header>
      <main className="max-w-4xl mx-auto">{children}</main>
      <footer className="h-12 bg-amber-100">footer</footer>
    </div>
  );
}
