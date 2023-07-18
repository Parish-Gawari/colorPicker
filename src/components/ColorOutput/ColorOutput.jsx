/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ColorOutput.module.css";

const ColorOutput = ({ backgColor }) => {
  return (
    <div
      className={styles.outputContainer}
      style={{ backgroundColor: backgColor }}
    ></div>
  );
};

export default ColorOutput;
