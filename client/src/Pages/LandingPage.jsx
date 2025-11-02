import React from "react";
import { motion } from "framer-motion";

/**
 * Add Google font link to your index.html:
 * <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
 *
 * Requires: TailwindCSS + framer-motion installed.
 */

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-sans">
      {/* left animated dark-gray */}
      <motion.div
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#2f2f2f] via-[#3c3c3c] to-[#484848] bg-[length:200%_200%]"
      />

      {/* right animated sky-pink */}
      <motion.div
        initial={{ backgroundPosition: "100% 50%" }}
        animate={{ backgroundPosition: "0% 50%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-r from-sky-400 via-pink-300 to-pink-500 bg-[length:200%_200%]"
      />

      {/* subtle center divider */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10" />

      {/* ambient glow behind title */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.25, opacity: 0.24 }}
        transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none z-10"
        aria-hidden
      >
        <div className="w-[900px] h-[300px] rounded-full blur-3xl bg-gradient-to-r from-sky-400 via-pink-400 to-purple-500 opacity-30" />
      </motion.div>

      {/* Title + tagline */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        {/* Main big retro title */}
        <motion.h1
          initial={{ scale: 0.9, y: -30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="relative w-[90%] max-w-[1800px] leading-none select-none"
          style={{ fontFamily: "'Luckiest Guy', system-ui, -apple-system, 'Segoe UI', Roboto" }}
        >
          {/* big white base text that covers the screen ~60%-100% depending on viewport */}
          <span
            className="block text-[12vw] md:text-[10rem] lg:text-[14rem] text-white"
            style={{
              WebkitTextStroke: "6px rgba(0,0,0,0.45)",
              textShadow:
                "0 18px 40px rgba(0,0,0,0.55), 0 6px 12px rgba(0,0,0,0.35)",
            }}
          >
            {/* "HACK" on left-ish, "MATE" visually centered; but it's a single word */}
            HACK
            <span className="inline-block mx-4"> </span>
            MATE
          </span>

          {/* animated dancing outlines and shadow layers */}
          <span
            className="absolute inset-0 flex justify-center items-center pointer-events-none"
            aria-hidden
          >
            {/* colored outline duplicates that jitter for cartoon effect */}
            <span className="outline-1" />
            <span className="outline-2" />
            <span className="outline-3" />
            {/* sweeping shine */}
            <motion.span
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm"
              style={{ mixBlendMode: "screen" }}
            />
          </span>
        </motion.h1>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-2xl md:text-4xl text-white/90 italic tracking-wide"
        >
          Where ideas meet their teammates
        </motion.p>
      </div>

      {/* small scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-30"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-[26px] h-[42px] rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <motion.span
              animate={{ y: [4, 14, 4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-white/80"
            />
          </div>
          <span className="text-sm text-white/70">scroll</span>
        </div>
      </motion.div>

      {/* INLINE STYLES for retro outlines + wobble */}
      <style>{`
        /* outlines to create multi-color cartoon edge effect */
        .outline-1{
          position:absolute;
          width:120%;
          height:80%;
          transform: translateY(-6%) scale(1.02);
          border-radius: 8px;
          filter: blur(8px);
          background: linear-gradient(90deg, rgba(56,189,248,0.55), rgba(236,72,153,0.45));
          mix-blend-mode: screen;
          opacity:0.65;
          animation: jitter1 2.2s infinite linear;
        }
        .outline-2{
          position:absolute;
          width:120%;
          height:80%;
          transform: translateY(-8%) scale(1.04);
          border-radius: 8px;
          filter: blur(14px);
          background: linear-gradient(90deg, rgba(236,72,153,0.28), rgba(56,189,248,0.28));
          mix-blend-mode: screen;
          opacity:0.5;
          animation: jitter2 2.8s infinite linear;
        }
        .outline-3{
          position:absolute;
          width:120%;
          height:80%;
          transform: translateY(-10%) scale(1.06);
          border-radius: 8px;
          filter: blur(24px);
          background: linear-gradient(90deg, rgba(56,189,248,0.18), rgba(236,72,153,0.18));
          mix-blend-mode: screen;
          opacity:0.35;
          animation: jitter3 3.6s infinite linear;
        }

        /* small random jitters to create lively cartoon bounce */
        @keyframes jitter1 {
          0% { transform: translateY(-6%) translateX(0) rotate(-0.6deg) scale(1.02); }
          25% { transform: translateY(-5%) translateX(-6px) rotate(0.4deg) scale(1.021); }
          50% { transform: translateY(-6%) translateX(0) rotate(-0.5deg) scale(1.02); }
          75% { transform: translateY(-7%) translateX(6px) rotate(0.6deg) scale(1.023); }
          100% { transform: translateY(-6%) translateX(0) rotate(-0.6deg) scale(1.02); }
        }
        @keyframes jitter2 {
          0% { transform: translateY(-8%) translateX(0) rotate(0deg) scale(1.04); }
          25% { transform: translateY(-7%) translateX(8px) rotate(-0.6deg) scale(1.043); }
          50% { transform: translateY(-8%) translateX(0) rotate(0deg) scale(1.04); }
          75% { transform: translateY(-9%) translateX(-8px) rotate(0.6deg) scale(1.042); }
          100% { transform: translateY(-8%) translateX(0) rotate(0deg) scale(1.04); }
        }
        @keyframes jitter3 {
          0% { transform: translateY(-10%) translateX(0) rotate(0.6deg) scale(1.06); }
          25% { transform: translateY(-9%) translateX(-10px) rotate(-0.4deg) scale(1.058); }
          50% { transform: translateY(-10%) translateX(0) rotate(0.6deg) scale(1.06); }
          75% { transform: translateY(-11%) translateX(10px) rotate(-0.4deg) scale(1.062); }
          100% { transform: translateY(-10%) translateX(0) rotate(0.6deg) scale(1.06); }
        }

        /* small responsive tweaks so the title never overflows too much */
        @media (max-width: 640px) {
          h1 { font-size: 14vw !important; }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
