import React from "react";
import WarningAlert from "../MUIcomp/WarningAlert";
import { Button } from "@mui/material";
import Card from "../MUIcomp/Card";
import { XLg } from "react-bootstrap-icons";

const MainOrder = () => {
  const orders = JSON.parse(localStorage.getItem("order"));

  function deleteFunc(order) {
    const output = orders.filter((item) => item !== order);

    localStorage.setItem("order", JSON.stringify(output));
    window.location.reload();
  }

  function deleteAll() {
    localStorage.removeItem("order");
    window.location.reload();
  }

  return (
    <div className="centerContent">
      {orders === null || orders.length === 0 ? (
        <WarningAlert />
      ) : (
        <>
          <div className="cardsVertical">
            {orders.map((order, index) => (
              <div className="shopCard" key={index}>
                <Card item={order} />
                <Button
                  variant="text"
                  color="error"
                  size="large"
                  onClick={() => deleteFunc(order)}
                >
                  <XLg size={50} />
                </Button>
              </div>
            ))}
          </div>
          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={() => deleteAll()}
          >
            Clear all
          </Button>
        </>
      )}
    </div>
  );
};

export default MainOrder;
