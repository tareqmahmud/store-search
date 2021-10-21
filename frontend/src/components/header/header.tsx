import React from 'react';
import Navigation from '@components/header/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="font-roboto tracking-wide border-b">
      <div className="container mx-auto">
        <div className="px-12 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="">
            <Link href={{ pathname: '/' }}>
              <h2 className="text-3xl font-medium">TStore</h2>
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;
