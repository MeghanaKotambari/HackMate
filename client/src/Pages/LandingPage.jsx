import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  const title = "HACKMATE";

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black">
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
          className="w-1/2 h-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-[length:200%_200%]"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        {/* Big Retro Title */}
        <motion.h1
          style={{ fontFamily: "'Bungee', sans-serif" }}
          className="text-[10vw] md:text-[9rem] font-extrabold text-yellow-400 drop-shadow-[8px_8px_0px_#000] flex flex-wrap justify-center leading-none tracking-tight"
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-2xl md:text-3xl text-white italic tracking-wide font-medium drop-shadow-[3px_3px_0px_#000]"
        >
          Where ideas meet their teammates
        </motion.p>
      </div>

      {/* Features Section */}
      <section className="relative z-20 bg-gradient-to-r from-gray-900 to-sky-800 py-24 px-8 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-6xl font-bold text-yellow-400 mb-16 drop-shadow-[3px_3px_0px_#000]"
          >
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-sky-400/30 backdrop-blur-md hover:shadow-sky-400/50 transition-all"
            >
              <h3 className="text-3xl font-bold text-sky-300 mb-4">
                Team Matching
              </h3>
              <p className="text-gray-300 text-lg">
                Match with teammates based on skills, timezone, and project ideas
                using our smart tag system.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-pink-400/30 backdrop-blur-md hover:shadow-pink-400/50 transition-all"
            >
              <h3 className="text-3xl font-bold text-pink-300 mb-4">
                Built-in Planner
              </h3>
              <p className="text-gray-300 text-lg">
                Plan and track your hackathon projects with our integrated Trello-like
                project board.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-yellow-400/30 backdrop-blur-md hover:shadow-yellow-400/50 transition-all"
            >
              <h3 className="text-3xl font-bold text-yellow-300 mb-4">
                Leaderboards
              </h3>
              <p className="text-gray-300 text-lg">
                See top teams, track progress, and celebrate achievements in live
                hackathon leaderboards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soft Glow */}
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: 0.45, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400 rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
      />
    </div>
  );
};

export default LandingPage;
