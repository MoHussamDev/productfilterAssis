import React, { Fragment, useContext } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Checkbox from "../checkbox";
import Radio from "../radio";
import { CheckerContext } from "../../../helpers/checkerContext";

const Markup = ({ toggle, inputs }) => {
  const { type } = useContext(CheckerContext);
  return (
    <SlideDown>
      {toggle ? (
        <Fragment>
          {type === "radio" && <Radio key={0} i={"0"} title={"Any"} id={""} />}
          {inputs.map((i, key) => {
            if (type === "checkbox") {
              return <Checkbox key={key} title={i.name} id={i._id} />;
            } else {
              return <Radio key={key} i={i} title={i.code} id={i._id} />;
            }
          })}
        </Fragment>
      ) : null}
    </SlideDown>
  );
};

export default Markup;
