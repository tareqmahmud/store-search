import { connectStateResults } from "react-instantsearch-dom";
import React, { useState } from "react";
import Loader from "react-loader-spinner";

const CustomStateResults = connectStateResults(
  ({ searchResults, searching }) => {
    const [isInitialSearch, setInitialSearch] = useState(true);

    if (searchResults && isInitialSearch) {
      setInitialSearch(false);
    }

    if (searching && isInitialSearch) {
      return null;
    } else if (searching && !isInitialSearch) {
      return (
        <div className="flex justify-center items-center mt-40">
          <Loader type="Circles" color="#00BFFF" height={100} width={100} />
        </div>
      );
    }
    return null;
  }
);

export default CustomStateResults;