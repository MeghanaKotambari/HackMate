import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      alert("✅ Login successful!");
      navigate("/profile");
    }, 1500);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Animated Split Background */}
      <div className="absolute inset-0 flex">
        <motion.div
          initial={{ backgroundPosition: "0% 50%" }}
          animate={{ backgroundPosition: "100% 50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-sky-500 via-sky-400 to-sky-600 bg-[length:200%_200%]"
        />
        <motion.div
          initial={{ backgroundPosition: "100% 50%" }}
          animate={{ backgroundPosition: "0% 50%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-1/2 h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 bg-[length:200%_200%]"
        />
      </div>

      {/* Centered Login Card */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10"
        >
          {/* Title */}
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-5xl font-extrabold text-center text-yellow-500 mb-3"
          >
            HACKMATE
          </h1>

          <p className="text-gray-700 mb-8 italic text-center text-lg">
            Where ideas meet their teammates 🚀
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl"
            >
              {isLoggingIn ? "Logging in..." : "Login"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-gray-700 text-sm">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Sign up
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
