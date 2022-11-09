import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GContext from "./Contexts/GContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GContext>
      <App />
    </GContext>
  </React.StrictMode>
);
