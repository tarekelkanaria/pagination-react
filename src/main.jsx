import React from "react";
import ReactDOM from "react-dom/client";
import PaginateProvider from "./store/PaginateProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PaginateProvider>
      <App />
    </PaginateProvider>
  </React.StrictMode>
);
