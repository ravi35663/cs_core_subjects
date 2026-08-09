/*
ENTERPRISE – Service Layer + Axios Instance:
*/
// api/http.js
import axios from "axios";

export const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

// api/userService.js
import { http } from "./http";

export const fetchUsers = () => http.get("/users");

// UsersEnterprise.jsx
import { useEffect, useState } from "react";
import { fetchUsers } from "./api/userService";

function UsersEnterprise() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(res => setUsers(res.data));
  }, []);

  return users.map(u => <p key={u.id}>{u.name}</p>);
}

export default UsersEnterprise;
