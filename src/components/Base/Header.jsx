import React from 'react';

const Header = () => {
  return (
    <header className="bg-white w-full h-[7rem] flex items-center justify-center fixed top-0 z-50">
      {/* Logo and Navigation Section */}
      <div className="flex items-center space-x-24">
        {/* Logo Section */}
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-12 w-12" 
        />
        {/* Navigation Links */}
        <ul className="flex space-x-10 text-[1rem] font-medium">
          <li><a href="docs" className="text-gray-800 hover:text-red-600 transition">Docs</a></li>
          <li><a href="#" className="text-gray-800 hover:text-red-600 transition">Features</a></li>
          <li><a href="#" className="text-gray-800 hover:text-red-600 transition">Pricing</a></li>
          <li><a href="#" className="text-gray-800 hover:text-red-600 transition">About</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
