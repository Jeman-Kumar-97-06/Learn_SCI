import { useState } from "react";
import { motion } from "framer-motion";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Dr. Jane Quantum",
    email: "jane@scilearn.io",
    bio: "Curious mind exploring the laws of nature and quantum worlds.",
    savedTopics: ["Quantum Mechanics", "Relativity", "Fluid Dynamics"],
  });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19] text-gray-800 dark:text-gray-100 transition-colors">
      {/* Top Banner / Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-6 md:px-16">
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <p className="text-lg opacity-90">{user.email}</p>
      </div>

      {/* Profile Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-6 md:px-16 py-10 space-y-10"
      >
        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          {editing ? (
            <div className="space-y-4">
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 focus:outline-none"
              />
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 focus:outline-none"
                rows={4}
              />
              <button
                onClick={() => setEditing(false)}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{user.bio}</p>
              <button
                onClick={() => setEditing(true)}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
              >
                Edit Profile
              </button>
            </>
          )}
        </section>

        {/* Saved Topics / Lessons */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Saved Topics</h2>
          <div className="flex flex-wrap gap-3">
            {user.savedTopics.map((topic) => (
              <span
                key={topic}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        {/* Future Section: Recent Activity or Progress */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Learning Progress</h2>
          <div className="bg-gray-100 dark:bg-[#1e293b] rounded-xl p-6">
            <p className="text-gray-600 dark:text-gray-400">
              You’ve completed 60% of your current lesson track. Keep going! 🚀
            </p>
            <div className="mt-3 w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full" style={{ width: "60%" }}></div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
