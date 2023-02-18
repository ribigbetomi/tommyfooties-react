import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  //the rest operator lists the other props so we dont have to come here everytime to add something new
  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span style={{ fontWeight: "500" }}>{label}</span>
      </label>{" "}
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        placeholder="Type here..."
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
