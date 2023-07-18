import { useReducer } from "react";
import { colorReducer } from "./reducers/colorReducer";

const UseReducer = () => {
  const [state, dispatch] = useReducer(colorReducer, "");

  return (
    <div>
      <h1 style={{ color: state.backGroundColor }}>hello reducer</h1>
      <button onClick={() => dispatch({ type: "black" })}>black</button>
      <button onClick={() => dispatch({ type: "red" })}>red</button>
    </div>
  );
};

export default UseReducer;
