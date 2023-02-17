import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import MUIdialog from "../MUIcomp/MUIdialog";
import MainOrder from "./MainOrder";

const OrderPage = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const hasUser = user !== null && Object.keys(user).length !== 0;

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <header>
        <h1 className="abouth1 title">Your Order</h1>
      </header>
      <img
        alt="img"
        className="about-img"
        src="/icons_assets/on.jpeg"
        loading="lazy"
      ></img>
      <main className="content100vh">
        {hasUser ? <MainOrder /> : <MUIdialog hasUser={hasUser} />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default OrderPage;
