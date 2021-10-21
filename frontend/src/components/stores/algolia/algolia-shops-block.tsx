import React from 'react';
import Hero from '@components/hero/hero';
import CustomSearchBox from '@components/stores/algolia/widgets/custom-search-box';
import CustomStateResults from '@components/stores/algolia/widgets/custom-state-result';
import CustomHits from '@components/stores/algolia/widgets/custom-hits';

const AlgoliaShopsBlock = () => {
  return (
    <>
      <div className="w-full relative h-28">
        {/* Banner */}
        <Hero />
        {/* Search */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="max-w-3xl w-full">
            <CustomSearchBox />
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto">
          <div className="w-full min-h-full py-12 px-12 grid gap-20 grid-cols-4">
            <CustomStateResults />
            <CustomHits />
          </div>
        </div>
      </div>
    </>
  );
};

export default AlgoliaShopsBlock;
