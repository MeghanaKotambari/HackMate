import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const title = "HACKMATE";

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-black text-white">
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

      {/* HERO SECTION */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[85vh] text-center px-4">
        {/* Dancing Title */}
        <div className="flex flex-wrap justify-center">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              style={{ fontFamily: "'Bungee', sans-serif" }}
              className="text-[110px] md:text-[140px] lg:text-[180px] font-extrabold text-yellow-400 drop-shadow-[8px_8px_0px_#000]"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: i * 0.1, // creates wave effect
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-4 text-xl md:text-2xl text-white italic tracking-wide font-medium drop-shadow-[3px_3px_0px_#000]"
        >
          Where ideas meet their teammates 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 flex gap-6"
        >
          <button
            onClick={() => navigate("/login")}
            className="px-10 py-4 text-lg font-bold text-black bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(255,255,0,0.5)] hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(255,255,0,0.7)] transition-all duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-10 py-4 text-lg font-bold text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Register
          </button>
        </motion.div>
      </div>

      {/* Gradient Divider Transition */}
      <div className="w-full h-32 bg-gradient-to-b from-transparent via-black/60 to-gray-900 relative z-10 -mt-10" />

      {/* FEATURES SECTION */}
      <section className="relative z-20 bg-gradient-to-r from-gray-900 to-sky-900 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{ fontFamily: "'Bungee', sans-serif" }}
            className="text-5xl md:text-6xl font-bold text-yellow-400 mb-12 drop-shadow-[3px_3px_0px_#000]"
          >
            Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[ 
              {
                title: "Team Matching",
                color: "sky",
                text: "Match with teammates based on skills, timezone, and project ideas using our smart tag system.",
              },
              {
                title: "Built-in Planner",
                color: "pink",
                text: "Plan and track your hackathon projects with our integrated Trello-like project board.",
              },
              {
                title: "Leaderboards",
                color: "yellow",
                text: "See top teams, track progress, and celebrate achievements in live hackathon leaderboards.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`bg-gray-800/80 p-8 rounded-2xl shadow-lg border border-${f.color}-400/30 hover:shadow-${f.color}-400/50 transition-all`}
              >
                <h3 className={`text-3xl font-bold text-${f.color}-300 mb-4`}>
                  {f.title}
                </h3>
                <p className="text-gray-300 text-lg">{f.text}</p>
              </motion.div>
            ))}
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
