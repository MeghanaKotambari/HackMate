import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      {/* Left Animated Gradient (Gray shifting) */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#2d2d2d] via-[#3a3a3a] to-[#4a4a4a] bg-[length:200%_200%]"
      />

      {/* Right Animated Gradient (Sky blue to pink) */}
      <motion.div
        initial={{ backgroundPosition: "100% 50%" }}
        animate={{ backgroundPosition: "0% 50%" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-sky-400 via-pink-300 to-pink-500 bg-[length:200%_200%]"
      />

      {/* Soft divider */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20" />

      {/* Title Centered */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        {/* Subtle Background Glow */}
        <motion.div
          initial={{ scale: 1, opacity: 0.2 }}
          animate={{ scale: 1.3, opacity: 0.35 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute w-[800px] h-[300px] bg-gradient-to-r from-sky-400 via-pink-400 to-purple-500 blur-[160px] rounded-full"
        />

        {/* Fullscreen White Title */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative text-[12vw] font-extrabold leading-none text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
        >
          HACKMATE
          {/* Shining Light Reflection */}
          <motion.span
            initial={{ x: "-150%" }}
            animate={{ x: "150%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-md"
          />
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-3xl md:text-4xl font-light text-gray-100 italic mt-8"
        >
          “Code Together. Win Together.”
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;
