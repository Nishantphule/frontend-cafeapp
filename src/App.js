// import { createContext, useState } from 'react';
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import { Badge } from '@mui/material';
import { useCartContext } from "./Context/cartContext";
import { useEffect, useState } from "react";

function App() {

  const navigate = useNavigate();

  const { total_item } = useCartContext();
  const [badge, setBadge] = useState(0)

  useEffect(() => { setBadge(total_item) }, [total_item])

  return (
    <>
      <Paper
        elevation={8}
        sx={{ background: "primary", minHeight: "100vh", borderRadius: "0px" }}
      >
        <AppBar className="navBar" position="sticky">
          <Toolbar sx={{ padding: "5px", marginTop: "2px", alignContent: "center" }}>
            <Button
              size="large"
              aria-label="home"
              color="inherit"
              onClick={() => navigate("/")}
            >
              Menu
            </Button>


            <Button
              size="medium"
              startIcon={<ShoppingCartIcon />}
              aria-label="home"
              color="inherit"
              variant="outlined"
              sx={{ padding: "5px", marginLeft: "auto" }}
              onClick={() => navigate("/cart")}
            >
              <Badge badgeContent={badge} >
              </Badge>
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
