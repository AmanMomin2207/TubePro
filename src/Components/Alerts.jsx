import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/context.jsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";
import {
  FaBell,
  FaCog,
  FaSearch,
  FaUser,
  FaTimes,
  FaChartLine,
  FaTools,
  FaHistory,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaBars,
} from "react-icons/fa";
import userImage from "../assets/User.png";
const alerts = [
  "Equipment Malfunctioning",
  "Tube cleaning machine failure",
  "Low water pressure detected",
  "Maintenance overdue",
  "Tube 1 needs cleaning",
  "Tube 2 needs cleaning",
];

export default function Alerts({ setIsDash }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
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
              <NavItem icon={<FaCalendarAlt />} label="Maintenance Schedule" />
            </Link>
            <Link to="/Dashboard/Alerts">
              <NavItem
                icon={<FaExclamationTriangle />}
                label="Alerts"
                active={location.pathname === "/Dashboard/Alerts"}
              />
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
              to="/Dashboard/Alerts"
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

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex items-center justify-start gap-3 mb-4">
          <CircleArrowRight
            className="lg:hidden left-6"
            onClick={handleClick}
          />
          <h1 className="text-2xl font-bold text-blue-900 ">Alters</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-4">
          {["All", "Active", "Resolved"].map((filter, index) => (
            <button
              key={index}
              className={`px-4 py-1 rounded-full border ${
                filter === "Active"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Alerts List */}
        <div className="bg-white rounded-lg shadow p-4 space-y-2">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b last:border-none py-2"
            >
              <div className="flex items-center gap-3 text-blue-900">
                <FaBell />
                <span>{alert}</span>
              </div>
              <FaTimes className="cursor-pointer hover:text-red-500" />
            </div>
          ))}
        </div>

        {/* Analytics Overview */}
        <div className="mt-6 bg-blue-100 p-4 rounded-lg">
          <h2 className="font-semibold text-blue-900 mb-2">
            Analytics Overview
          </h2>
          <div className="space-y-3">
            <div className="w-full bg-blue-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full w-3/4"></div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full w-1/2"></div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full w-2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
