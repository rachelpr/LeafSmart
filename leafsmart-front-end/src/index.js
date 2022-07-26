import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./contexts/AuthContext";

import App from "./App";

import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

document.title = "LeafSmart - before you leave"

root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
