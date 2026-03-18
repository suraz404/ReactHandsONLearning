import React from "react";
import { SquareBox } from "./components/SquareBox";

const App = () => {
  return (
    <div className=" p-4 flex flex-row gap-4">
      <h1 className="text-2xl font-bold text-black">My App</h1>
      <SquareBox color="red" />
      <SquareBox color="blue" />
      <SquareBox color="green" />
    </div>
  );
};

export default App;
