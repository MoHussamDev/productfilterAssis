import React, { useContext } from "react";
import { CheckerContext } from "../../../helpers/checkerContext";

const Checkbox = ({ title, id }) => {
  const { handler, state } = useContext(CheckerContext);
  return (
    <div className="input">
      <label className="checkbox-container">
        {" "}
        {title}
        <input
          onChange={() => handler(id)}
          checked={state.indexOf(id) !== -1}
          type="checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Checkbox;
