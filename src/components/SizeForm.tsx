import React from "react";
import { IPlaygroundSize } from "../types";

export const SizeForm = (changer :any ) => {
    const handleSubmit = ()=>{}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="input-group input-group-lg">
            <span>Width</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group input-group-lg">
            <span>Height</span>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-lg"
            />
          </label>
        </div>
      </form>
    </div>
  );
}