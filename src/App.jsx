import React from "react";
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./auth/login";
import RequireAuth from "./routes/RequireAuth";
import DashBoard from "./pages/dashboard";
import Profile from "./pages/profile";
import NavBar from "./components/Navbar";
import Team from "./pages/team";
import IAdd from "./pages/invoices_form";
import Orders from "./pages/invoices";
import Vendors from "./pages/vendors";
import VAdd from "./pages/vendors_add";
import ROrders from "./pages/release_orders";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import Register from "./auth/register";
import useAuth from "./hooks/useAuth";

function App() {
  const { authed } = useAuth();
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, Sans-serif",
    },
  });
  console.log(authed)
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {authed ? (
          <>
            <NavBar />
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <DashBoard />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/profile/edit"
                element={
                  <RequireAuth>
                    <Team />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/vendors"
                element={
                  <RequireAuth>
                    <Vendors />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/vendors/add"
                element={
                  <RequireAuth>
                    <VAdd />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/invoices"
                element={
                  <RequireAuth>
                    <Orders />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/invoices/add"
                element={
                  <RequireAuth>
                    <IAdd />
                  </RequireAuth>
                }
              />
              <Route
                path="/dashboard/release_orders"
                element={
                  <RequireAuth>
                    <ROrders />
                  </RequireAuth>
                }
              />
            </Routes>
            <Footer />
          </>
        ): <></> }
      </ThemeProvider>
    </div>
  );
}

export default App;
