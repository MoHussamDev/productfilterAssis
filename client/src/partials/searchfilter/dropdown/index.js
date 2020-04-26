import React, { Fragment, useContext } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import Checkbox from "../checkbox";
import Radio from "../radio";
import { CheckerContext } from "../../../helpers/checkerContext";
import TextSelect from '../textSelect';

const Dropdown = ({ toggle, inputs }) => {
  const { type } = useContext(CheckerContext);

  const renderT = (type,inputs )=>{
   switch(type) {
    case 'checkbox' : 
    return (inputs.map((i, key) => {
      return <Checkbox key={key} title={i.name} id={i._id} />;
       }))
    case 'radio' : 
    return (inputs.map((i, key) => {
      if(i.active){

        return <Radio key={key} i={i} title={i.code} id={i._id} />;
      }
       }))
    case 'textSelect' : 
    return (<TextSelect inputs={inputs}/>)
      default:
        return '';
    }

    
}
  return (   
  <SlideDown>
    {toggle && renderT(type,inputs)
    
    }
  </SlideDown>)
};

export default Dropdown;
