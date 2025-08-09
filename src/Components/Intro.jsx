import React from "react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Intro = ({ setIsDash }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect( () => {
    setIsDash(!hideNavbar);
  } , [location.pathname , setIsDash])
  
  return (
    <div className=" bg-white flex items-center justify-center gap-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl p-6 bg-white gap-50">
        {/* Left: Image */}

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col space-y-4 p-4">
          {/* Cards */}
          <Card
            title="Total Tubes Cleaned"
            description="View the total number of tubes cleaned in real time."
            color="bg-blue-100"
            titleColor="text-blue-800"
          />
          <Card
            title="Maintenance Completed"
            description="Track completed maintenance tasks"
            color="bg-blue-200"
            titleColor="text-blue-900"
          />
          <Card
            title="Active Alerts & Warnings"
            description="Instantly see any current issues or warnings."
            color="bg-blue-300"
            titleColor="text-blue-900"
          />

          {/* Button */}
          <Link to="/Log In">
            <button
              className="mt-4 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow border-2 border-blue-400 flex items-center space-x-2 hover:bg-blue-50"
              // onClick={(hideNavbar) =>{
              //   if(hideNavbar){
              //     setIsDash(false)
              // }}}
            >
              <span>Way to Dashboard</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 p-4 ">
          <img
            src="Tube Pro1.svg"
            alt="Machine"
            className="rounded-3xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ title, description, color, titleColor }) => (
  <div className={`p-4 rounded-xl shadow ${color}`}>
    <h3 className={`font-bold text-lg ${titleColor}`}>{title}</h3>
    <p className="text-sm text-gray-700 mt-1">{description}</p>
  </div>
);

export default Intro;
