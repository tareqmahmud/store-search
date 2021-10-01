import React from 'react';
import Store from '@components/ui/store';

const Stores = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 w-full min-h-full py-12 px-12 grid gap-20 grid-cols-4">
        {Array.from({ length: 12 }).map((_store, index) => (
          <Store key={index} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
