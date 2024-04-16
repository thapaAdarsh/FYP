import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";  // Correct import statement
import "react-toastify/dist/ReactToastify.css";
import {motion} from "framer-motion"

const ForgotPassword = () => {
  const { forgotPassword } = UserAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await forgotPassword(email);
      // Display success notification
      toast.success("Check your email to reset your password!", {
        position: "top-center",  // Specify the position as a string
        autoClose: 5000,
      });
      

      // Redirect to the login page after initiating the forgot password process
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <motion.div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center bg-gray-100 min-h-screen"
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
          <span className="text-orange-500">Forgot</span> Your Password <span className="font-serif">?</span>
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
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
                  className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-3"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="mt-5 text-center text-md text-gray-500">
        Remember your password?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">Login</Link>
      </p>
    </motion.div>
  );
};

export default ForgotPassword;
