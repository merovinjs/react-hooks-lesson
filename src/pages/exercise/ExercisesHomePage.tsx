const ExercisesHomePage = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "lightblue", flexDirection: "column", padding: "15px 45px" }}>
      <a style={{ marginBottom: "15px", fontSize: "20px" }} href="/exercise/mapping">
        Mapping Fonsiyon
      </a>
      <a style={{ marginBottom: "15px", fontSize: "20px" }} href="/exercise/otpLogin">
        Opt Fonsiyon"Tek kullanımlık şifre ile giriş"
      </a>
    </div>
  );
};

export default ExercisesHomePage;
