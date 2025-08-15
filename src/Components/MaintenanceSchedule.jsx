import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/context.jsx";
import { Link } from "react-router-dom";
import userImage from "../assets/User.png";
import { useLocation } from "react-router-dom";
import {
  FaBell,
  FaCog,
  FaSearch,
  FaUser,
  FaChartLine,
  FaTools,
  FaHistory,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaBars,
} from "react-icons/fa";
import { CircleArrowRight } from "lucide-react";

const MaintenanceSchedule = ({ setIsDash }) => {
  const { user } = useContext(UserContext);

  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  if (hideNavbar) {
    setIsDash(false);
  }

  const todayTasks = [
    { time: "10:00 am", title: "System check" },
    { time: "2:00 pm", title: "Equipment Malfunctioning" },
    { time: "10:00 pm", title: "Tube cleaning" },
  ];

  const notifications = [
    { title: "Equipment Malfunction", time: "15 minutes ago" },
    { title: "Low Power Detected", time: "30 minutes ago" },
    { title: "Scheduled Maintenance due", time: "3 hour ago" },
    { title: "High Temperature warming", time: "1 day ago" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-sky-50 font-sans">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-sky-600 text-white flex-col justify-between p-4">
        <div>
          <div className="flex flex-col items-center mb-6">
            <img
              src={userImage}
              alt="User"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <h2 className="mt-2 font-bold text-lg">
              {user?.first_name || "Guest"}
            </h2>
            <p className="text-sm text-sky-100">
              {user?.email || "Not logged in"}
            </p>
          </div>

          <nav className="space-y-4">
            <Link to="/Dashboard">
              <NavItem icon={<FaBars />} label="Dashboard" />
            </Link>
            <Link to="/Dashboard/History">
              <NavItem icon={<FaHistory />} label="History" />
            </Link>
            <Link to="/Dashboard/Maintenance">
              <NavItem
                icon={<FaCalendarAlt />}
                label="Maintenance Schedule"
                active={location.pathname === "/Dashboard/Maintenance"}
              />
            </Link>
            <Link to="/Dashboard/Alerts">
              <NavItem icon={<FaExclamationTriangle />} label="Alerts" />
            </Link>
            <Link to="/Dashboard/Analytics">
              <NavItem icon={<FaChartLine />} label="Analytics" />
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <Link to="/Dashboard/User">
            <NavItem icon={<FaUser />} label="User" />
          </Link>
          <Link to="/Dashboard/Setting">
            <NavItem icon={<FaCog />} label="Setting" />
          </Link>
        </div>
      </aside>

      <div
        id="mobileMenu"
        className={`fixed top-0 ${
          isOpen ? "left-0" : "-left-full"
        } w-3/5 h-full bg-white z-40 shadow-lg transition-all duration-300 lg:hidden`}
      >
        <ul className="flex flex-col p-6 gap-6 text-gray-600 uppercase mt-20">
          <li>
            <Link
              to="/Dashboard/Maintenance"
              className="hover:text-fuchsia-600 pb-4"
              onClick={handleClick}
            >
              <CircleArrowRight
                className="lg:hidden left-6"
                onClick={handleClick}
              />
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              DashBoard
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/History"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/Maintenance"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              Maintenance Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/Alerts"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              Alerts
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/Analytics"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              Analytics
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/User"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/Dashboard/Setting"
              className="hover:text-fuchsia-600"
              onClick={handleClick}
            >
              Setting
            </Link>
          </li>
        </ul>
      </div>

      {/* Main */}
      <main className="flex-1 p-6 ">
        {/* Top Section */}
        <div className="block lg:flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <CircleArrowRight
              className="lg:hidden left-6"
              onClick={handleClick}
            />
            <h1 className="text-2xl font-bold text-sky-800 pb-2 lg:pb-0">
              Maintenance Schedule
            </h1>
          </div>
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 px-4 pr-10 border rounded-full focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="block lg:grid grid-cols-3 gap-6">
          {/* Activity Chart (static) */}
          <div className="col-span-1 bg-white rounded-xl shadow p-4">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">
              Activity
            </h2>
            <div className="h-40 flex items-center justify-center">
              {/* Dummy Line Chart */}
              <img
                src="https://quickchart.io/chart?c={type:'line',data:{labels:['Su','Mo','Tu','We','Th','Fr','Sa'],datasets:[{label:'Activity',data:[100,50,120,80,150,100,200]}]}}"
                alt="Activity Chart"
                className="w-full h-36"
              />
            </div>
          </div>

          {/* Today’s Tasks */}
          <div className="col-span-1">
            <h2 className="text-lg font-bold text-sky-700 mb-2 pt-2 lg:pt-0">
              Today
            </h2>
            <div className="space-y-4">
              {todayTasks.map((task, i) => (
                <div
                  key={i}
                  className="flex items-center bg-white p-4 rounded-xl shadow"
                >
                  <FaBell className="text-sky-600 mr-4" />
                  <div>
                    <h3 className="font-semibold text-sm">{task.title}</h3>
                    <p className="text-gray-500 text-xs">{task.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar & Alerts */}
          <div className="col-span-1 space-y-6 pt-2 lg:pt-0">
            {/* Calendar */}
            <div className="bg-sky-100 rounded-xl p-4 shadow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-sky-800">June 2025</h2>
                <FaCalendarAlt className="text-sky-600" />
              </div>
              <Calendar />
            </div>

            {/* Alerts */}
            <div className="space-y-3 pt-2 lg:pt-0 pb-2 lg:pb-2">
              {notifications.map((note, i) => (
                <div key={i} className="bg-white rounded-xl p-3 shadow text-sm">
                  <p className="font-semibold text-sky-700">{note.title}</p>
                  <p className="text-gray-500">{note.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sidebar Nav Item
const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center px-4 py-2 rounded-full cursor-pointer ${
      active ? "bg-white text-sky-700 font-semibold" : "hover:bg-sky-500"
    }`}
  >
    <div className="mr-3">{icon}</div>
    <span>{label}</span>
  </div>
);

// Dummy Calendar Component
const Calendar = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  return (
    <div>
      <div className="grid grid-cols-7 text-xs text-gray-600 mb-1">
        {days.map((day) => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {dates.map((date) => (
          <div
            key={date}
            className={`p-1 rounded-full ${
              [9, 14, 23].includes(date)
                ? "bg-sky-600 text-white"
                : "hover:bg-sky-200"
            }`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceSchedule;
