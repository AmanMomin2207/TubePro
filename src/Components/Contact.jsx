import React from "react";
import {useLocation} from 'react-router-dom';
import { useEffect } from "react";

const Contact = ({ setIsDash }) => {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  return (
    <div className="p-16">
      <div className="bg-white flex flex-col md:flex-row items-center justify-around px-6 md:px-20 py-16 overflow-hidden">
        {/* Left Form */}
        <div className="max-w-md w-full space-y-4 z-10">
          <h2 className="text-2xl font-bold text-blue-900">Contact Us</h2>
          <p className="text-blue-700 font-medium">
            Reach out and Experience Innovation at Its Best !
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-blue-50 placeholder-gray-400 shadow-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-blue-50 placeholder-gray-400 shadow-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full px-4 py-2 rounded-md bg-blue-50 placeholder-gray-400 shadow-md outline-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Enter message"
                className="w-full px-4 py-2 rounded-md bg-blue-50 placeholder-gray-400 shadow-md outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 font-semibold rounded-md shadow hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0 z-10">
          <img
            src="Contact.png"
            alt="Contact Illustration"
            className="w-[300px] md:w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
