import React from "react";
import JobCard from "./jobCard";
import ReactLoading from "react-loading";

const Markup = ({ products, size, filterPromotion, load }) => {
  return (
    <div id="jobFeed">
      <div className={`loader ${load ? "show" : ""}`}>
        <ReactLoading type="balls" color="#7ed6df" />:
      </div>
      <div className="m-jobfeed-header">
        <span>{size} Product Found</span>
      </div>
      {products.map((i, key) => {
        let promotioned = {};
        !filterPromotion.length
          ? i.promotions_id.map((b, k) => {
              if (b.active && k === 0) {
                return promotioned = b;
              }
            })
          : i.promotions_id.map((b, k) => {
              if (filterPromotion === b._id) {
                if (i.active) {
                  return promotioned = b;
                }
                return promotioned = b;
              }
            });
        return (
          <JobCard
            key={key}
            name={i.name}
            price={i.price}
            department={i.department_id.name}
            promotion={promotioned}
            id={i._id}
          />
        );
      })}
    </div>
  );
};

export default Markup;
