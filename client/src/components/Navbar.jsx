import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-yellow-400/40 shadow-[0_0_20px_rgba(255,255,0,0.2)]"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section (same as previous) */}
        <motion.div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {/* Glowing “H” symbol */}
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 shadow-[0_0_20px_rgba(0,191,255,0.6)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect x="3" y="4" width="4" height="16" rx="1" fill="white" />
              <rect x="17" y="4" width="4" height="16" rx="1" fill="white" />
              <rect x="9" y="9" width="6" height="6" rx="1" fill="rgba(255,255,255,0.95)" />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-2xl font-extrabold text-yellow-400 tracking-widest drop-shadow-[0_0_6px_#FFD700]">
              HACKMATE
            </h1>
            <span className="text-xs text-gray-400 italic">Your Gateway to Great Teams</span>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">


          {/* Dashboard Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(255,255,0,0.6)",
            }}
            onClick={() => navigate("/user")}
            className="px-5 py-2 rounded-full font-bold text-black bg-yellow-400 
                       hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,0,0.5)]"
          >
            Dashboard
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-400 p-2 rounded-md hover:bg-yellow-400/10 transition"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-black/80 backdrop-blur-md border-t border-yellow-400/30 text-center py-4 space-y-3"
        >
          
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
