import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";
import { ProvideContext } from "./Component/Context";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ProvideContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideContext>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
