import { Button } from "@mui/material";
import React from "react";
import { XLg } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import uuid from "react-uuid";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Card from "../MUIcomp/Card";

const ConfirmedBooking = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const reservationsArr = JSON.parse(localStorage.getItem("reservations"));
  const navigate = useNavigate();

  function clearAll() {
    localStorage.removeItem("reservations");
    navigate("/booking");
  }

  function deleteFunc(card) {
    const output = reservationsArr.filter((item) => item !== card);

    localStorage.setItem("reservations", JSON.stringify(output));

    if (output.length !== 0) window.location.reload();
    else navigate("/booking");
  }

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="content100vh centerContent">
        <h1 className="center">Confirmed Bookings</h1>
        <h1 className="center">
          {user.firstName} {user.lastName}'s reservations
        </h1>
        <div className="cardsVertical">
          {reservationsArr.map((item) => {
            return (
              <div key={uuid()} className="shopCard">
                <Card item={item} />
                <Button
                  variant="text"
                  color="error"
                  size="large"
                  onClick={() => deleteFunc(item)}
                >
                  <XLg size={50} />
                </Button>
              </div>
            );
          })}
        </div>

        <Button onClick={clearAll} color="error" variant="contained">
          Clear all
        </Button>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ConfirmedBooking;
