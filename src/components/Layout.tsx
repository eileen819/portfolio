import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dark:text-gray-100 min-h-screen">
      <Header handleMobile={() => setOpen(true)} />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <main className="max-w-4xl mx-auto px-6">{children}</main>
      <Footer />
    </div>
  );
}
