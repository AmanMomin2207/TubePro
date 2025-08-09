import React, { useState } from "react";
import { CircleUser, UserCircle, ChevronDown } from "lucide-react";

const Admin_btn = ({ role, setRole }) => {
  const handleChange = (e) => {
    const role = e.target.value ;
    // setList({
    //   ...list,
    //   role,
    // });
    // console.log(role);
    setRole(role)
  };
  return (
    <>
      <div className="relative flex items-center pl-20">
        <select
          value={role}
          onChange={handleChange}
          className="appearance-none pl-10 pr-8 py-2 rounded-full bg-blue-50 text-blue-900 font-medium text-sm border-none focus:outline-none cursor-pointer"
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>

        {/* Left Icon */}
        <div className="absolute left-23 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <UserCircle size={18} className="text-blue-900" />
        </div>

        {/* Right Chevron */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown size={16} className="text-blue-900" />
        </div>
      </div>
    </>
  );
};

export default Admin_btn;
