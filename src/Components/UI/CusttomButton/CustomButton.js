import React from "react";
import "./CustomButton.css";

const CustomButton = ({ type, value, className, ...rest }) => {
  const classes = "custom-button " + className;
  return (
    <button {...rest} className={classes} type={type}>
      {value}
    </button>
  );
};

export default CustomButton;
