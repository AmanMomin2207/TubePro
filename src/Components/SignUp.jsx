import React, { useState , useContext }  from "react";
import { UserContext  } from "../Context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Admin_btn from "./Admin_btn";

export default function SignUp({ setIsDash, users, addusers }) {
  const [role , setRole ] = useState("Admin");
  useEffect( () => {
    setList({
      ...list,
      role : role
    })
  } , [role])
  const { setUser } = useContext(UserContext)
  const navigate = useNavigate();
  const [list, setList] = useState({
    id: users.length,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "Admin",
  });
  useEffect(() => {
    setUser(list);
  }, [list]);

  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const handleChange = (e) => {
    setList({
      ...list,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = addusers(list);
    console.log(users);
    // console.log(role);
    if (val === false) {
      setUser(list);
      navigate("/Dashboard");
    }
    // console.log(users)
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white font-sans pt-10 lg:pt-0">
        <div className="w-full max-w-5xl flex bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Left side - Login Form */}
          <div className=" w-full lg:w-1/2 p-10">
            <div className="flex space-x-4 mb-8">
              <Link to="/Log In">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow">
                  Login
                </button>
              </Link>
              <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-500 rounded-full font-semibold shadow">
                SignUp
              </button>
              <Admin_btn role = {role} setRole = {setRole}  />
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  name="first_name"
                  value={list.first_name}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  value={list.last_name}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={list.email}
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-600">Password</label>
                <input
                  type="password"
                  name="password"
                  value={list.password}
                  placeholder="Enter your password"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 shadow"
              >
                Sign Up
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/Log In" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          {/* Right side - Illustration */}
          <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center">
            <img
              src="Login.png"
              alt="Login illustration"
              className="max-w-xs"
            />
          </div>
        </div>
      </div>
    </>

    // <div className=" bg-white flex flex-col md:flex-row font-sans pt-20">
    //   {/* Left Section - Form */}
    //   <div className="w-full md:w-1/2  p-8 md:p-16 flex flex-col justify-center">
    //     {/* Logo and Navbar */}

    //     {/* Toggle Buttons */}
    //     <div className="flex gap-4 mb-6">
    //       <Link to="/Log In">
    //         <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow cursor-pointer">
    //           Login
    //         </button>
    //       </Link>

    //       <button className="px-6 py-2 bg-white border border-gray-300 text-blue-600 font-semibold rounded shadow cursor-pointer">
    //         Sign Up
    //       </button>
    //     </div>

    //     {/* Sign Up Form */}
    //     <form className="flex flex-col gap-4">
    //       <input
    //         type="text"
    //         placeholder="Enter your first name"
    //         className="p-3 rounded-md bg-blue-50 placeholder:text-gray-500"
    //       />
    //       <input
    //         type="text"
    //         placeholder="Enter your last name"
    //         className="p-3 rounded-md bg-blue-50 placeholder:text-gray-500"
    //       />
    //       <input
    //         type="email"
    //         placeholder="Enter your email"
    //         className="p-3 rounded-md bg-blue-50 placeholder:text-gray-500"
    //       />
    //       <input
    //         type="password"
    //         placeholder="Enter your password"
    //         className="p-3 rounded-md bg-blue-50 placeholder:text-gray-500"
    //       />
    //       <input
    //         type="text"
    //         placeholder="xxxxxxxxxx"
    //         className="p-3 rounded-md bg-blue-50 placeholder:text-gray-500"
    //       />
    //       <button className="mt-4 p-3 bg-blue-400 text-white rounded-md shadow font-semibold">
    //         Sign Up
    //       </button>
    //     </form>

    //     <p className="mt-4 text-sm text-center text-blue-700">
    //       Already have an account?{" "}
    //       <Link to="/Log In" className="underline">
    //         Sign In
    //       </Link>
    //     </p>
    //   </div>

    //   <div className="hidden md:flex w-1/2 items-center justify-center pt-20">
    //     <img src="/SignUp.png" alt="Illustration" className="w-[60%] h-auto" />
    //   </div>
    // </div>
  );
}
