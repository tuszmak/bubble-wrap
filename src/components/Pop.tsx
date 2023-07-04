import React, { useState } from "react";
import popSFX from "../sounds/pop.mp3";
import bubble from "../assets/bubble.jpg";

export const Pop = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const handleClick = async () => {
    
    new Audio(popSFX).play();
    await new Promise((e) => setTimeout(e, 110));
    setIsPopped(true);
  };
  // const handleDown = () => {
  //   setIsMouseDown(true);    
  // };
  const handleUp = () => {
    setIsMouseDown(false);
  };
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return isPopped ? (
    <button className="w-16 h-16 opacity-50">
      <img src={bubble} alt="" />
    </button>
  ) : (
    <button className="w-16 h-16" onMouseDown={handleClick} onMouseEnter={handleClick} onMouseUp={handleUp}>
      <img src={bubble} alt="" />
    </button>
  );
};
