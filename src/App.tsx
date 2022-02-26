import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import DashBoard from "./pages/dashboard";
import Profile from "./pages/profile";
import NavBar from "./components/Navbar";
// import Flow from "./components/flow";
import Team from "./pages/team";
import IAdd from "./pages/invoices_form";
import Orders from "./pages/invoices";
import Vendors from "./pages/vendors";
import VAdd from "./pages/vendors_add";
import ROrders from "./pages/release_orders";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Sans-serif",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar />
      {/* <Flow /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<Team />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendors/add" element={<VAdd />} />
        <Route path="/invoices" element={<Orders />} />
        <Route path="/invoices/add" element={<IAdd />} />
        <Route path="/release_orders" element={<ROrders />} />
      </Routes>
      <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
