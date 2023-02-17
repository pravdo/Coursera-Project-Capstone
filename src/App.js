import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About/About";
import BookingPage from "./pages/Booking/BookingPage";
import ConfirmedBooking from "./pages/Booking/ConfirmedBooking";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import OrderPage from "./pages/Order/OrderPage";
import MuiContextProvider from "./context/MuiContextProvider";

function App() {
  return (
    <MuiContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route
            path="/about"
            element={
              <React.Suspense fallback={<>...</>}>
                <About />
              </React.Suspense>
            }
          ></Route>

          <Route
            path="/booking"
            element={
              <React.Suspense fallback={<>...</>}>
                <BookingPage />
              </React.Suspense>
            }
          ></Route>

          <Route
            path="/confirming"
            element={
              <React.Suspense fallback={<>...</>}>
                <ConfirmedBooking />
              </React.Suspense>
            }
          ></Route>

          <Route
            path="/login"
            element={
              <React.Suspense fallback={<>...</>}>
                <Login />
              </React.Suspense>
            }
          ></Route>

          <Route
            path="/register"
            element={
              <React.Suspense fallback={<>...</>}>
                <Register />
              </React.Suspense>
            }
          ></Route>

          <Route
            path="/order"
            element={
              <React.Suspense fallback={<>...</>}>
                <OrderPage />
              </React.Suspense>
            }
          ></Route>
        </Routes>
      </Router>
    </MuiContextProvider>
  );
}

export default App;
