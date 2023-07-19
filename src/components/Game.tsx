import { useState } from "react";
import { IGameProps } from "../types";
import { Pop } from "./Pop";

export const Game = (props: IGameProps) => {
  const widthArray = new Array<number>(props.size.width).fill(1);
  const heightArray = new Array<number>(props.size.height).fill(1);
  const [isClick, setIsClick] = useState<boolean>(true);
  const [refresh, setRefresh] = useState<boolean>(true);
  const handleChange = () => {
    setIsClick(!isClick);
  };
  const handleRefresh = async () => {
    setRefresh(!refresh);
  };
  return (
    <div className="bg-blue-400">
      <div>
        <button className="btn btn-primary" onClick={props.gameOver}>
          Back
        </button>
        {isClick ? (
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
                widthArray.map((_, ri) => (
                  <tr>
                    {heightArray.map((_, i) => (
                      <Pop key={ri * i + 1} isHover={isClick} />
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
