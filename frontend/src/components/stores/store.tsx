import React from 'react';
import Image from 'next/image';
import storeImage from '@assets/images/store.jpg';

type Props = {};

const Store: React.FC<Props> = () => {
  return (
    <div className="bg-white pb-5 rounded shadow">
      <a href="#">
        <Image
          src={storeImage}
          alt="Card Image"
          layout="responsive"
          objectFit="cover"
          className="rounded-t"
        />
        <h2 className="px-3 mt-3 text-lg">Chaldal</h2>
      </a>
    </div>
  );
};

export default Store;
