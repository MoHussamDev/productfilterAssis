import React from "react";
import Markup from "./markup";

const JobFeed = ({ products, size, filterPromotion, load }) => {
  return (
    <Markup
      products={products}
      size={size}
      filterPromotion={filterPromotion}
      load={load}
    />
  );
};

export default JobFeed;
