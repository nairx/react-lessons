import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
export default function App9() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(0);
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    console.log("FetchUsers Executed");
  };

  useEffect(() => {
    fetchUsers();
  }, [count,count1]);

  return (
    <div>
      {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      <hr />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Update</button>
      <p>{count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Update</button>
    </div>
  );
}
