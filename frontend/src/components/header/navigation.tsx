import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@lib/routes';

type Props = {};

const Navigation: React.FC<Props> = () => {
  return (
    <div className="">
      <nav className="space-x-4">
        <Link href="/">
          <a className="hover:text-purple-500">DB Search</a>
        </Link>
        <Link href={ROUTES.ALGOLIA_SEARCH}>
          <a className="hover:text-purple-500">Algolia Search</a>
        </Link>
        <Link href={ROUTES.LOGIN}>
          <a className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600">
            Login
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
