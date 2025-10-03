import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import PlayGround from "./PlayGround";

const App = () => {
  const [text, setText] = useState(
    "You are not authenticated, Please Log in first"
  );
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  useEffect(() => {
    isAuthenticate === true
      ? setText("Logged in, Now you can enter Playground")
      : setText("You are not authenticated, Please Log in first");
  }, [isAuthenticate]);

  return (
    <div className="main-container">
      <h3>{text}</h3>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <PlayGround />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setIsAuthenticate={setIsAuthenticate} />}
        ></Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
