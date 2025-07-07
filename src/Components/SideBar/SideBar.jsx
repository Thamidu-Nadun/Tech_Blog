import {
  Book,
  Home,
  LayoutGrid,
  Menu,
  MessageCircle,
  Podcast,
  Smartphone,
} from 'lucide-react';
import React from 'react';
import {NavLink} from 'react-router-dom';

function SideBar({isSideBarOpen, setIsSideBarOpen}) {
  const links = [
    {
      name: 'Dashboard',
      Icon: Home,
      path: '',
    },
    {
      name: 'Articles',
      Icon: Book,
      path: '/articles',
    },
    {
      name: 'Podcasts',
      Icon: Podcast,
      path: '/podcasts',
    },
    {
      name: 'Web',
      Icon: Smartphone,
      path: '/stories',
    },
    {
      name: 'Categories',
      Icon: LayoutGrid,
      path: '/categories',
    },

    {
      name: 'Comments',
      Icon: MessageCircle,
      path: '/comments',
    },
  ];
  return (
    <div
      className={`${isSideBarOpen ? 'w-64' : 'w-24'} h-screen overflow-y-scroll fixed bg-gradient-to-b from-gray-950 to-gray-800/40 transition-all duration-300 ease-in-out`}
    >
      <nav
        className={`mx-2 my-2 pt-5 flex flex-col ${isSideBarOpen ? '' : 'items-center'}`}
      >
        <li className="text-2xl flex items-center justify-between px-4 text-white font-bold font-mono">
          {isSideBarOpen ? 'Dashboard' : ''}
          <Menu
            onClick={() => setIsSideBarOpen (!isSideBarOpen)}
            size={24}
            className="hover:text-amber-500 cursor-pointer transition-all duration-300 ease-in-out"
          />
        </li>
        <ul className="mt-5 flex flex-col gap-y-4 items-start px-2 text-center text-lg">
          {links.map ((link, index) => (
            <NavLink
              to={'/dashboard' + link.path}
              end
              key={index}
              className={({isActive}) =>
                `${isActive ? 'bg-amber-500' : ''} px-6 py-3 flex items-center gap-2 rounded-2xl  w-full hover:bg-amber-500/90`}
            >
              <link.Icon />
              {isSideBarOpen ? link.name : ''}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
