import React, { useState } from "react";
import { AppContext } from "./App21";
import { useContext } from "react";
export default function Login() {
  const { users } = useContext(AppContext);
  const [user, setUser] = useState({});
  const [msg, setMsg] = useState();
  const handleSubmit = () => {
    const found = users.find(
      (value) => value.email === user.email && value.pass === user.pass
    );
    if (found) {
      setMsg("Welcome " + found.name);
    } else {
      setMsg("Invalid User or Password");
    }
  };
  return (
    <div style={{ margin: "30px" }}>
      <h3>Login</h3>
      {msg}
      <p>
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
