import React from 'react';
import Image from 'next/image';
import storeImage from '@assets/images/store.jpg';
import { TShop } from '@framework/rest/types';

type Props = {
  shop: TShop;
};

const Shop: React.FC<Props> = ({ shop }) => {

  const image = shop?.image ?? storeImage;

  return (
    <div className="bg-white pb-5 rounded shadow">
      <a href={shop?.url ?? '#'} target="_blank" rel="noreferrer">
        <Image
          src={image}
          alt="Card Image"
          layout="responsive"
          objectFit="cover"
          className="rounded-t"
          width="300"
          height="200"
        />
        <h2 className="px-3 mt-3 text-lg">{shop.name}</h2>
      </a>
    </div>
  );
};

export default Shop;
