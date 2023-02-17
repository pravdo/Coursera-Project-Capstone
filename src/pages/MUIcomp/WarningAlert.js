import React from "react";
import { Alert, AlertTitle } from "@mui/material";

const WarningAlert = () => {
  return (
    <>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        <p>You don't have any orders yet</p> — <strong>check it out!</strong>
      </Alert>
    </>
  );
};

export default WarningAlert;
