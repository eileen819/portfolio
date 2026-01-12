import { ReactNode } from "react";
import Header from "./Header";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-blue-300">
      <header className="sticky top-0 h-12 bg-white border border-amber-950">
        <Header />
      </header>
      <main className="">{children}</main>
      <footer className="h-12">footer</footer>
    </div>
  );
}
