import React, { useState , useContext } from "react";
import { UserContext  } from "../Context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Admin_btn from "./Admin_btn";


const Login = ({ setIsDash, users }) => {
  const [role , setRole ] = useState("Admin");
    useEffect( () => {
      // setList({
      //   ...list,
      //   role : role
      // })
      setRole(role)
    } , [role])
  const {user , setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/Dashboard");
  useEffect(() => {
    setIsDash(!hideNavbar);
  }, [location.pathname, setIsDash]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = users.find((user) => user.email === email);
    // let found_role;
    // if(found["role"] == undefined){
    //   found_role = found["role"].role
    // }
    // else{
    //   found_role = found["role"]
    // }
    // console.log(found["role"].role)

    if (found === undefined) {
      alert("Your Account is Not Found");
    } else {
      if (found["password"] === password && found["role"] == role ) {
        setUser(found)
        navigate("/Dashboard");
      } else if (found["password"] !== password || found["role"] != role) {
        alert("Your Credential is Incorrect");
      }
    }
    // console.log(found);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-sans">
      <div className="w-full max-w-5xl flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left side - Login Form */}
        <div className="w-full lg:w-1/2 p-10">
          <div className="flex space-x-4 mb-8">
            <button className="px-6 py-2 bg-white text-blue-600 border-2 border-blue-500 rounded-full font-semibold shadow">
              Login
            </button>
            <Link to="/Sign Up">
              <button className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold shadow">
                SignUp
              </button>
            </Link>
            <Admin_btn role={role} setRole={setRole}/>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                required
                className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div>
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-full bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 shadow"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/Sign Up" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right side - Illustration */}
        <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center">
          <img src="Login.png" alt="Login illustration" className="max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Login;
