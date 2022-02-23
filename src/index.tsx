import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </StyledEngineProvider>,
  document.getElementById("root")
);
