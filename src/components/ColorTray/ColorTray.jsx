/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ColorTray.module.css";

const ColorTray = ({ onPreBtnClickHandler, allBgColors }) => {
  const onPreDefBtnclick = (e) => {
    onPreBtnClickHandler(e.target.value);
  };

  const bgColors = allBgColors.map((Color, index) => (
    <button
      key={index}
      value={Color}
      onClick={onPreDefBtnclick}
      className={styles.preDefBtn}
      style={{ backgroundColor: Color }}
    ></button>
  ));

  return <>{bgColors}</>;
};

export default ColorTray;
