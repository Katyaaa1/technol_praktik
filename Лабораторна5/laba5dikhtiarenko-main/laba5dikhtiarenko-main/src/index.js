import React from "react";
import ReactDOM from "react-dom/client"; // <-- Update import
import App from "./App";
import "./index.css";

// Use createRoot instead of render for React 18 and later
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
