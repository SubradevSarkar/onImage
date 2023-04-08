import React, { useEffect } from "react";
import css from "./alertModel.module.css";

const alertModal = ({ message, show }) => {
  return (
    <div>
      <div className={css.wrapper} onClick={() => show(false)}></div>
      <div className={css.container}>
        <h2>{message}</h2>
        <button onClick={() => show(false)}>close</button>
      </div>
    </div>
  );
};

export default alertModal;
