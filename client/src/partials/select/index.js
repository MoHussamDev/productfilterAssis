import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Selected = ({
  error,
  icon = false,
  label = false,
  options,
  handlers,
  name,
  value,
  reducer,
  register,
  rules,
  profile = false,
  placeholder,
  reloadDays = false,
}) => {
  const [size, setSize] = useState(0);
  const handleChange = (e) => {
    if (reloadDays) {
      reloadDays(e.target.value);
    }
    handlers(e, reducer);
    setSize(1);
  };
  return (
    <div className={`inputgroup ${error ? "inputError" : " "}`}>
      {label ? (
        <div className="input-head">
          <label htmlFor=""> {label} </label>
          {!profile && (
            <div className="errorMsg">{error ? error.message : ""}</div>
          )}
        </div>
      ) : (
        ""
      )}
      <div className={`input-control ${profile ? "profile" : ""}`}>
        {icon ? (
          <div className="icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        ) : (
          ""
        )}
        <div className="selectHolder">
          <select
            //  onMouseDown={setSize(6) }
            // onBlur={setSize(0)}
            value={value}
            onChange={handleChange}
            name={name}
            ref={register(rules)}
          >
            <option defaultValue value="">
              {" "}
              {placeholder}
            </option>

            {options.length > 0 &&
              options.map((value, i) => (
                <option key={i} value={value.value}>
                  {value.title}
                </option>
              ))}
          </select>
        </div>
        {profile && (
          <div className="errorMsg">{error ? error.message : ""}</div>
        )}
      </div>
    </div>
  );
};

export default Selected;
