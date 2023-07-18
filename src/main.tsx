import ReactDOM from "react-dom/client";
import "./index.css";
import UseState from "./useState.tsx";
import UseEffect from "./useEffect.tsx";
import UseReducer from "./useReducer.tsx";
import UseRef from "./useRef.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <UseState />
    <UseEffect />
    <UseReducer />
    <UseRef />
  </>
);
