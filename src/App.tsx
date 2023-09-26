import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hooks from "./pages/hooks/Hooks";
import ReactHookForm from "./pages/reactHookForm/ReactHookForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hooks />} />
          <Route path="/form" element={<ReactHookForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
