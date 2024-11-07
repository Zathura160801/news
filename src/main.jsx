import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./pages/App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/:id" element={<App />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
