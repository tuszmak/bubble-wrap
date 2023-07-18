import React, { useState } from "react";
import popSFX from "../sounds/pop.mp3";
import bubble from "../assets/bubble.jpg";

export const Pop = (props: any) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  console.log(props.isHover);

  const handleClick = async () => {
    new Audio(popSFX).play();
    await new Promise((e) => setTimeout(e, 110));
    setIsPopped(true);
  };
  const handleDown = () => {
    setIsMouseDown(true);
  };
  const handleUp = () => {
    setIsMouseDown(false);
  };
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return isPopped ? (
    <button className="w-16 h-16 opacity-50">
      <img src={bubble} alt="" />
    </button>
  ) : props.isHover ? (
    <button
      className="w-16 h-16"
      onMouseDown={handleClick}
      onMouseUp={handleUp}
    >
      <img src={bubble} alt="" />
    </button>
  ) : (
    <button
      className="w-16 h-16"
      onMouseUp={handleUp}
      onMouseEnter={handleClick}
    >
      <img src={bubble} alt="" />
    </button>
  );
};
