import { useState } from "react";
import "./App.css";

function UseState() {
  console.log("useState rerender");

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const counter = () => {
    setCount2(count2 + 1);
  };
  const prevCounter = () => {
    setCount3((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
    setCount3((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>useState</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={counter}>count is {count2}</button>
        <button onClick={prevCounter}>count is {count3}</button>
      </div>
    </>
  );
}

export default UseState;
