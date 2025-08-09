import React from "react";
import {useLocation} from 'react-router-dom'
import { useEffect } from "react";

function TubeProDescription1({ setIsDash }) {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);
  return (
    <div className="bg-white px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-around overflow-hidden">
      {/* Left content */}
      <div className="max-w-xl z-10">
        <h2 className="text-5xl font-bold text-blue-900">
          <span className="block text-3xl text-blue-900">The</span>
          <span className="text-5xl text-blue-700">Tube Pro</span>
        </h2>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          Groundbreaking solution to revolutionize industrial cleaning.
          Specifically crafted for Heat Exchangers used in sugar factories,
          TubePro automates the labor intensive task, increasing speed and
          precision. With design modularity, it can be made to work with any
          shell and tube type heat exchangers just by varying the length of its
          axes. With specialized nozzles and controlled feed, it gives you
          absolute control over how well the tubes are cleaned. Live video feed
          from camera lets the users operate the robot away from harmful
          environment in safety and also lets them perform visual inspection.
          <br />
          <br />
          TubePro is a transformative step towards streamlined industrial
          processes, reducing downtime, minimizing costs, ensuring sustainable
          operations and reducing human health hazard. Welcome to the future of
          industrial cleaning with TubePro.
        </p>
      </div>

      {/* Right image */}
      <div className="mt-10 md:mt-0 md:ml-12 z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="Tube Pro2.svg"
            alt="Tube Pro Close"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default TubeProDescription1;
