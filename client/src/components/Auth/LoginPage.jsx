import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md text-center p-10 
                     bg-white/10 backdrop-blur-xl 
                     border border-white/50 rounded-3xl 
                     shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          {/* Title */}
          <h1
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-6xl font-extrabold text-yellow-400 drop-shadow-[3px_3px_0px_#000] mb-6"
          >
            HACKMATE
          </h1>

          <p className="text-white/90 mb-10 italic text-lg">
            Where ideas meet their teammates 🚀
          </p>

          {/* Transparent Form */}
          <form className="space-y-5">
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-transparent text-white border border-white/70 
                           placeholder-white/70 focus:border-yellow-400 
                           focus:ring-yellow-400"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                className="bg-transparent text-white border border-white/70 
                           placeholder-white/70 focus:border-yellow-400 
                           focus:ring-yellow-400"
              />
            </div>

            <Button
              type="submit"
              className="bg-transparent text-white border border-white/70 
                           placeholder-white/70 focus:border-yellow-400 
                           focus:ring-yellow-400"
            >
              Login
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-white/90 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-yellow-400 hover:underline">
              Sign up
            </a>
          </div>
        </motion.div>
      </div>

      {/* Soft Glow Effect */}
      <motion.div
        initial={{ opacity: 0.2, scale: 1 }}
        animate={{ opacity: 0.4, scale: 1.3 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] 
                   bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400 
                   rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2 
                   z-0 opacity-40"
      />
    </div>
  );
};

export default LoginPage;
