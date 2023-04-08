import React from "react";
import css from "./Button.module.css";

const Button = ({ children, ...rest }) => {
  return (
    <div {...rest} className={css.btn_main}>
      {children}
    </div>
  );
};

export default Button;
