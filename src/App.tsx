import "./App.css";
import { SizeForm } from "./components/SizeForm";
import { useState } from "react";
import { IPlaygroundSize } from "./types";
import { Game } from "./components/Game";

function App() {
  const [size, setSize] = useState<IPlaygroundSize>();
  const [isGameOn, setIsgameOn] = useState<boolean>(false)
  const handleSizeChange = (newSize: IPlaygroundSize) => {
    setSize(newSize);
    setIsgameOn(true)
  };
  const handleGameOver = ()=>{
    setIsgameOn(false)
  }
  console.log(size);
  return size && isGameOn ?<Game key={"game"} size={size} gameOver={handleGameOver} /> : (
    <div className="bg-blue-400  h-screen">
      <div className="flex justify-center">Hi! This is the homepage!</div>
      <div className="p-20 flex justify-center items-center">
        <SizeForm key="form" changer={handleSizeChange} />
      </div>
    </div>
  );
}

export default App;
