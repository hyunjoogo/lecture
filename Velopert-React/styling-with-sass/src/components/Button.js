import React from "react";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ children, size }) => {
  return <button className={classNames("Button", size)}>{children}</button>;
};

Button.defaultProps = {
  size: "medium",
};

export default Button;
