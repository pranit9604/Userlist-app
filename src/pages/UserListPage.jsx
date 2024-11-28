import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";
import UserCard from "../components/UserCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="p-4 sm:p-8 bg-gray-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-indigo-800 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        User List
      </motion.h1>

      {/* Link to Add User Page */}
      <Link
        to="/add-user"
        className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-medium mb-6 inline-block hover:bg-indigo-700"
      >
        Add New User
      </Link>

      {/* Search Bar */}
      <motion.input
        type="text"
        placeholder="Search by name or email"
        className="mb-6 p-3 border border-gray-300 rounded-full w-full sm:w-1/2 mx-auto block focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Loading and Error States */}
      {status === "loading" && <motion.p className="text-center text-gray-500 text-lg">Loading...</motion.p>}
      {status === "failed" && (
        <motion.p className="text-center text-red-500 text-lg">{error}</motion.p>
      )}

      {/* Display Users */}
      {status === "succeeded" && filteredUsers.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              className="transition-transform transform hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <UserCard user={user} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* No users found */}
      {status === "succeeded" && filteredUsers.length === 0 && (
        <motion.p className="text-center text-gray-500 text-lg mt-6">No users found.</motion.p>
      )}
    </motion.div>
  );
};

export default UserListPage;