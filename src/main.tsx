import React from "react";

import {
  HelmetProvider
} from "react-helmet-async";

import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <React.StrictMode>

   <HelmetProvider>

  <App />

</HelmetProvider>

    {/* Toast Notifications */}
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "16px",
          background: "#111827",
          color: "#fff",
          padding: "16px",
          fontSize: "15px",
        },
      }}
    />

  </React.StrictMode>
);