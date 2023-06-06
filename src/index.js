import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hello from "./Hello";
import Newcomp from "./components/Newcomp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Hello />
    <Newcomp />
  </React.StrictMode>
);
