import { useState } from "react";
import { Toaster } from "react-hot-toast";
import axios from "axios";

import "./App.css";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

const BASE_URL = "https://mern-crud-0bm0.onrender.com";

function App() {
  const [userData, setUserData] = useState(null);
  const fetchUsersData = async () => {
    const resp = await axios.get(`${BASE_URL}/getUsers`);

    setUserData(resp.data.users);
  };
  fetchUsersData();

  return (
    <div className="App">
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
