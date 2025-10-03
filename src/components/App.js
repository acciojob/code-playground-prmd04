import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PlayGround from "./PlayGround";

const App = () => {
  const [text, setText] = useState(
    "You are not authenticated, Please login first"
  );
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  useEffect(() => {
    setText(
      isAuthenticate
        ? "Logged in, Now you can enter Playground"
        : "You are not authenticated, Please login first"
    );
  }, [isAuthenticate]);

  return (
    <div className="main-container">
      <h3>{text}</h3>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Routes>
        {/* Redirect root '/' to '/login' so Cypress sees correct URL */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login page */}
        <Route
          path="/login"
          element={<Login setIsAuthenticate={setIsAuthenticate} />}
        />

        {/* Playground private route */}
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <PlayGround />
            </PrivateRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
