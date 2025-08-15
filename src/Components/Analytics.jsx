import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/context.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircleArrowRight } from "lucide-react";
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
import { Link } from "react-router-dom";

const Analytics = ({ setIsDash }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const tubeData = [
    { name: "Jan", value: 80 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 95 },
    { name: "Apr", value: 150 },
    { name: "May", value: 110 },
    { name: "Jun", value: 200 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-h-screen flex font-sans bg-sky-50 ">
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
                />
              </Link>
              <Link to="/Dashboard/Alerts">
                <NavItem icon={<FaExclamationTriangle />} label="Alerts" />
              </Link>
              <Link to="/Dashboard/Analytics">
                <NavItem
                  icon={<FaChartLine />}
                  label="Analytics"
                  active={location.pathname === "/Dashboard/Analytics"}
                />
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
                to="/Dashboard/Analytics"
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
        <main className="flex-1 p-6">
          <div className="flex items-center mb-6 gap-3">
            <CircleArrowRight
              className="lg:hidden left-6"
              onClick={handleClick}
            />
            <h2 className="text-2xl font-bold text-[#1c2c7c] ">
              Analytics
            </h2>
          </div>

          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#cfe1f7] rounded-lg p-4 text-center shadow-md">
              <p className="text-sm text-[#1c2c7c] font-semibold mb-1">
                Total Tubes Cleaned
              </p>
              <h3 className="text-3xl font-bold text-[#1c2c7c]">1265</h3>
            </div>
            <div className="bg-[#cfe1f7] rounded-lg p-4 text-center shadow-md">
              <p className="text-sm text-[#1c2c7c] font-semibold mb-1">
                Maintenance Completed
              </p>
              <h3 className="text-3xl font-bold text-[#1c2c7c]">453</h3>
            </div>
            <div className="bg-[#cfe1f7] rounded-lg p-4 text-center shadow-md">
              <p className="text-sm text-[#1c2c7c] font-semibold mb-1">
                Active Alerts & Warnings
              </p>
              <h3 className="text-3xl font-bold text-[#1c2c7c]">4</h3>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-[#cfe1f7] rounded-lg p-5 mb-6 shadow-md">
            <h3 className="text-lg font-semibold text-[#1c2c7c] mb-4">
              Tube Cleaning Activity
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={tubeData}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#1c2c7c"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Analytics Overview Bars */}
          <div className="bg-[#cfe1f7] rounded-lg p-5 shadow-md">
            <h3 className="text-lg font-semibold text-[#1c2c7c] mb-4">
              Analytics Overview
            </h3>
            <div className="space-y-4">
              <div className="w-full h-3 bg-white rounded-full ">
                <div className="bg-[#0d6efd] h-full w-[90%] rounded-full"></div>
              </div>
              <div className="w-full h-3 bg-white rounded-full">
                <div className="bg-[#0d6efd] h-full w-[70%] rounded-full"></div>
              </div>
              <div className="w-full h-3 bg-white rounded-full ">
                <div className="bg-[#0d6efd] h-full w-[50%] rounded-full"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Analytics;

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
