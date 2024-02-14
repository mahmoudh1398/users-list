import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "assets/styles/global.css";
import StoreProvider from "store/provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
