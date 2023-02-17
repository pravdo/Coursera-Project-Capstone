import React, { useEffect, useState } from "react";
import ConditionalForm from "./ConditionalForm";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Register = () => {
  const [formikValues, setValues] = useState(
    JSON.parse(localStorage.getItem("registerArr"))
      ? [...JSON.parse(localStorage.getItem("registerArr"))]
      : []
  );
  const isRegister = true;

  useEffect(() => {
    localStorage.setItem("registerArr", JSON.stringify(formikValues));
  }, [formikValues]);

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="loginPage content100vh">
        <br></br>
        <br></br>
        <header>
          <h1>SIGN UP</h1>
        </header>
        <main>
          <img
            className="resImg loginImg"
            loading="lazy"
            alt="img"
            src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg"
          />
          <ConditionalForm
            isRegister={isRegister}
            formikValues={formikValues}
            setValues={setValues}
          />
          <p>If you have already account</p>
          <Link to="/login" className="link">
            <p
              className="medium"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Sign in
            </p>
          </Link>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Register;
