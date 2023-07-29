import { useEffect, useState, useRef } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

const BASE_URL = "http://localhost:8000";

function App() {
  const [userData, setUserData] = useState(null);
  const fetchUsersData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUsers`);

    setUserData(resp.data.users);
  };
  useEffect(() => {
    fetchUsersData();
  }, []);
  const fetchData = () => {
    return "hello";
  };
  const ref = useRef(0);

  useEffect(() => {
    ref.current = 3;
  }, []);
  return (
    <div className="App">
      <div>{fetchData()}</div>
      <div>{ref.current}</div>
      {/* Form Component */}
      <Form fetchUsersData={fetchUsersData} BASE_URL={BASE_URL} />
      {/* All users list */}
      <UsersList
        userData={userData}
        setUserData={setUserData}
        fetchUsersData={fetchUsersData}
        BASE_URL={BASE_URL}
      />

      <Toaster />
    </div>
  );
}

export default App;
