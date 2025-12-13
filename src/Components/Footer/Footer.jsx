import { Github, Linkedin } from "lucide-react";
import React from "react";

function Footer() {
  const quick_links = [
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
  ];
  const categories = [
    { name: "React", href: "#" },
    { name: "NextJs", href: "#" },
    { name: "Tailwindcss", href: "#" },
    { name: "Javascript", href: "#" },
  ];
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full mt-30">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-orange-500/30">
        <div className="max-w-96">
          <h2 className="text-2xl text-orange-500">Techno</h2>
          <p className="mt-6 text-sm text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a href="#">
              <Github className="size-5 text-orange-300 hover:text-orange-400" />
            </a>
            <a href="#">
              <Linkedin className="size-5 text-orange-300 hover:text-orange-400" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">Quick Links</h2>
            <ul className="text-sm text-gray-500 space-y-2 list-none">
              {quick_links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900 mb-5">Categories</h2>
            <div className="text-sm text-gray-500 space-y-2 list-none">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="hover:text-orange-300 transition-colors duration-300"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2025 © @Nadun. All Right Reserved.
      </p>
    </footer>
  );
}

export default Footer;
