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
  FaFilter,
  FaTools,
  FaHistory,
  FaCalendarAlt,
  FaExclamationTriangle,
  FaBars,
} from "react-icons/fa";
import { CircleArrowRight } from "lucide-react";

const CleaningHistory = ({ setIsDash }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const data = [
    { date: "Jan. 5, 2025", cleaned: 220, status: "Completed" },
    { date: "Feb. 13, 2025", cleaned: 219, status: "Completed" },
    { date: "Apr. 21, 2025", cleaned: 220, status: "Completed" },
    { date: "Mar. 5, 2025", cleaned: 190, status: "Completed" },
    { date: "Jan. 5, 2025", cleaned: 120, status: "Completed" },
    { date: "Aug. 7, 2024", cleaned: 340, status: "Completed" },
    { date: "Dec. 15, 2024", cleaned: 101, status: "Completed" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex min-h-screen font-sans bg-sky-50">
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
                <NavItem
                  icon={<FaHistory />}
                  label="History"
                  active={location.pathname === "/Dashboard/History"}
                />
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
                to="/Dashboard/History"
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
        <main className="flex-1 p-4 ">
          <div className="flex justify-between items-center mb-4">
            <CircleArrowRight
              className="lg:hidden left-6"
              onClick={handleClick}
            />
            <div>
              <h1 className="text-2xl font-bold text-sky-800">
                Cleaning History
              </h1>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow">
              <FaFilter />
              <span>Filters</span>
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow p-4 mb-6">
            <table className="w-full text-left">
              <thead className="text-sky-700">
                <tr className="border-b">
                  <th className="p-2">Date</th>
                  <th className="p-2">Tubes Cleaned</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Report</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {data.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-sky-50">
                    <td className="p-2">{row.date}</td>
                    <td className="p-2">{row.cleaned}</td>
                    <td className="p-2">
                      <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {row.status}
                      </span>
                    </td>
                    <td className="p-2 text-blue-500 hover:underline cursor-pointer">
                      View Reports
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Analytics Overview */}
          <div className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-sky-700 mb-2">
              Analytics Overview
            </h2>
            <div className="space-y-2">
              <ProgressBar label="Cleaning Efficiency" value={90} />
              <ProgressBar label="Scheduled Cleanups" value={75} />
              <ProgressBar label="Alert Resolution" value={60} />
            </div>
          </div>
        </main>
      </div>
    </>
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

// Progress Bar
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

export default CleaningHistory;
