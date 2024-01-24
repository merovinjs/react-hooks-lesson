import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hooks from "./pages/hooks/Hooks";
import ReactHookForm from "./pages/reactHookForm/ReactHookForm";
import Home from "./pages/home/Home";
import ExercisesHomePage from "./pages/exercise/ExercisesHomePage";
import { Exercise1 } from "./pages/exercise/Exercise1";
import OtpLogin from "./pages/exercise/OTPlogin/OtpLogin";
import MineSwapperGame from "./pages/exercise/MineSwapperGame/MineSwapperGame";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/form" element={<ReactHookForm />} />
          <Route path="/exercises" element={<ExercisesHomePage />} />
          <Route path="/exercise/mapping" element={<Exercise1 />} />
          <Route path="/exercise/otpLogin" element={<OtpLogin />} />
          <Route path="/exercise/mineswappergame" element={<MineSwapperGame />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
