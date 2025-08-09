import React, { useContext, useEffect, useState } from "react";
import { Pencil, Trash, X, UserCircle, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { UsersContext, UserContext } from "../Context/context";

const Admin_Page = ({ setIsDash }) => {
  const location = useLocation();
  const [u, setU] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });
  const [updateuser, setUpdateUser] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: "",
  });
  useEffect(() => {
    if (u) {
      setUpdateUser({
        id: u.id,
        first_name: u.first_name,
        last_name: u.last_name,
        email: u.email,
        password: u.password,
        role: u.role,
      });
    }
  }, [u]);
  const { user, setUser } = useContext(UserContext);
  const { users, setUsers } = useContext(UsersContext);
  const [showEditForm, setShowEditForm] = useState(false);

  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [setIsDash, location.pathname]);

  const handleDelete = (key) => {
    // console.log(key);
    const updatedUsers = users.filter((u) => u.id !== key);
    const updateid = updatedUsers.map((u, index) => ({
      ...u,
      id: index,
    }));
    setUsers(updateid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setU(updateuser);
  };

  const handleEdit = (key) => {
    const edituser = users.find((u) => u.id === key);
    setU(edituser);
    // console.log(edituser)
    // console.log(u);
    setShowEditForm(true);
  };

  const handleCross = () => {
    setShowEditForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    setShowEditForm(false);
    setUsers((prev) =>
      prev.map((use) => (updateuser.id === use.id ? updateuser : use))
    );
    console.log(updateuser);
    // console.log(users);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold mb-4">User Controller </h1>

        {/* Notification Settings */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold">Users Data</h2>

          <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  S.No
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-green-700">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-red-700">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400">
              {Array.isArray(users) &&
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50" >
                    <td className="px-6 py-4 text-sm text-gray-900">{u.id} </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {u.first_name || ""}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {u.last_name || ""}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {u.role || "Null" } {u.id === user.id && (<span className="text-sky-800">(You)</span>)}  
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {u.email || ""}
                    </td>
                    <td className="px-6 py-4 text-sm text-green-900">
                      <Pencil onClick={() => handleEdit(u.id)} />
                    </td>
                    <td className="px-6 py-4 text-sm text-red-900">
                      <Trash
                        onClick={() => handleDelete(u.id)}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditForm && (
        <div
          id="edit-form"
          className="inset-0 fixed bg-sky-200 flex justify-center items-center "
        >
          <div className="bg-white shadow-2xl p-10 rounded-4xl w-1/3">
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
                value={updateuser.first_name || ""}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-2 border-none rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <label className="block text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter last name"
                value={updateuser.last_name || ""}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mb-2 border-none rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              <div className="relative">
                <label className="block text-gray-600 mb-1">Role</label>
                <select
                  name="role"
                  value={updateuser.role || ""}
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
    </>
  );
};

export default Admin_Page;
