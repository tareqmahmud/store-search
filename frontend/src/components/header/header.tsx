import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="font-roboto tracking-wide border-b">
      <div className="container mx-auto">
        <div className="px-12 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <a href="#" className="font-bold text-2xl">TStore</a>
          </div>

          {/* Navigation */}
          <div className="">
            <nav className="space-x-4">
              <a href="#" className="hover:text-purple-500">Home</a>
              <a href="#" className="hover:text-purple-500">About</a>
              <a href="#" className="hover:text-purple-500">Contact</a>
              <a href="#" className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600">Login</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
