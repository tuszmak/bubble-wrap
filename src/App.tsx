import "./App.css";
import { SizeForm } from "./components/SizeForm";
import { useState } from "react";
import { IPlaygroundSize } from "./types";
import { Game } from "./components/Game";

function App() {
  const [size, setSize] = useState<IPlaygroundSize>({ width: 0, height: 0 });
  const [isGameOn, setIsgameOn] = useState<boolean>(size.width > 0);
  const handleSizeChange = (newSize: IPlaygroundSize) => {
    setSize(newSize);
    setIsgameOn(true);
  };
  const handleGameOver = () => {
    setIsgameOn(false);
  };
  return isGameOn ? (
    <Game key={"game"} size={size} gameOver={handleGameOver} />
  ) : (
    <div className="bg-blue-400  h-screen">
      <div className="flex justify-center text-6xl font-serif">
        Hi! This is the homepage!
      </div>
      <div className="p-20 flex justify-center items-center">
        <SizeForm key="form" changer={handleSizeChange} />
      </div>
    </div>
  );
}

export default App;
