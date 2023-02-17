import React from "react";
import Dialog from "@mui/material/Dialog";
// import ListItemText from "@mui/material/ListItemText";
// import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { UseMuiContext } from "../../context/MuiContextProvider";
import { XLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const FullScDialog = () => {
  const { openModal, setOpen } = UseMuiContext();

  function handleClose() {
    setOpen(!openModal);
  }

  return (
    <>
      <Dialog fullScreen open={openModal} onClose={!openModal}>
        <AppBar
          style={{ backgroundColor: "white" }}
          sx={{ position: "relative" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <a href="/">
              <img
                src="/icons_assets/Logo.svg"
                className="link link-center"
                alt="img"
              />
            </a>
            <XLg color="black" cursor="pointer" onClick={handleClose} />
          </Toolbar>
        </AppBar>
        <List>
          <li>
            <Link to="/" className="link-center" onClick={handleClose}>
              <h1>Home</h1>
            </Link>
          </li>
          <Divider />
          <li>
            <Link to="/about" className="link-center" onClick={handleClose}>
              <h1>About</h1>
            </Link>
          </li>
          <Divider />
          <li>
            <a
              href="/icons_assets/menu.webp"
              className="link link-center"
              target="_blank"
            >
              <h1>Menu</h1>
            </a>
          </li>
          <Divider />
          <li>
            <Link to="/booking" className="link-center" onClick={handleClose}>
              <h1>Reservations</h1>
            </Link>
          </li>
          <Divider />
          <li>
            <Link to="/order" className="link-center" onClick={handleClose}>
              <h1>Order</h1>
            </Link>
          </li>
          <Divider />
          <li>
            <Link to="/login" className="link-center" onClick={handleClose}>
              <h1>Login</h1>
            </Link>
          </li>
          <Divider />
        </List>
      </Dialog>
    </>
  );
};

export default FullScDialog;
