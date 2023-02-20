import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={logo} alt="logo" width={"500px"} />
      <div className="content">
        <div className="title-content">
          <h1 className="title yellow-text">Little Lemon</h1>
          <h2 className="headerText sub-title">Chicago</h2>
        </div>
        <div className="sub-content">
          <p className="headerText plain-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <button
            aria-label="On Click"
            onClick={() => navigate("/booking")}
            className="primaryButton yellow-bg"
          >
            <h3>Reserve a table</h3>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
