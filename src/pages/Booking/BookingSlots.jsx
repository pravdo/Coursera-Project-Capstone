import { Button } from "@mui/material";
import React from "react";
import { XLg } from "react-bootstrap-icons";
import uuid from "react-uuid";
import Card from "../MUIcomp/Card";

const BookingSlots = ({ formikValues, setValues }) => {
  function handleDelete(slot) {
    const output = formikValues.filter((item) => item !== slot);
    setValues(output);
  }

  return (
    <div className="cardsVertical">
      {formikValues.map((slot) => {
        return (
          <div key={uuid()} className="shopCard">
            <Card item={slot} />
            <Button
              color="error"
              variant="text"
              onClick={() => handleDelete(slot)}
            >
              <XLg size={50} />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default BookingSlots;
