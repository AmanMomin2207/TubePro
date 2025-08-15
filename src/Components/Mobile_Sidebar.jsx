import React , {useState} from "react";
import {Link} from 'lucide-react'

const Mobile_Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
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
  );
};

export default Mobile_Sidebar;
