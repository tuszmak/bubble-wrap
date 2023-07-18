import { useState } from "react";
import { IGameProps } from "../types";
import { Pop } from "./Pop";

export const Game = (props: IGameProps) => {
  const array1 = new Array<number>(props.size.width).fill(1);
  const array2 = new Array<number>(props.size.height).fill(1);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(true);
  const handleChange = () => {
    setIsHover(!isHover);
  };
  const handleRefresh = async () => {
    setRefresh(!refresh);
  };
  return (
    <div>
      <div>
        <button className="btn btn-primary" onClick={props.gameOver}>
          Back
        </button>
        {isHover ? (
          <button className="btn btn-primary" onClick={handleChange}>
            Change to hover
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleChange}>
            Change to tap
          </button>
        )}
        {refresh ? <button className="btn btn-primary" onClick={handleRefresh}>
          Clear board
        </button>: <button className="btn btn-primary" onClick={handleRefresh}>
          Get new board
        </button>}
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center ">
          <table>
            <tbody>
              {refresh ? (
                array1.map((_, ri) => (
                  <tr>
                    {array2.map((_, i) => (
                      <Pop key={ri * i} isHover={isHover} />
                    ))}
                  </tr>
                ))
              ) : <></>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
