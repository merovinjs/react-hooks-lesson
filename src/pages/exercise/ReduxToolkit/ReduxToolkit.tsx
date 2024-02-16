import type { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../../features/counter/counterSlice";
import { Link } from "react-router-dom";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(10))}>
        incrementByAmount
      </button>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/formstapper">
        FormStapper
      </Link>
    </div>
  );
}
