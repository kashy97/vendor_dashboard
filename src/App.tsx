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

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Flow /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashBoard />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":edit" element={<Team />} />
        </Route>
        <Route path="vendors" element={<Vendors />}>
          <Route path=":add" element={<VAdd />} />
        </Route>
        <Route path="invoices" element={<Orders />}>
          <Route path=":add" element={<IAdd />} />
        </Route>
        <Route path="/release_orders" element={<ROrders />} />
      </Routes>
    </div>
  );
}

export default App;
