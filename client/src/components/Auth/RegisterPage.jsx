import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    try {
      await axios.post("http://localhost:3000/api/hackmate/auth/register", formData);
      alert("✅ Registration Successful!");
      navigate("/login");
    } catch (error) {
      alert("❌ Registration failed! Please try again.");
      console.error(error);
    } finally {
      setIsRegistering(false);
    }
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

      {/* Centered Register Card */}
      <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8"
        >
          {/* Title */}
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-4xl font-extrabold text-center text-yellow-500 mb-3"
          >
            HACKMATE
          </h1>

          <p className="text-gray-700 mb-6 italic text-center text-base">
            Where ideas meet their teammates 🚀
          </p>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Last Name
              </label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="bg-gray-100 text-gray-800 border border-gray-300 focus:border-yellow-500 focus:ring-yellow-500 w-full rounded-xl"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isRegistering}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 rounded-xl"
            >
              {isRegistering ? "Registering..." : "Register"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-5 text-center text-gray-700 text-sm">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-yellow-500 font-semibold hover:underline"
            >
              Login
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
