import React from "react";
import { useState } from "react";
export default function App7() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [txt, setTxt] = useState();
  const [filtered, setFiltered] = useState([]);
  const handleSubmit = () => {
    setUsers([...users, user]);
  };
  const handleSearch = () => {
    setFiltered(users.filter((value) => value.city === txt));
  };
  const handleDelete = (n) => {
    setUsers(users.filter((value) => value.name !== n));
  };
  return (
    <div>
      <h1>App7</h1>
      <h2>useState with Arrays and Objects</h2>
      <h3>Registration Form</h3>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Enter Name"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          placeholder="Enter Age"
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, city: e.target.value })}
          placeholder="Enter City"
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <ol>
        {users &&
          users.map((value) => (
            <li key={value.name}>
              {value.name}-{value.age}-{value.city}-
              <button onClick={() => handleDelete(value.name)}>Delete</button>
            </li>
          ))}
      </ol>
      <hr />
      <p>
        <input
          type="text"
          placeholder="Enter City"
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </p>
      <ol>
        {filtered.map((value) => (
          <li key={value.name}>
            {value.name}-{value.age}-{value.city}
          </li>
        ))}
      </ol>
    </div>
  );
}
