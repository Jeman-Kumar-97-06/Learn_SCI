import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleLogin = () => {
    // You’ll later replace this with actual Google OAuth logic
    console.log("Google login clicked!");
  };

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

        {/* --- Google Login --- */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-700 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-[#1e293b] transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            Continue with Google
          </span>
        </button>

        {/* Separator */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* --- Form --- */}
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

        {/* Toggle */}
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
