import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full fixed bottom-0 left-0 z-40 bg-black/60 backdrop-blur-lg 
                 border-t border-yellow-400/40 shadow-[0_0_20px_rgba(255,255,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Left: Logo + Text */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-xl 
                          bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 
                          shadow-[0_0_10px_rgba(0,191,255,0.5)]">
            <svg
              width="14"
              height="14"
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
          <h1 className="text-sm font-bold text-yellow-400 tracking-wider">
            HACKMATE
          </h1>
        </div>
        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} HackMate. All rights reserved.
        </div>

        {/* Center: Tagline */}
        <p className="hidden md:block text-xs text-gray-400 italic">
          Building Tomorrow, Together.
        </p>

        {/* Right: Social Icons
        <div className="flex items-center gap-4 text-yellow-400">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, textShadow: "0 0 8px #FFD700" }}
          >
            <FaGithub size={16} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, textShadow: "0 0 8px #FFD700" }}
          >
            <FaTwitter size={16} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, textShadow: "0 0 8px #FFD700" }}
          >
            <FaLinkedin size={16} />
          </motion.a>
        </div> */}
        
      </div>
    </motion.footer>
  );
};

export default Footer;
