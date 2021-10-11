import React, { ReactElement } from 'react';
import Header from '@components/header/header';

type Props = {
  children: ReactElement[];
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
};

export default Layout;
