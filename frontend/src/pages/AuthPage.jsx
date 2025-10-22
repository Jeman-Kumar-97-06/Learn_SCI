import { useState } from "react";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0b0f19] transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-[#121826] shadow-2xl rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
          {isLogin ? "Welcome Back" : "Create an Account"}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-100 dark:bg-[#1e293b] text-gray-800 dark:text-gray-100 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">
          {isLogin ? "New to the platform?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
