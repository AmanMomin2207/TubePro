import React, { useState } from "react";
import { User, CircleUser, List } from "lucide-react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex bg-sky-100 shadow-xl mt-2 fixed w-full z-50">
        <div className="flex items-center w-1/2 ">
          <img
            src="orbot.svg"
            alt="orbot symbol"
            className="px-4 h-3/4 w-3/4 md:h-auto md:w-auto"
          />
          <img
            src="Tube Pro.svg"
            alt="Tube Pro Symbol"
            className="h-6 w-3/4 md:h-auto md:w-auto"
          />
          <List
            className=" md:hidden visible h-1/2 w-1/6 absolute end-10 "
            onClick={handleClick}
          />
        </div>
        <div
          id="mobileMenu"
          className={`fixed top-0 ${ isOpen ? "left-0" : "-left-full" } w-3/5 h-full bg-white z-40 shadow-lg transition-all duration-300 lg:hidden`}
        >
          <ul className="flex flex-col p-6 gap-6 text-gray-600 uppercase mt-20">
            <li>
              <Link to="/" className="hover:text-fuchsia-600" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Our Service" className="hover:text-fuchsia-600" onClick={handleClick}>
                Our Service
              </Link>
            </li>
            <li>
              <Link to="/About Us" className="hover:text-fuchsia-600" onClick={handleClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/Contact Us" className="hover:text-fuchsia-600" onClick={handleClick}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/Sign Up" className="hover:text-fuchsia-600" onClick={handleClick}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-sky-500 md:w-1/2 text-lg rounded-l-4xl flex items-center">
          <div className="md:flex justify-around items-center align-content w-full hidden md:visible">
            <Link to="/">Home</Link>
            <Link to="/Our Service">Our Services</Link>
            <Link to="/About Us">About Us</Link>
            <Link to="/Contact Us">Contact Us</Link>
            <Link to="/Sign Up">
              <CircleUser />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
