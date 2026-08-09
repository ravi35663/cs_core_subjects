/*
=> FAANG LEVEL – React Query + Caching + Retry + Sync:
*/
// npm install @tanstack/react-query axios

// main.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);


// api/userApi.js
import axios from "axios";
export const getUsers = () =>
  axios.get("https://jsonplaceholder.typicode.com/users")
       .then(res => res.data);


       // UsersFAANG.jsx
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./api/userApi";

function UsersFAANG() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    staleTime: 60000,   // cache for 1 min
    retry: 2
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return data.map(u => <div key={u.id}>{u.name}</div>);
}

export default UsersFAANG;
