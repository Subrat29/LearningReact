import { useState } from "react";

const App = () => {

  const [color, setColor] = useState("")

  const buttonHandler = (color) => {
    setColor(color)
  }

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex justify-center">
          <button onClick={() => (buttonHandler("green"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Green</button>
          <button onClick={() => (buttonHandler("red"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Red</button>
          <button onClick={() => (buttonHandler("yellow"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Yellow</button>
          <button onClick={() => (buttonHandler("black"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Black</button>
          <button onClick={() => (buttonHandler("pink"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Pink</button>
          <button onClick={() => (buttonHandler("blue"))}  className="bg-black text-white rounded-md px-2 py-1 mx-5 my-5">Blue</button>
        </div>
      </div>
    </>
  );
};

export default App;

