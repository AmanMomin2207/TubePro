import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Intro from "./Intro";

const Home = ({ setIsDash }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  return (
    <>
      <section id="Home" className="p-16">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 h-{600px} text-5xl text-sky-500 font-bold pt-20 sm:pl-20 pl-4">
            <h1 className="text-1/2 text-black pb-4">The</h1>
            <h3 className="text-1/2 pb-4">Tube Pro</h3>
            <h4 className="text-1/2 text-blue-800 pb-4">Operation Center</h4>
            <p className="text-xl pt-16">
              {" "}
              Monitor and Optimize Your Tube <br /> Cleaning Operations in Real
              Time
            </p>
            <p className="text-xl mt-16 ml-8 px-30 py-4 bg-sky-500 w-1/4 flex items-center justify-center text-blue-800 rounded-xl">
              {" "}
              ##########{" "}
            </p>
          </div>
          <div className="mt-15 flex justify-center items-center">
            <img
              src="Hero.svg"
              alt="One of the Machine of Tube"
              className=" md:w-auto"
            />
          </div>
        </div>
      </section>
      <Intro setIsDash  = {setIsDash } />
    </>
  );
};

export default Home;
