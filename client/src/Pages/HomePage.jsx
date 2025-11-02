import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const title = "HACKMATE";
  const letters = title.split("");

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-black text-white flex flex-col justify-between">
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
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 mt-8">
        {/* Welcome line */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-4xl font-bold text-yellow-300 mb-3 italic"
        >
          Welcome to your ultimate teammate finder
        </motion.p>

        {/* Animated Title */}
        <motion.h1
          style={{ fontFamily: "'Bungee', sans-serif" }}
          className="flex justify-center flex-wrap text-[70px] md:text-[100px] lg:text-[130px] font-extrabold text-yellow-400 drop-shadow-[8px_8px_0px_#000]"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 0 }}
              animate={{
                y: [0, -10, 0],
                textShadow: [
                  "0px 0px 10px #FFD700",
                  "0px 0px 20px #FFD700",
                  "0px 0px 10px #FFD700",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 text-xl md:text-2xl italic text-white drop-shadow-[3px_3px_0px_#000]"
        >
          Collaborate. Create. Conquer. 
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-8"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/createteam")}
            className="px-10 py-4 text-xl font-bold text-black bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,255,0,0.6)] hover:bg-yellow-500 hover:shadow-[0_0_35px_rgba(255,255,0,0.8)] transition-all duration-300"
          >
            Create a Team
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/jointeam")}
            className="px-10 py-4 text-xl font-bold text-yellow-400 border-4 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Join a Team
          </motion.button>
        </motion.div>
      </div>

      {/* WHY HACKMATE Section */}
      <div className="relative z-10 text-center pb-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3"
        >
          Why Hackmate?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-gray-200 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Hackmate connects innovators, coders, and designers across the globe 🌍.  
          Whether you’re starting your first hackathon or forming a dream startup team,
          Hackmate helps you match by passion, skills, and creativity — because teamwork
          is where the magic happens. 💡
        </motion.p>
      </div>

      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0.25, scale: 1 }}
        animate={{ opacity: 0.45, scale: 1.2 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-pink-400 via-yellow-400 to-sky-400 rounded-full blur-[250px] -translate-x-1/2 -translate-y-1/2 z-0 opacity-40"
      />
    </div>
  );
};

export default HomePage;
