import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="App-Header-Row">
      <h1 style={{ backgroundColor: "yellow", color: "blue" }}>
        React Lessons
      </h1>
      <Link to="/">App1</Link>-<Link to="/app2">App2</Link>-
      <Link to="/app3">App3</Link>-
      <Link to="/app4">App4</Link>-
      <Link to="/app5">App5</Link>-
      <Link to="/app6">App6</Link>-
      <Link to="/app7">App7</Link>
    </div>
  );
}
