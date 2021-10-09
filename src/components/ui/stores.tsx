import React from 'react';
import Store from '@components/ui/store';
import Button from "@components/ui/button";

const Stores = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto">
        <div className="w-full min-h-full py-12 px-12 grid gap-20 grid-cols-4">
          {Array.from({ length: 12 }).map((_store, index) => (
            <Store key={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button label="Load More..." className="rounded-none bg-red-900 my-5 text-center"/>
        </div>
      </div>
    </div>
  );
};

export default Stores;
