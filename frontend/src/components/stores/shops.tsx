import React from 'react';
import { useShopsQuery } from '@framework/rest/shops/shops.query';
import { isEmpty } from 'lodash';
import { TShop } from '@framework/rest/types';
import Shop from '@components/stores/shop';
import Loader from 'react-loader-spinner';
import noData from '@assets/noData.jpg';
import Image from 'next/image';

type Props = {
  search?: string;
};

const Shops: React.FC<Props> = ({ search }) => {
  const { data, isLoading: loading } = useShopsQuery({
    search: search,
    enableAlgolia: true
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-40">
        <Loader type="Circles" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }

  const shops = data?.hits ? data?.hits : data?.data;

  return (
    <>
      {!loading && isEmpty(shops) ? (
        <div className="flex justify-center items-center">
          <Image src={noData} width="400" height="400" />
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="container mx-auto">
            <div className="w-full min-h-full py-12 px-12 grid gap-20 grid-cols-4">
              {shops?.map((shop: TShop, index: number) => (
                <Shop key={`shop-${index}`} shop={shop} />
              ))}
            </div>
            {/*<div className="flex justify-center">*/}
            {/*  <Button*/}
            {/*    label="Load More..."*/}
            {/*    className="rounded-none bg-red-900 my-5 text-center"*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Shops;
