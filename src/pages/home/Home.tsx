import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/hooks">React Hooks Çalışmaları</Link>
        <br />
        <Link to="/redux">React Hook Form Çalışmaları</Link>
        <br />
        <Link to="/exercises">React Fonsiyonel Çalışmalar</Link>
      </div>
    </div>
  );
};

export default Home;
