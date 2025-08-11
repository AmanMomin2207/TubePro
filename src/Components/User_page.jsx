import React, { useContext, useEffect, useState } from "react";
import {
  UserCircle,
  ChevronDown,
  User,
  BriefcaseBusiness,
  Mail,
  LogOut,
  Pencil,
  X,
} from "lucide-react";
import { UserContext, UsersContext } from "../Context/context";
import { useLocation, useNavigate } from "react-router-dom";

const User_page = ({ setIsDash }) => {
  const { user, setUser } = useContext(UserContext);
  const { users, setUsers } = useContext(UsersContext);
  const [updatelist, setUpdateList] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });
  const [showEditForm, setShowEditForm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const handleChange = (e) => {
    setUpdateList((prev) => ({
      ...prev,
      id: user.id,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForm = () => {
    setUpdateList({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      role: user.role,
      id: user.id,
    });
    setShowEditForm(true);
  };

  const handleCross = () => {
    setShowEditForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    setUser(updatelist);
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === updatelist.id ? updatelist : u))
    );
    setShowEditForm(false);
  };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 ">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <UserCircle size={48} className="text-blue-600" />
        </div>
        <h2 className="text-xl font-semibold text-center text-black mb-6">
          Welcome, {user?.first_name || "User"}
        </h2>
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-2xl text-black font-bold">Profile</h1>
          <button
            className="flex items-center text-red-600 "
            onClick={handleForm}
          >
            <Pencil className="pr-2" />
            <span>Edit</span>
          </button>
        </div>
        <h4 className=" text-lg text-gray-600 mb-6 flex items-center gap-4">
          <User />
          <span className="text-black">
            {user?.first_name || "User"} {user?.last_name}
          </span>
        </h4>
        <h4 className=" text-lg text-gray-600 mb-6 flex items-center gap-4">
          <BriefcaseBusiness />
          <span className="text-black">{user?.role || "User"}</span>
        </h4>
        <h4 className=" text-lg text-gray-600 mb-6 flex items-center gap-4">
          <Mail />
          <span className="text-black">{user?.email || "User"}</span>
        </h4>
        <button
          className="w-full flex items-center justify-center mt-8 text-red-600"
          onClick={handleLogOut}
        >
          <LogOut className="mr-3" />
          <span>Logout</span>
        </button>
        {showEditForm && (
          <div
            id="edit-form"
            className="inset-0 fixed bg-sky-200 flex justify-center items-center "
          >
            <div className="bg-white shadow-2xl p-10 rounded-4xl lg:w-1/3 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl text-black font-bold mb-5">
                  Edit User Info.{" "}
                </h1>
                <button onClick={handleCross}>
                  <X className="mb-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <label className="block text-gray-600 mb-1">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter first name"
                  value={updatelist.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-2 border-none rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                <label className="block text-gray-600 mb-1">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  value={updatelist.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mb-2 border-none rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                <label className="block text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={updatelist.email}
                  // onChange={handleChange}
                  readOnly
                  className="w-full px-4 py-2 mb-2 border-none rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                <div className="relative">
                  <label className="block text-gray-600 mb-1">Role</label>
                  <select
                    name="role"
                    value={updatelist.role}
                    onChange={handleChange}
                    required
                    className="appearance-none w-full px-10 py-2 rounded-full mb-2 bg-blue-50 text-blue-900 font-medium border-none focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>

                  {/* Left icon */}
                  <div className="absolute left-3 top-[38px] pointer-events-none">
                    <UserCircle size={18} className="text-blue-900" />
                  </div>

                  {/* Right chevron */}
                  <div className="absolute right-3 top-[38px] pointer-events-none">
                    <ChevronDown size={16} className="text-blue-900" />
                  </div>
                </div>

                <label className="block text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={updatelist.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-none rounded-full mb-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 shadow"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User_page;
