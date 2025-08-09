import "./App.css";
import Navbar from "./Components/Navbar";
import { UserContext, UsersContext } from "./Context/context";
import Home from "./Components/Home";
import React, { useEffect, useState } from "react";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TubeProDescription0 from "./Components/TubeProDescription0";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import CleaningHistory from "./Components/CleaningHistory";
import MaintenanceSchedule from "./Components/MaintenanceSchedule";
import Alerts from "./Components/Alerts";
import Analytics from "./Components/Analytics";
import User from "./Components/User_page";
import Setting from "./Components/Setting";
import Admin_Page from "./Components/Admin_Page";

function App() {
  const defaultUser = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  };
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    let parsed;
    try {
      if (stored && stored != undefined) {
        parsed = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
    }
    return parsed && typeof parsed === "object" ? parsed : defaultUser;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const [isDash, setIsDash] = useState(true);
  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("users");
    let parsed = null;

    try {
      if (stored && stored !== "undefined") {
        parsed = JSON.parse(stored);
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
    }

    return parsed && parsed.length > 0
      ? parsed
      : [
          {
            id: 0,
            first_name: "Muddassir",
            last_name: "Momin",
            email: "momin@gmail.com",
            password: "123",
            role: "Admin",
          },
        ];
  });
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // localStorage.removeItem("users")

  const addusers = (user) => {
    let found = false;

    // console.log(users)
    users.map((use) => {
      // console.log(use.email)
      if (use["email"] === user["email"]) found = true;
    });

    // console.log(found)
    if (found === false) {
      // console.log(found)
      setUsers([...users, user]);
    } else {
      alert("User already exists");
    }
    // console.log(users);
    return found;
  };
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          {/* {!(location.pathname.startsWith("/Dashboard")) && <Navbar/>} */}
          {isDash && <Navbar />}

          <Routes>
            <Route path="/" element={<Home setIsDash={setIsDash} />}></Route>

            <Route
              path="/Our Service"
              element={<Services setIsDash={setIsDash} />}
            ></Route>

            <Route
              path="/About Us"
              element={<TubeProDescription0 setIsDash={setIsDash} />}
            ></Route>

            <Route
              path="/Contact Us"
              element={<Contact setIsDash={setIsDash} />}
            ></Route>

            <Route
              path="/Sign Up"
              element={
                <SignUp
                  setIsDash={setIsDash}
                  setUsers={setUsers}
                  users={users}
                  addusers={addusers}
                />
              }
            ></Route>

            <Route
              path="/Log In"
              element={<Login setIsDash={setIsDash} users={users} />}
            ></Route>

            <Route
              path="/Dashboard"
              element={<Dashboard setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/History"
              element={<CleaningHistory setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/Maintenance"
              element={<MaintenanceSchedule setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/Alerts"
              element={<Alerts setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/Analytics"
              element={<Analytics setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/User"
              element={<User setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/Setting"
              element={<Setting setIsDash={setIsDash} />}
            />

            <Route
              path="/Dashboard/Admin"
              element={<Admin_Page setIsDash={setIsDash} />}
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </UsersContext.Provider>
  );
}

export default App;
