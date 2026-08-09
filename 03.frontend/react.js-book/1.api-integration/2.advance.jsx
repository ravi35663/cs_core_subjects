import { useEffect, useState } from "react";
import axios from "axios";

function UsersAdvanced() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    axios.get("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then(res => {
        setUsers(res.data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));

    return () => controller.abort();
  }, []);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Failed</p>;

  return users.map(u => <div key={u.id}>{u.name}</div>);
}

export default UsersAdvanced;
