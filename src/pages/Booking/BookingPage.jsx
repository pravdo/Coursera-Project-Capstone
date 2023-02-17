import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import MUIdialog from "../MUIcomp/MUIdialog";
import MainBooking from "./MainBooking";

const BookingPage = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const hasUser = user !== null && Object.keys(user).length !== 0;

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <header>
        <h1 className="abouth1 title">Book a table</h1>
      </header>
      <img
        alt="img"
        className="about-img"
        src="/icons_assets/restaurant.jpg"
        loading="lazy"
      ></img>
      <main className="content100vh">
        {hasUser ? <MainBooking /> : <MUIdialog hasUser={hasUser} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default BookingPage;
