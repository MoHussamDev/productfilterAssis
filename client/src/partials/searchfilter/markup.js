import React from "react";

const Markup = ({ DropdownGroup, name, choices }) => {
  return <DropdownGroup name={name} inputs={choices} />;
};

export default Markup;
