import React from 'react';
import Header from '@components/header/header';
import Hero from '@components/ui/hero';
import Stores from '@components/ui/stores';
import Button from '@components/ui/button';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stores />
      <div className="mt-12 flex justify-center items-center">
        <Button label="Load More..." className="rounded-none bg-red-900"/>
      </div>
    </>
  );
};

export default Home;
