import { useState } from "react";
import { IGameProps, IPlaygroundSize } from "../types";
import { Pop } from "./Pop";

export const Game = (props : IGameProps) => {
  const [numberOfPops] = useState<number>(
    Number(props.size.height) * Number(props.size.width)
  );
  const array1 = new Array<number>(props.size.width).fill(1);
  const array2 = new Array<number>(props.size.height).fill(1);
  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={props.gameOver}>Back</button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center ">
          {/* {array.map((_, i) => {
            return <Pop key={i} />;
          })} */}
          <table>
            <tbody>
            {
              array1.map((_,ri)=><tr>
                {array2.map((_,i)=>(<Pop key={ri *i} />))}
              </tr>)
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  //I render all the components like that and because it's paired it will be responsive nonetheless
};
