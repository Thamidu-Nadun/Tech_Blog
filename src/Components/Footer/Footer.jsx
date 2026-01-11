import {Github, Linkedin} from 'lucide-react';
import React from 'react';
import {Link} from 'react-router-dom';

function Footer () {
  const quick_links = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Blog', href: '/blog'},
    {name: 'Contact', href: '/contact'},
  ];
  const categories = [
    {name: 'React', href: '#'},
    {name: 'NextJs', href: '#'},
    {name: 'Tailwindcss', href: '#'},
    {name: 'Javascript', href: '#'},
  ];
  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com/thamidu-nadun',
      icon: <Github size={20} />,
    },
    {
      name: 'Linkedin',
      href: 'https://linkedin.com/in/thamidu',
      icon: <Linkedin size={20} />,
    },
  ];
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full mt-30">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-orange-500/30">
        <div className="max-w-96">
          <h2 className="text-2xl text-orange-500">Techno</h2>
          <p className="mt-6 text-sm text-gray-500">
            Welcome to Techno, your go-to blog for the latest in web development
            and programming. Stay updated with tutorials, tips, and industry news
            to enhance your coding skills.
          </p>
          <div className="flex items-center gap-2 mt-3">
            {socialLinks.map ((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-orange-300 transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between gap-10">
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-200 mb-5">Quick Links</h2>
            <ul className="text-sm text-gray-500 list-none space-y-2 pl-2">
              {quick_links.map ((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-orange-300 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-200 mb-5">Categories</h2>
            <div className="text-sm text-gray-500 space-y-2 list-none">
              <ul className="text-sm text-gray-500 space-y-2 list-none pl-2">
                {categories.map ((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.href}
                      className="hover:text-orange-300 transition-colors duration-300"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
