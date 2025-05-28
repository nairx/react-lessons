import React, { useState } from "react";
import { AppContext } from "./App21";
import { useContext } from "react";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  return (
    <div style={{ margin: "30px" }}>
      <h3>Register</h3>
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
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
          placeholder="New Password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      {users && users.map(value=>(
        <li>{value.name}-{value.email}-{value.pass}</li>
      ))}
    </div>
  );
}
