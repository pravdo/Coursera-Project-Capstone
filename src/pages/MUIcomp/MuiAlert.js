import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const MuiAlert = ({ open, alertMsg, setOpen, isSuccess }) => {
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      {isSuccess ? (
        <Dialog
          open={open}
          fullWidth
          maxWidth={"sm"}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{ bgcolor: "success.main" }}
            style={{ color: "white" }}
          >
            {"Successfull operation !"}
          </DialogTitle>
          <DialogContent sx={{ bgcolor: "success.main" }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              style={{ color: "white" }}
            >
              {alertMsg}
            </DialogContentText>
          </DialogContent>
          <DialogActions
            style={{ color: "white" }}
            sx={{ bgcolor: "success.main" }}
          >
            <Button onClick={handleClose} style={{ color: "white" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      ) : (
        <Dialog
          open={open}
          fullWidth
          maxWidth={"sm"}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{ bgcolor: "error.main" }}
            style={{ color: "white" }}
          >
            {"Error !"}
          </DialogTitle>
          <DialogContent sx={{ bgcolor: "error.main" }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              style={{ color: "white" }}
            >
              {alertMsg}
            </DialogContentText>
          </DialogContent>
          <DialogActions
            style={{ color: "white" }}
            sx={{ bgcolor: "error.main" }}
          >
            <Button onClick={handleClose} style={{ color: "white" }}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default MuiAlert;
