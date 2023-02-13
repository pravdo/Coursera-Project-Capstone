import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="content">
        <img src={logo} alt="logo" />
        <div className="title-content">
          <h1 className="title yellow-text">Little Lemon</h1>
          <h2 className="headerText sub-title">Chicago</h2>
        </div>
        <div className="sub-content">
          <p className="headerText plain-text">
            {" "}
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
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
      {/* <LazyLoadImage
    src='/icons_assets/Mario and Adrian A.jpg'
    loading='lazy'
    className='main-img'
    effect='blur'
    placeholderSrc='/icons_assets/Mario and Adrian A.jpg'
    /> */}
      <img
        alt="img"
        className="main-img resImg"
        loading="lazy"
        src="/icons_assets/Mario and Adrian A.jpg"
      />
    </header>
  );
};

export default Header;
