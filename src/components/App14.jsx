import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App14() {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await axios(url);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>App14</h1>
      <h2>useEffect hook to fetch api</h2>
      <p>
        <input type="text" placeholder="Search name" />
      </p>
      <ol>
        {users &&
          users.map((value) => (
            <li key={value.id}>
              {value.name}, {value.email}, {value.phone}
            </li>
          ))}
      </ol>
    </div>
  );
}
