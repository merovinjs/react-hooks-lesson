import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hooks from "./pages/hooks/Hooks.js";
import ReactHookForm from "./pages/reactHookForm/ReactHookForm.js";
import Home from "./pages/home/Home.js";
import ExercisesHomePage from "./pages/exercise/ExercisesHomePage.js";
import { Exercise1 } from "./pages/exercise/Exercise1.js";
import OtpLogin from "./pages/exercise/OTPlogin/OtpLogin.js";
import MineSwapperGame from "./pages/exercise/MineSwapperGame/MineSwapperGame.js";
import Acordion from "./pages/exercise/Acordion/Acordion.js";
import FormStapper from "./pages/exercise/FormStapper/FormStapper.js";
import Counter from "./pages/exercise/ReduxToolkit/ReduxToolkit.js";

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
          <Route path="/exercise/acordion" element={<Acordion />} />
          <Route path="/exercise/formstapper" element={<FormStapper />} />
          <Route path="/exercise/reduxtoolkit" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
