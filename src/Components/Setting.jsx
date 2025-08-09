import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Setting = ({ setIsDash }) => {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>

      {/* Notification Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Notification Settings</h2>
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" className="h-5 w-5" />
        </div>
        <div className="flex justify-between items-center">
          <span>SMS Alerts</span>
          <input type="checkbox" className="h-5 w-5" />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Update Notifications
        </button>
      </div>

      {/* Company Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Company Settings (Orobot)</h2>
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Branch Location"
          className="w-full p-2 border rounded-md"
        />
        <textarea
          placeholder="Department Description"
          className="w-full p-2 border rounded-md"
        ></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Company Info
        </button>
      </div>

      {/* Tube Pro Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Device Settings (Tube Pro)</h2>
        <input
          type="number"
          placeholder="Water Pressure (PSI)"
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Brush RPM"
          className="w-full p-2 border rounded-md"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Apply Device Settings
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 p-6 rounded-2xl shadow-md space-y-4 border border-red-300">
        <h2 className="text-xl font-semibold text-red-700">Danger Zone</h2>
        <Link to="/">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-2">
            Deactivate Account
          </button>
        </Link>
        <Link to="/">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Reset All Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Setting;
