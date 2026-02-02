import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t scroll-mt-16  border-gray-300 mb-14"
    >
      <h2 className="text-3xl font-semibold my-4">Contact</h2>
      <div className="mx-6 space-y-2">
        <div className="flex items-center">
          <Github size={20} />
          <Link
            href="https://github.com/eileen819"
            target="_blank"
            className="font-medium ml-3 hover:text-blue-600 transition-colors duration-300 ease-in-out"
          >
            GitHub
          </Link>
        </div>
        <div className="flex items-center">
          <Mail size={20} />
          <Link
            href="mailto:eileen.hj.88@gmail.com"
            className="ml-3 font-medium hover:text-blue-600 transition-colors duration-300 ease-in-out"
          >
            E-mail
          </Link>
        </div>
      </div>
    </section>
  );
}
