import AdminNavbar from "./AdminNavbar";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { motion } from "framer-motion";
const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Reference to the 'users' collection in the Firebase database
    const usersRef = ref(db, "users");

    // Fetch user data from the database
    onValue(usersRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        const userList = Object.keys(userData).map((userId) => ({
          id: userId,
          ...userData[userId],
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  return (
    <>
      <motion.div className="">
        <AdminNavbar />
        <motion.div
          className="ml-64"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* -------------------TOP BAR------------------------------  */}
          <div className="flex-1 p-4">
            <h1 className="text-4xl font-david-libre mb-4 font-bold text-gray-800">
              Admin Homepage
            </h1>
            <div className="flex space-x-4">
              <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">
                  Total Orders
                </h2>
                <p className="text-2xl font-bold text-gray-800">120</p>
              </div>
              <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">
                  Total Food Items
                </h2>
                <p className="text-2xl font-bold text-gray-800">50</p>
              </div>
              <div className="bg-white p-4 shadow-md shadow-gray-400 rounded-lg w-1/3">
                <h2 className="text-xl lg:text-2xl font-bold mb-2 font-david-libre text-gray-800">
                  Total Revenue
                </h2>
                <p className="text-2xl font-bold text-gray-800">$12,000</p>
              </div>
            </div>
          </div>
          {/* -------------------------Fetching the User's Data ---------------------------  */}
          <motion.div
            className="overflow-x-auto p-6"
          >
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <div className="shadow-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">First Name</th>
                    <th className="py-2 px-4 text-left">Last Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="font-david-libre text-2xl">
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      className="hover:bg-gray-200 transition-colors "
                    >
                      <td className="py-2 px-4 font-sans border border-gray-300">
                        {String.fromCharCode(0x31 + index)}
                      </td>
                      <td className="py-2 font-serif border border-gray-300 px-4">{user.firstName}</td>
                      <td className="py-2 font-serif border border-gray-300 px-4">{user.lastName}</td>
                      <td className="py-2 font-serif border border-gray-300 px-4">{user.email}</td>
                      <td className="border border-gray-300 px-4">
                      <button
                        className="p-2 bg-gray-800 text-white rounded-2xl text-lg m-3"
                        onClick={() => handleDelete(foodItem.id)}
                      >
                        Delete
                      </button>{" "}
                    </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Admin;
