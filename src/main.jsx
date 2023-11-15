import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import { ImageProvider } from "./context/ImageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <ImageProvider>
        <App />
      </ImageProvider>
    </AppProvider>
  </React.StrictMode>
);
