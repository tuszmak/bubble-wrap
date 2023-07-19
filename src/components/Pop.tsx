import { useState } from "react";
import popSFX from "../sounds/pop.mp3";
import bubble from "../assets/bubble.jpg";
import { IPopProps } from "../types";

export const Pop = (props: IPopProps) => {
  const handleClick = async () => {
    
    let popSound = new Audio(popSFX);
    popSound.volume = 0.4;
    popSound.play()
    await new Promise((e) => setTimeout(e, 110)); // Time required for the click to sync with audio
    setIsPopped(true);
  };
  const [isPopped, setIsPopped] = useState<boolean>(false);
  return isPopped ? (
    <button className="w-16 h-16 opacity-50">
      <img src={bubble} className="max-w-full" />
    </button>
  ) : props.isHover ? (
    <button className="w-16 h-16" onMouseDown={handleClick}>
      <img src={bubble} />
    </button>
  ) : (
    <button className="w-16 h-16" onMouseEnter={handleClick}>
      <img src={bubble} />
    </button>
  );
};
