/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";
import ColorOutput from "../ColorOutput/ColorOutput";
import ColorTray from "../ColorTray/ColorTray";
import { colordata } from "../../service/colordata";

const ColorPicker = () => {
  const CSS_COLORS = colordata();
  const [color, setColor] = useState("");
  const [bgcolor, setBgcolor] = useState("white");
  const [allcolor, setAllcolor] = useState(["red", "blue", "green"]);
  const inputChangehandler = (e) => {
    setColor(e);
  };
  const hexRegex = new RegExp("(^#?([a-f0-9]{6}|[a-f0-9]{3})$)");
  const btnClickHandler = () => {
    const cl = color.trim().toLowerCase();
    const clArray = [...allcolor];
    if (!clArray.includes(cl)) {
      if (CSS_COLORS.includes(cl)) {
        setBgcolor(color);
        setAllcolor([...clArray, cl]);
        setColor("");
      } else if (hexRegex.test(cl)) {
        setBgcolor(color);
        setAllcolor([...clArray, cl]);
        setColor("");
      } else {
        alert("Please Enter a Valid Color Name or a Hex value");
        setColor("");
      }
    } else {
      alert("color is already there");
      setColor("");
    }
  };

  const onPreBtnClickHandler = (e) => {
    setBgcolor(e);
    console.log(allcolor);
  };
  const keyHandler = (e) => {
    if (e.key == "Enter") {
      btnClickHandler();
    }
  };
  return (
    <>
      <center>
        <ColorInput
          keyHandler={keyHandler}
          inputValue={color}
          inputChangehandler={inputChangehandler}
          btnClickHandler={btnClickHandler}
          btnDisabled={color.trim().length === 0}
        />
        <ColorOutput backgColor={bgcolor} />
        <ColorTray
          onPreBtnClickHandler={onPreBtnClickHandler}
          allBgColors={allcolor}
        />
      </center>
    </>
  );
};

export default ColorPicker;
