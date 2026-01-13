import {MenuIcon} from 'lucide-react';
import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
  const mobileMenuRef = useRef (null);
  const paths = [
    {name: 'Home', url: '/'},
    {name: 'Category', url: ''},
    {name: 'About', url: ''},
    {name: 'RSS', url: ''},
    {name: 'dashboard', url: '/dashboard'},
  ];

  useEffect (
    () => {
      const handleClickOutside = event => {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains (event.target)
        ) {
          setIsMobileMenuOpen (false);
        }
      };

      if (isMobileMenuOpen) {
        document.addEventListener ('mousedown', handleClickOutside);
      } else {
        document.removeEventListener ('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener ('mousedown', handleClickOutside);
      };
    },
    [isMobileMenuOpen]
  );

  return (
    <nav className="h-20 sticky top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center 
    justify-between z-50 text-white transition-all bg-black/70 backdrop-blur-md">
      <Link to="/" className="text-3xl text-orange-400">
        Techno
      </Link>

      <ul className="md:flex hidden items-center gap-10 text-md">
        {paths.map ((link, idx) => (
          <Link
            key={idx}
            to={link.url}
            className="hover:text-orange-400 transition"
            href="#"
          >
            {link.name.toUpperCase ()}
          </Link>
        ))}

      </ul>

      <div className="flex gap-3">
        <Link
          to={'/login'}
          className="px-4 py-2 rounded-2xl text-white hidden md:block border border-orange-400 hover:scale-105 transition-all duration-300"
        >
          Log In
        </Link>
      </div>
      <button
        aria-label="menu-btn"
        type="button"
        className="inline-block md:hidden active:scale-90 transition"
        onClick={() => setIsMobileMenuOpen (true)}
      >
        <MenuIcon className="w-6 h-6 text-white" />
      </button>

      {/* Mobile Slide-in Menu */}

      <div
        className={`fixed top-22 inset-0 z-40 md:hidden transition-opacity duration-500 ease-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} bg-black/50`}
      >
        <div
          ref={mobileMenuRef}
          className={`flex justify-center w-3/4 h-[80vh] rounded-r-2xl items-center bg-slate-900/95 text-white backdrop-blur-md border-r border-white/10 p-6 transform transition-transform duration-1000 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex-col text-center">
            <ul className="flex flex-col space-y-4 text-lg">
              {paths.map ((link, idx) => (
                <Link
                  key={idx}
                  to={link.url}
                  className="text-white hover:text-orange-400 transition"
                  href="#"
                >
                  {link.name.toUpperCase ()}
                </Link>
              ))}
            </ul>
            <Link
              to={'/login'}
              className="bg-linear-to-r from-orange-500 to-orange-400 text-white mt-6 hover:from-orange-600 hover:to-orange-500 
                active:scale-95 flex items-center justify-center transition-all px-6 py-2 rounded-xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
