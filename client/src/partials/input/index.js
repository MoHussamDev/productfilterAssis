import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({
  type,
  register,
  rules,
  icon,
  label,
  placeholder,
  name,
  value,
  handlers,
  reducer,
  error,
  profile = false,
  clearError = false,
}) => {
  const handleChange = (e) => {
    if (clearError) {
      clearError();
    }
    handlers(e, reducer);
  };
  return (
    <div className={`inputgroup ${error ? "inputError" : " "}`}>
      <div className="input-head">
        <label htmlFor=""> {label} </label>
        {!profile ? (
          <div className="errorMsg">{error ? error.message : ""}</div>
        ) : (
          ""
        )}
      </div>
      <div className={`input-control ${profile ? "profile" : ""}`}>
        {icon ? (
          <div className="icon">
            <FontAwesomeIcon icon={icon} />
          </div>
        ) : (
          ""
        )}

        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          ref={register(rules)}
        />

        {profile ? (
          <div className="errorMsg">{error ? error.message : ""}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
