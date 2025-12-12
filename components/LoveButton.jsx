"use client";

import { motion } from "framer-motion";

export default function LoveButton({ onClick, active }) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="
        group relative overflow-hidden rounded-full 
        bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-600
        px-9 py-3.5 text-lg font-semibold text-white
        shadow-[0_0_25px_rgba(236,72,153,0.45)]
        backdrop-blur-sm
        transition-all duration-300
      "
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{ repeat: Infinity, duration: 2.6, ease: "linear" }}
      />

      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      />

      {/* Ripple on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20 pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={active ? { scale: 1.4, opacity: 0 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Main content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {active ? "Cacher la lettre" : "Révéler la lettre"}

        {/* Heart animation */}
        <motion.span
          animate={{
            rotate: active ? [0, 14, -14, 0] : [0, -14, 14, 0],
            scale: active ? [1, 1.2, 1] : [1, 1.15, 1],
          }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
        >
          ♥
        </motion.span>
      </span>
    </motion.button>
  );
}
