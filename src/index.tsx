import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.render(
  <StyledEngineProvider>
    <React.StrictMode>
      <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  </StyledEngineProvider>,
  document.getElementById("root")
);
