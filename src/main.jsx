import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Footer from "./Components/Layout/Footer.jsx";
import NavBar from "./Components/Layout/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <App />
    <Footer></Footer>
  </React.StrictMode>
);
