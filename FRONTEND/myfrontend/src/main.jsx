import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import axios from "axios";
// import Cookies from "js-cookie";
import WordCount from "./components/WordCount"

// axios.interceptors.request.use((config) => {
//   const token = Cookies.get("jwtToken");
//   if (token) {
//     config.headers.Authorization = `Token ${token}`;
//   }
//   return config;
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wordcount" element={<WordCount />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
