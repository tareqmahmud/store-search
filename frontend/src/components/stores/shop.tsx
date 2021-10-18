import React from 'react';
import Image from 'next/image';
import storeImage from '@assets/images/store.jpg';
import { TShop } from '@framework/rest/types';

type Props = {
  shop: TShop;
};

const Shop: React.FC<Props> = ({ shop }) => {
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
        <h2 className="px-3 mt-3 text-lg">{shop.name}</h2>
      </a>
    </div>
  );
};

export default Shop;
