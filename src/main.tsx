import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import "./i18n";
import App from "./App";
// import ScrollToTop from "./components/ScrollToTop";
// import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop behavior="auto"> */}
        <App />
        {/* <Toaster */}
        {/* position="top-center"
        toastOptions={{
        duration: 4000,
        style: {
          borderRadius: "12px",
          background: "#0d2144",
          color: "#fff",
          fontSize: "15px",
          padding: "10px 16px",
        }, */}
        {/* success: {
          style: { background: "#059669" }, // xanh ngọc
        },
        error: {
          style: { background: "#dc2626" }, // đỏ
        },
      }} */}
    {/* />   */}
      {/* </ScrollToTop> */}
    </BrowserRouter>
  </React.StrictMode>
);
