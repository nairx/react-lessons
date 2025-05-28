import React from "react";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export default function App21() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AppContext.Provider value={{ users, setUsers }}>
        <h1>App21</h1>
        <h2>Assignment</h2>
        <div style={{ display: "flex" }}>
          <div>
            <Register />
          </div>
          <div>
            <Login />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}
