import {MenuIcon} from 'lucide-react';
import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Navbar () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
  const mobileMenuRef = useRef (null);

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
    <nav className="h-20 w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 text-white transition-all sticky-top">
      <Link to="/" className="text-3xl text-orange-400">
        Techno
      </Link>

      <ul className="md:flex hidden items-center gap-10 text-md">
        <li>
          <a className="hover:text-orange-400 transition" href="#">Home</a>
        </li>
        <li>
          <a className="hover:text-orange-400 transition" href="#">Services</a>
        </li>
        <li>
          <a className="hover:text-orange-400 transition" href="#">Portfolio</a>
        </li>
        <li>
          <a className="hover:text-orange-400 transition" href="#">Pricing</a>
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-2xl text-white hidden md:block border border-orange-400 hover:scale-105 transition-all duration-300">
          Log In
        </button>
        <button className="px-4 py-2 rounded-2xl text-white hidden md:block bg-gradient-to-r from-orange-600 to-orange-400 hover:scale-105 transition-all duration-300">
          Sign Up
        </button>
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
      {isMobileMenuOpen &&
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex md:hidden">
          <div
            ref={mobileMenuRef}
            className={`flex justify-center items-center bg-white text-black w-3/4 h-screen p-6 transform transition-transform duration-1000 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="flex-col text-center">
              <ul className="flex flex-col space-y-4 text-lg">
                <li><a href="#" className="text-sm">Home</a></li>
                <li><a href="#" className="text-sm">Services</a></li>
                <li><a href="#" className="text-sm">Portfolio</a></li>
                <li><a href="#" className="text-sm">Pricing</a></li>
              </ul>
              <button
                type="button"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white mt-6 text-sm hover:from-orange-600 hover:to-orange-500 active:scale-95 transition-all w-40 h-11 rounded-full"
              >
                Get started
              </button>
            </div>
          </div>
        </div>}
    </nav>
  );
}

export default Navbar;
