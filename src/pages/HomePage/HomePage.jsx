import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Main from "../../components/Main";
import FullScreenMain from "../../FullScreenMain";
import Footer from "../../components/Footer";

// const Footer = React.lazy(() => import('../../Footer'));
// const OrderPage = React.lazy(() => import('./components/Order/OrderPage'));

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav>
        <Nav />
      </nav>

      <header>
        <Header />
      </header>

      <main>
        <Main />
        <FullScreenMain />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
