import React, { useState } from 'react';
import Hero from '@components/hero/hero';
import Shops from '@components/stores/db/shops';
import DBSearch from '@components/stores/db/db-search';

const ShopsBlock = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <div className="w-full relative h-28">
        <Hero />
        <DBSearch setSearch={setSearch} />
      </div>
      <Shops search={search} />
    </>
  );
};

export default ShopsBlock;
