import { connectSearchBox } from 'react-instantsearch-dom';
import React from 'react';

const CustomSearchBox = ({ currentRefinement, refine }: any) => (
  <form className="w-full" noValidate action="" role="search">
    <div className="h-14 rounded shadow flex">
      <input
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder="Search your items"
        className="w-full h-full rounded px-4 text-sm appearance-none focus:border focus:border-green-400 focus:outline-none transition duration-300 ease-in-out"
      />
    </div>
  </form>
);

export default connectSearchBox(CustomSearchBox);
