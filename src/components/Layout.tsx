import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="dark:text-gray-100 min-h-screen">
      <header className="z-10 sticky top-0 h-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 ease-in-out">
        <Header />
      </header>
      <main className="max-w-4xl mx-auto px-6">{children}</main>
      <footer className="h-12 bg-gray-100 flex justify-center items-center">
        <Footer />
      </footer>
    </div>
  );
}
