import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {motion} from "framer-motion";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const[firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Password does not match");
    }

    try {
      await signUp(email, password,firstName,lastName);
      navigate("/Login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <motion.div className="flex flex-1 flex-col justify-center px-6 py-2 lg:px-8 items-center bg-gray-100 min-h-screen"         
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -50 }}
    transition={{duration:0.6}}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/">
          <img
            className="mx-auto h-24 w-auto"
            src="/img/logo1.png"
            alt="Your Company"
          />
        </Link>
        <h2 className="text-center font-bold leading-9 tracking-tight text-gray-900 font-david-libre text-3xl p-4">
          <span className="text-orange-500">Create</span> Your New{" "}
          <span className="text-orange-500">Account</span>
          {error && (
            <p className="text-sm bg-red-500 text-white p-3 rounded-xl m-2">
              {error}
            </p>
          )}
        </h2>
      </div>

      <div className="min-h-full md:bg-white md:rounded-lg md:p-10 md:shadow-md md:border md:border-gray-100 md:max-w-lg w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="md:flex space-x-3 ">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                   First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="text"
                    placeholder="Your First Name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="text"
                    placeholder="Your Last Name..."
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                📩 Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email..."
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  🔐 New Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your new password..."
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  🔐 Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Confirm your password..."
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 pl-2">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4"
              />
              <p className="text-sm">Show password</p>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-6 text-center text-md text-gray-500">
        Already have an account?{" "}
        <span
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          <Link to="/Login">Login</Link>
        </span>
      </p>
    </motion.div>
  );
};

export default Register;
