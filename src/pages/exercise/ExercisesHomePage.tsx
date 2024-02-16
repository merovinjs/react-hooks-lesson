import { Link } from "react-router-dom";
const ExercisesHomePage = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "lightblue", flexDirection: "column", padding: "15px 45px" }}>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/mapping">
        Mapping Fonsiyon
      </Link>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/otpLogin">
        Opt Fonsiyon"Tek kullanımlık şifre ile giriş"
      </Link>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/mineswappergame">
        mayın tarlası oyunu
      </Link>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/acordion">
        Acordion
      </Link>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/formstapper">
        FormStapper
      </Link>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/reduxtoolkit">
        ReduxToolkit example
      </Link>
    </div>
  );
};

export default ExercisesHomePage;
