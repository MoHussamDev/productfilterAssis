import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";
import validate from "../../helpers/validate";

const ReactSelect = ({
  error,
  icon = false,
  label,
  options,
  handlers,
  name,
  value,
  reducer,
  register,
  rules,
  profile = false,
  setError,
}) => {
  useEffect(() => {
    register({ name: name });
    if (validate.isEmpty(value.value)) {
      setError(name, "required", "This Feild Can't Be Empty");
    }
  }, [register]);

  const handleChange = (e) => {
    const b = {
      target: {
        name: name,
        value: e,
      },
    };
    if (validate.isEmpty(e.value)) {
      setError(name, "required", "This Feild Can't Be Empty");
    }
    handlers(b, reducer);
    console.log(value);
    // setValue("select", e.target.value, true);
  };
  return (
    <div className={`inputgroup ${error ? "inputError" : " "}`}>
      <div className="input-head">
        <label htmlFor=""> {label} </label>
        {!profile && (
          <div className="errorMsg">{error ? error.message : ""}</div>
        )}
      </div>
      <div className={`input-control ${profile ? "profile" : ""}`}>
        <Select
          onChange={handleChange}
          options={options}
          ref={(e) => register({ name: { name }, required: true })}
        />
        {profile && (
          <div className="errorMsg">{error ? error.message : ""}</div>
        )}
      </div>
    </div>
  );
};

export default ReactSelect;
