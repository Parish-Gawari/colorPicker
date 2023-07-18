/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ColorInput = ({
  inputChangehandler,
  btnClickHandler,
  inputValue,
  keyHandler,
  btnDisabled,
}) => {
  const oninputchange = (e) => {
    inputChangehandler(e.target.value);
  };
  const onBtnClick = () => {
    btnClickHandler();
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Color Here"
        onChange={oninputchange}
        value={inputValue}
        style={{ marginTop: "5px" }}
        onKeyUp={keyHandler}
      />
      <button
        onClick={onBtnClick}
        style={{ marginTop: "5px" }}
        disabled={btnDisabled}
      >
        Add Color
      </button>
    </>
  );
};

export default ColorInput;
