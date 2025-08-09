import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TubeProDescription1 from "./TubeProDescription1";
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";

const TubeProDescription0 = ({ setIsDash }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);
  return (
    <div>
      <div className="p-26">
        <div className=" bg-white flex flex-col md:flex-row items-center justify-around px-6 md:px-16 py-16 overflow-hidden">
          {/* Left text content */}
          <div className="max-w-md z-10">
            <h2 className="text-5xl md:text-3xl font-bold text-blue-900 mb-4">
              We Are <span className="text-blue-800">Orobot</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At the forefront of robotics and automation, revolutionizing
              industry 4.0. Specializing in tailored solutions for industry
              challenges, we focus on automating Heat Exchanger cleaning in
              sugar factories. Our dedicated team is committed to enhancing
              productivity, efficiency, and safety, ensuring cost-effective
              operations. Early in our journey, Orobot is poised to make a
              significant impact in the realm of robotics and automation.
            </p>
          </div>

          {/* Right image section */}
          <div className="relative mt-10 md:mt-0 z-10">
            <p className="text-3xl font-semibold text-gray-800 mb-2 text-left">
              The
            </p>
            <h2 className="text-5xl font-bold text-sky-500 mb-4 text-left">
              Tube Pro
            </h2>

            {/* Image with navigation arrows */}
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-blue-700">
                <ChevronLeft size={30} />
              </button>

              <div className="mx-4 rounded-[50%/30%] overflow-hidden border-4 border-black shadow-md">
                <img
                  src="Hero.svg"
                  alt="Tube Pro Machine"
                  className="w-[300px] h-[220px] object-cover"
                />
              </div>

              <button className="text-gray-600 hover:text-blue-700">
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <TubeProDescription1 setIsDash={setIsDash}/>
    </div>
  );
};

export default TubeProDescription0;
