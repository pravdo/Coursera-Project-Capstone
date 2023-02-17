import React, { useState } from "react";
import BookingForm from "./BookingForm";
import BookingSlots from "./BookingSlots";
import { fetchAPI } from "../../API";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { UseMuiContext } from "../../context/MuiContextProvider";
import { ArrowRight } from "react-bootstrap-icons";

const MainBooking = () => {
  const [formikValues, setValues] = React.useState([]);
  const [reservations, setReservations] = useState(
    JSON.parse(localStorage.getItem("reservations"))
      ? [...JSON.parse(localStorage.getItem("reservations"))]
      : []
  );
  const navigate = useNavigate();
  const { loading, setLoading } = UseMuiContext();
  const availableOccasions = ["Birthday", "Anniversary", "Other"];
  const initialState = fetchAPI(new Date());

  function updateTimes(state, action) {
    if (action.type === "selected") return fetchAPI(action.formikDate);
    else if (action.type === "submitted") return fetchAPI(action.values);
  }
  const [availableTimes, dispatch] = React.useReducer(
    updateTimes,
    initialState
  );

  function deleteFunc() {
    setValues([]);
  }

  function handleClick(e) {
    e.preventDefault();
    setLoading(1);
    setReservations([...formikValues, ...reservations]);

    setTimeout(() => {
      setLoading({});
      navigate("/confirming");
    }, 1000);
  }

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  return (
    <>
      <BookingForm
        fetchAPI={fetchAPI}
        times={availableTimes}
        dispatch={dispatch}
        formikValues={formikValues}
        setValues={setValues}
        occasions={availableOccasions}
      />
      <div className="centerContent">
        {reservations.length > 0 ? (
          <h2 style={{ textAlign: "center", margin: "10px" }}>
            Your reservations
          </h2>
        ) : null}
        {reservations.length > 0 ? (
          <Button
            variant="outlined"
            style={{ display: "block", margin: "10px  auto" }}
            color="success"
            size="large"
            onClick={() => navigate("/confirming")}
          >
            Go to my reservations <ArrowRight />
          </Button>
        ) : null}
        {formikValues ? (
          <BookingSlots setValues={setValues} formikValues={formikValues} />
        ) : null}
        {formikValues.length > 0 ? (
          <div>
            {" "}
            <Button
              variant="contained"
              size="large"
              style={{ margin: "10px" }}
              onClick={handleClick}
            >
              {loading === 1 ? (
                <CircularProgress style={{ color: "white" }} size={30} />
              ) : (
                <p>Confirm Bookings</p>
              )}
            </Button>
            <Button
              variant="contained"
              color="error"
              size="large"
              onClick={() => deleteFunc()}
            >
              Clear all
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MainBooking;
