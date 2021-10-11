import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@lib/routes';

type Props = {};

const Navigation: React.FC<Props> = () => {
  return (
    <div className="">
      <nav className="space-x-4">
        <Link href="">
          <a className="hover:text-purple-500">Home</a>
        </Link>
        <Link href="">
          <a className="hover:text-purple-500">About</a>
        </Link>
        <Link href={ROUTES.LOGIN}>
          <a className="hover:text-purple-500">Login</a>
        </Link>
        <Link href={ROUTES.REGISTER}>
          <a className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600">
            Register
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
