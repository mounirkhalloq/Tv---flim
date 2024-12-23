import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour ouvrir/fermer le menu
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = () => {
    console.log(`Search Query: ${searchQuery}, Filter: ${activeFilter}`);
  };

  return (
    <header className="sticky top-0 w-full bg-black text-white shadow-lg z-50">
      {/* Barre principale */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-lg font-bold">TV FILM</div>

        {/* Menu Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white hover:text-gray-400 md:hidden"
        >
          {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div className="bg-gray-900 px-6 py-4 space-y-4 md:hidden">
          {/* Search */}
          <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="text-white hover:text-gray-400"
            >
              <AiOutlineSearch size={20} />
            </button>
          </div>

          {/* Menu All, Movie, TV */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'all'
                  ? 'bg-main text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('movie')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'movie'
                  ? 'bg-main text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Movie
            </button>
            <button
              onClick={() => setActiveFilter('tv')}
              className={`px-6 py-2 rounded-full ${
                activeFilter === 'tv'
                  ? 'bg-main text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              TV
            </button>
          </div>
        </div>
      )}

      {/* Menu fixe pour desktop */}
      <div className="hidden md:flex items-center justify-between px-6 py-4">
        {/* Search */}
        <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-full w-96">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="text-white hover:text-gray-400"
          >
            <AiOutlineSearch size={20} />
          </button>
        </div>

        {/* Menu All, Movie, TV */}
        <div className="flex space-x-6">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'all'
                ? 'bg-main text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('movie')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'movie'
                ? 'bg-main text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Movie
          </button>
          <button
            onClick={() => setActiveFilter('tv')}
            className={`px-6 py-2 rounded-full ${
              activeFilter === 'tv'
                ? 'bg-main text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            TV
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
