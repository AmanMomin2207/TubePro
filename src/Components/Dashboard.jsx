import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/context.jsx";
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
import userImage from "../assets/User.png";
import { useLocation, Link } from "react-router-dom";

const Dashboard = ({ setIsDash }) => {
  const location = useLocation();
  const { user } = useContext(UserContext);
  // console.log(user);
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-h-screen flex font-sans bg-sky-50">
        {/* Sidebar */}
        <aside
          className={
            "lg:flex hidden w-64 bg-sky-600 text-white flex-col justify-between p-4"
          }
        >
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
                <NavItem
                  icon={<FaBars />}
                  label="Dashboard"
                  active={location.pathname === "/Dashboard"}
                />
              </Link>
              <Link to="/Dashboard/History">
                <NavItem icon={<FaHistory />} label="History" />
              </Link>
              <Link to="/Dashboard/Maintenance">
                <NavItem
                  icon={<FaCalendarAlt />}
                  label="Maintenance Schedule"
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
                to="/Dashboard"
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

        {/* Main Dashboard */}
        <main className="flex-1 p-6 lg:w-full ">
          {/* Header */}
          <div className="block lg:flex justify-between items-center mb-6 lg:w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between items-center gap-2">
                <CircleArrowRight
                  className="lg:hidden left-6"
                  onClick={handleClick}
                />
                <h1 className="text-2xl font-bold text-sky-700 py-2 px-0 lg:p-0 flex items-center">
                  Welcome {user?.first_name || "Not logged in"}!
                </h1>
              </div>
            </div>
            <div className="block lg:flex items-center space-x-4">
              <div className="relative pb-2 w-3/4 lg:w-full">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-full bg-white shadow outline-none border border-gray-200 "
                />
                <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              {user.role === "Admin" && (
                <Link to="/Dashboard/Admin">
                  <button className="flex items-center space-x-2 bg-white border px-4 py-2 rounded-full shadow">
                    <span className="text-sky-700 font-semibold">Admin</span>
                    <FaUser className="text-sky-600" />
                  </button>
                </Link>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            <StatCard title="Total Tubes Cleaned" value="1257" percent="+12%" />
            <StatCard title="Maintenance Completed" value="120" percent="+5%" />
            <StatCard
              title="Active Alerts & Warnings"
              value="3"
              percent="-2%"
            />
          </div>

          {/* Graphs and Alerts */}
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Tube Cleaning Activity */}
            <div className="col-span-2 bg-white p-4 rounded-xl shadow w-3/4 lg:w-full">
              <h2 className="font-semibold text-lg text-sky-700 mb-2">
                Tube Cleaning Activity
              </h2>
              <div className="h-40 bg-sky-100 rounded-md flex items-center justify-center text-sky-400 italic">
                {/* Placeholder for chart */}
                [Graph Here]
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white p-4 rounded-xl shadow w-3/4 lg:w-full">
              <h2 className="font-semibold text-lg text-sky-700 mb-2">
                Recent Alerts
              </h2>
              <AlertItem title="Equipment Malfunction" time="15 minutes ago" />
              <AlertItem title="Low Power Detected" time="1 hour ago" />
              <AlertItem title="Scheduled Maintenance due" time="3 hour ago" />
              <AlertItem title="High Temperature warning" time="1 day ago" />
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="mt-6 bg-white p-4 rounded-xl shadow w-3/4 lg:w-full">
            <h2 className="font-semibold text-lg text-sky-700 mb-2">
              Analytics Overview
            </h2>
            <div className="space-y-2">
              <ProgressBar label="Equipment Health" value={80} />
              <ProgressBar label="Power Usage" value={65} />
              <ProgressBar label="Alert Resolution" value={50} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

// Sidebar Item Component
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

// Stat Card Component
const StatCard = ({ title, value, percent }) => (
  <div className="bg-white rounded-xl shadow p-4 w-3/4 lg:w-full">
    <div className="text-sm text-gray-600">{title}</div>
    <div className="text-3xl font-bold text-sky-700">{value}</div>
    <div className="text-green-500 text-sm">{percent}</div>
  </div>
);

// Alert Item Component
const AlertItem = ({ title, time }) => (
  <div className="bg-sky-100 p-2 rounded-md mb-2">
    <div className="font-medium text-sky-800">{title}</div>
    <div className="text-xs text-sky-600">{time}</div>
  </div>
);

// ProgressBar Component
const ProgressBar = ({ label, value }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="w-full bg-sky-100 h-3 rounded-full">
      <div
        className="bg-sky-500 h-3 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

export default Dashboard;
