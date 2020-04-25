import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../dropdown";

const markup = ({ toggle, name, inputs }) => {
  return (
    <div className="m-search-filter-container__group">
      <div
        className="m-search-filter-container__group group-name"
        onClick={toggle.togglerSetter}
      >
        <span>{name}</span>
        <FontAwesomeIcon icon={toggle.value ? faMinus : faPlus} />
      </div>
      <div className="m-search-filter-container__group slideDown">
        <Dropdown toggle={toggle.value} inputs={inputs} />
      </div>
    </div>
  );
};

export default markup;
