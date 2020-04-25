import React from "react";
import _ from "lodash";

const JobCard = ({ name, price, department, promotion }) => {
  console.log(_.isEmpty(promotion));

  return (
    <div className="m-job-card">
      <div className="m-job-card__left">
        <div className="header">
          {!_.isEmpty(promotion) ? (
            promotion.active ? (
              <h5 className="offer-avail">
                {" "}
                {`Offer ${promotion.code} with Discount  ${promotion.discount}% `}
              </h5>
            ) : (
              <h5 className="offer-not-avail">
                {" "}
                {`Offer ${promotion.code} with Discount  ${promotion.discount}%  Is Not Available`}
              </h5>
            )
          ) : (
            ""
          )}

          <h3>{name}</h3>
          <h6>{department}</h6>
        </div>
      </div>
      <div className="m-job-card__right">
        <div className="fixedprice">
          <span className="Price">
            {`${
              !_.isEmpty(promotion)
                ? parseInt(price) -
                  parseInt(price) * (parseInt(promotion.discount) / 100)
                : price
            }`}{" "}
            <span className="symbol"> LE </span>
          </span>
        </div>
        {!_.isEmpty(promotion) && (
          <div className="subPrice">
            <div className="instead">instead of</div>
            <span className="Price">
              {" "}
              {price} <span className="symbol"> LE </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
