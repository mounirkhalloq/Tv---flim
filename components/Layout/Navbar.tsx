import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Cn from 'classnames';

import { NavbarLink, Search } from '@/components';

const Navbar = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className={Cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isShrink ? 'bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <Link href="/">
          <a className="text-2xl font-bold text-white">TV FILM</a>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-4">
          <NavbarLink href="/" label="All" />
          <NavbarLink href="/movie" label="Movie" />
          <NavbarLink href="/tv" label="TV" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Search Component */}
        <div className="hidden sm:block">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
