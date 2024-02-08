// import { createContext, useState } from 'react';
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Paper
        elevation={8}
        sx={{ background: "primary", minHeight: "100vh", borderRadius: "0px" }}
      >
        <AppBar className="navBar" position="static">
          <Toolbar>
            <Button
              size="large"
              startIcon={<MenuBookIcon />}
              aria-label="home"
              color="inherit"
              onClick={() => navigate("/")}
            >
              Home
            </Button>

            <Button
              size="large"
              sx={{ marginLeft: "auto" }}
              startIcon={<ShoppingCartIcon />}
              aria-label="home"
              color="inherit"
              onClick={() => navigate("/cart")}
            >
              Cart
            </Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Paper >
    </>
  );
}

export default App;
