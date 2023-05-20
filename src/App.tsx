import "./App.css";
import { SizeForm } from "./components/SizeForm";
import { useState } from "react";
import { IPlaygroundSize } from "./types";

function App() {
  const [size, setSize] = useState<IPlaygroundSize>({
    width: 0,
    height: 0,
  });
 
  return (
    <div className="bg-blue-400 flex justify-center h-1">
      Hi! This is the homepage!

    </div>
  );
}

export default App;
