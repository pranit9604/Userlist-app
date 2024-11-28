import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UserCard = ({ user }) => {
  // Check if the user object and its properties are defined
  if (!user || !user.name) {
    return <div className="bg-white p-6 rounded-lg shadow-lg">User data is missing.</div>;
  }

  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Card Header with User's Name and Avatar */}
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl text-white font-semibold mr-4">
          {user.name[0]} {/* First letter of the user's name as a placeholder */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.company?.name}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="space-y-2">
        <p className="text-gray-700">
          <strong className="text-gray-900">Email:</strong> {user.email}
        </p>
        <p className="text-gray-700">
          <strong className="text-gray-900">Phone:</strong> {user.phone}
        </p>
      </div>

      {/* View Details Button */}
      <div className="mt-4">
        <Link
          to={`/users/${user.id}`}
          className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-3 px-8 rounded-lg text-lg font-medium flex items-center justify-center transform hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default UserCard;