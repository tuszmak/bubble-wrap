import "./App.css";
import { SizeForm } from "./components/SizeForm";
import { useState } from "react";
import { IPlaygroundSize } from "./types";

function App() {
  const [size, setSize] = useState<IPlaygroundSize>({
    width: 0,
    height: 0,
  });
  const handleSizeChange = (size: IPlaygroundSize) => {
    setSize(size);
  };
  return (
    <div className="bg-blue-400  h-screen">
      <div className="flex justify-center">Hi! This is the homepage!</div>
      <div className="p-20 flex justify-center items-center">
        <SizeForm key="form" changer={handleSizeChange} />
      </div>
    </div>
  );
}

export default App;
