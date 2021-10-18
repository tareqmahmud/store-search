import React, { useState } from 'react';
import Hero from '@components/hero/hero';
import Shops from '@components/stores/shops';

const ShopsBlock = () => {
  const [search, setSearch] = useState();

  return (
    <>
      <Hero setSearch={setSearch} />
      <Shops search={search} />
    </>
  );
};

export default ShopsBlock;
