import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConditionalForm from "./ConditionalForm";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Login = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
      ? JSON.parse(localStorage.getItem("currentUser"))
      : {}
  );
  const isRegister = false;

  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.removeItem("reservations");
    localStorage.removeItem("order");
  }, [user]);

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="loginPage content100vh">
        <br></br>
        <br></br>
        <header>
          <h1 className="title">LOGIN</h1>
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
            formikValues={user}
            setValues={setUser}
          />
          <p className="medium">If you don't have account</p>
          <Link to="/register" className="link ">
            <p
              className="medium"
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Sign up
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

export default Login;
