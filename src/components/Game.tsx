import { useState } from "react";
import { IPlaygroundSize } from "../types";
import { Pop } from "./Pop";

export const Game = ({ size }: { size: IPlaygroundSize }) => {
  const [numberOfPops, setNumberOfPops] = useState<number>(
    Number(size.height) * Number(size.width)
  );
  const array = new Array<number>(numberOfPops).fill(1);
  return (
    <div>
      Game
      <div className="flex flex-wrap w-full ">
        {array.map((e, i) => {
          return (<Pop key={i} />);
        })}
      </div>
    </div>
  );
  //I render all the components like that and because it's paired it will be responsive nonetheless
};
