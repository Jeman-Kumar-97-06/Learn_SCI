import { useState } from "react";
import { motion } from "framer-motion";

export default function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Dr. Jane Quantum",
    email: "jane@scilearn.io",
    bio: "Curious mind exploring the laws of nature.",
    savedTopics: ["Quantum Mechanics", "Relativity", "Fluid Dynamics"],
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f19] text-gray-800 dark:text-gray-100 flex flex-col items-center pt-20 transition-colors">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-3xl bg-white dark:bg-[#121826] shadow-2xl rounded-2xl p-8"
      >
        <div className="flex items-center gap-6 mb-6">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
        </div>

        {editing ? (
          <div className="space-y-4">
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100"
            />
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100"
            />
            <button
              onClick={() => setEditing(false)}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <p className="mb-4 text-gray-700 dark:text-gray-300">{user.bio}</p>
            <button
              onClick={() => setEditing(true)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold"
            >
              Edit Profile
            </button>
          </>
        )}

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Saved Topics</h3>
          <ul className="flex flex-wrap gap-2">
            {user.savedTopics.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-blue-800 dark:text-blue-200 text-sm"
              >
                {t}
              </span>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
