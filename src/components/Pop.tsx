import { useState } from "react";
import popSFX from "../sounds/pop.mp3";
import bubble from "../assets/bubble.jpg";

export const Pop = (props: any) => {
  const handleClick = async () => {
    new Audio(popSFX).play();
    await new Promise((e) => setTimeout(e, 110)); // Time required for the click to sync with audio
    setIsPopped(true);
  };
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return isPopped ? (
    <button className="w-16 h-16 opacity-50">
      <img src={bubble} alt="" className="max-w-full" />
    </button>
  ) : props.isHover ? (
    <button className="w-16 h-16" onMouseDown={handleClick}>
      <img src={bubble} alt="" />
    </button>
  ) : (
    <button className="w-16 h-16" onMouseEnter={handleClick}>
      <img src={bubble} alt="" />
    </button>
  );
};
