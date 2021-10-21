import { isEmpty } from "lodash";
import Image from "next/image";
import noData from "@assets/noData.jpg";
import Shop from "@components/stores/common/shop";
import { connectHits } from "react-instantsearch-dom";
import React from "react";

const CustomHits = ({ hits }: any) => {
  if (isEmpty(hits)) {
    return (
      <div className="flex justify-center items-center grid-column-center">
        <Image src={noData} width="400" height="400" alt="No Shops Found" />
      </div>
    );
  } else {
    return hits?.map((hit: any, index: number) => (
      <Shop shop={hit} key={`shop-${index}`} />
    ));
  }
};

export default connectHits(CustomHits);