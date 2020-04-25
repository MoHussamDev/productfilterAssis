import React, { useState } from "react";
import Markup from "./markup";

const DropdownGroup = ({ name, inputs }) => {
  const [toggler, setToggler] = useState(false);
  const togglerSetter = () => {
    setToggler(!toggler);
  };

  return (
    <Markup
      toggle={{ value: toggler, togglerSetter: togglerSetter }}
      name={name}
      inputs={inputs}
    />
  );
};

export default DropdownGroup;
