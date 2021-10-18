import React from 'react';
import Button from '@components/ui/forms/button';
import { useShopsQuery } from '@framework/rest/shops/shops.query';
import { isEmpty } from 'lodash';
import { TShop } from '@framework/rest/types';
import Shop from "@components/stores/shop";

const Shops = () => {
  const { data, isLoading } = useShopsQuery();

  if (isLoading && isEmpty(data)) {
    return <h2>No Shops Created Yet</h2>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="w-full min-h-full py-12 px-12 grid gap-20 grid-cols-4">
          {data?.data?.map((shop: TShop, index: number) => (
            <Shop key={`shop-${index}`} shop={shop} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            label="Load More..."
            className="rounded-none bg-red-900 my-5 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Shops;
