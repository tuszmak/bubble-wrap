import { FormEvent, useState } from "react";
import { IPlaygroundSize } from "../types";

export const SizeForm = ({changer = (_ : IPlaygroundSize) => {}}) => {
  const handleSubmit = (e: FormEvent) => {
    const newPlaygroundSize: IPlaygroundSize = { width: width, height: height };
    e.preventDefault();
    if(width === 0 || height === 0){
      //warning
    }
    changer(newPlaygroundSize);
  };
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  return (
    <div className="flex gap-y-5 content-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-control">
          <label className="input-group input-group-lg">
            <span className="w-20">Width</span>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered input-lg"
              onChange={(e) => setWidth(parseInt(e.target.value))}
              value={width?.toString()}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-lg">
            <span className="w-20">Height</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg"
              onChange={(e) => setHeight(parseInt(e.target.value))}
              defaultValue={height?.toString()}
            />
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
