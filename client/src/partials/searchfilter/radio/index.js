import React, { useContext, useState } from "react";
import { CheckerContext } from "../../../helpers/checkerContext";

const Radio = ({ title, i, id }) => {
  const { handler, state } = useContext(CheckerContext);

  return (
    <div className="input-radio">
      <label className="radio-container">
        {" "}
        {title}
        <input
          onChange={() => handler(id)}
          checked={state === id}
          value={id}
          name={i}
          type="radio"
        />
        <span className="circle"></span>
      </label>
    </div>
  );
};

export default Radio;
