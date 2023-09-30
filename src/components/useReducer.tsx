import { useReducer } from "react";
import { colorReducer } from "../reducers/colorReducer";
import { counterReducer } from "../reducers/counterReducer";
const UseReducer = () => {
  const initialvalue = { age: 0 };
  const [state, dispatch] = useReducer(colorReducer, "");
  const [counterstate, counterdispatch] = useReducer(
    counterReducer,
    initialvalue
  );
  const handleBlack = () => {
    // bu şekilde ayrı olarak yazmak yani oncilk olan yerede çağırmadan yazmak re-renderın önnüe geçer
    //red oluşturan dispatch fonsiyonun içnde yazılmıştır
    dispatch("black");
  };

  return (
    <div>
      <h1 style={{ color: state.backgroundColor }}>hello reducer</h1>
      <button onClick={handleBlack}>black</button>
      <button onClick={() => dispatch("red")}>red</button>
      <p>Hello! You are {counterstate.age}</p>
      <button onClick={() => counterdispatch({ type: "INCREMENT" })}>
        artır
      </button>
      <button onClick={() => counterdispatch({ type: "DECREMENT" })}>
        azalt
      </button>
    </div>
  );
};

export default UseReducer;
