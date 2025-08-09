import React from "react";
import {useLocation} from  'react-router-dom';
import { useEffect } from "react";

const Services = ({ setIsDash }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  return (
    <div className="lg:p-26 pt-20 ">
      <section id="Our Services" className="px-8 py-10">
        <h2 className="text-5xl font-bold text-blue-900 mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="Juice-Heater.svg"
              alt="Juice Heater Body Tubes Cleaning"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-blue-900 font-medium">Juice Heater Body</p>
              <p className="text-blue-900 font-medium">Tubes Cleaning</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="Evaporate-body.png"
              alt="Evaporator Body Tubes Cleaning"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-blue-900 font-medium">Evaporater Body</p>
              <p className="text-blue-900 font-medium">Tubes Cleaning</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
