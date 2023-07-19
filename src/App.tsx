import { SizeForm } from "./components/SizeForm";
import { useState } from "react";
import { IPlaygroundSize } from "./types";
import { Game } from "./components/Game";

function App() {
  const [size, setSize] = useState<IPlaygroundSize>({ width: 0, height: 0 });
  const [isGameOn, setIsGameOn] = useState<boolean>(size.width > 0);
  const handleSizeChange = (newSize: IPlaygroundSize) => {
    setSize(newSize);
    setIsGameOn(true);
  };
  const handleGameOver = () => {
    setIsGameOn(false);
  };
  return isGameOn ? (
    <Game key={"game"} size={size} gameOver={handleGameOver} />
  ) : (
    <div className="bg-blue-400 h-screen">
      <div className="flex items-center  font-serif flex-col">
        <p className="text-6xl mt-10">Bubble wrap!</p>
        <p className="text-4xl mt-4">Please enter your game field parameters:</p>
      </div>
      <div className="p-20 flex justify-center items-center">
        <SizeForm key="form" changer={handleSizeChange} />
      </div>
    </div>
  );
}

export default App;
