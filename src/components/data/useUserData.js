import { useEffect, useState } from "react";
function useGetUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:8080/users/getAll");
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return users;
}
export default useGetUsers;
