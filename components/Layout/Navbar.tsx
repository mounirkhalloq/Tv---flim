import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center">
            <Image src="/icon.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-xl font-bold">TV Film</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/">
            <a className="hover:text-main transition">Home</a>
          </Link>
          <Link href="/movies">
            <a className="hover:text-main transition">Movies</a>
          </Link>
          <Link href="/tv">
            <a className="hover:text-main transition">TV Shows</a>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-gray-800 text-white">
          <ul className="space-y-4 px-4 py-6">
            <li>
              <Link href="/">
                <a className="block hover:text-main transition">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/movies">
                <a className="block hover:text-main transition">Movies</a>
              </Link>
            </li>
            <li>
              <Link href="/tv">
                <a className="block hover:text-main transition">TV Shows</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
