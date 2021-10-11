import React from 'react';
import Navigation from "@components/header/navigation";

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
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
