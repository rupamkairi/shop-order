import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppConextProvider } from "./contexts/AppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppConextProvider>
      <App />
    </AppConextProvider>
  </React.StrictMode>
);
