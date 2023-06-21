import { useState } from "react";
import { IPlaygroundSize } from "../types";
import { Pop } from "./Pop";

export const Game = ({ size }: { size: IPlaygroundSize }) => {
  const [numberOfPops, setNumberOfPops] = useState<number>(
    Number(size.height) * Number(size.width)
  );
  const array = new Array<number>(numberOfPops).fill(1);
  // const array = new Array<number>(numberOfPops);
  console.log(array);
  return (
    <div>
      Game
      <div>
        {array.map((e, i) => {
          console.log(i); 
          return (<Pop key={i} />);
        })}
      </div>
    </div>
  );
  //I render all the components like that and because it's paired it will be responsive nonetheless
};
