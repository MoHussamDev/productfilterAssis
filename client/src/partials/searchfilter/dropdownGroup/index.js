import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../dropdown";
const DropdownGroup = ({ name, inputs }) => {
  const [toggler, setToggler] = useState(false);
  const togglerSetter = () => {
    setToggler(!toggler);
  };

  return (
    <div className="m-search-filter-container__group">
      <div
        className="m-search-filter-container__group group-name"
        onClick={togglerSetter}
      >
        <span>{name}</span>
        <FontAwesomeIcon icon={toggler ? faMinus : faPlus} />
      </div>
      <div className="m-search-filter-container__group slideDown">
        <Dropdown toggle={toggler} inputs={inputs} />
      </div>
    </div>
  );
};

export default DropdownGroup;
