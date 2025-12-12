"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import ClickHearts from "../components/ClickHearts";
import LoveButton from "../components/LoveButton";
import MessageBox from "../components/MessageBox";

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);
  const [clickHearts, setClickHearts] = useState([]);
  const [typeText, setTypeText] = useState("");
  const fullText =
    "lis attentivement cette lettre jusqu'au bout";

  // Build ambient floating hearts
  const [ambientHearts, setAmbientHearts] = useState([]);

  useEffect(() => {
    setAmbientHearts(
      Array.from({ length: 22 }).map((_, i) => ({
        id: i,
        size: 14 + Math.random() * 26,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 7 + Math.random() * 10,
        opacity: 0.35 + Math.random() * 0.4,
      }))
    );
  }, []);

  // Simple typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypeText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleLoveClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const id =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `heart-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setClickHearts((prev) => [...prev.slice(-10), { id, x, y }]);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0b1223] to-[#1a1037] text-white"
      onClick={handleLoveClick}
    >
      {/* Decorative glow fields */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,90,196,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.22),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.12)_70%,rgba(255,255,255,0)_100%)] mix-blend-screen opacity-60" />

      <FloatingHearts hearts={ambientHearts} />

      {/* ✨ Animated stars around the title */}
      <motion.div
        className="pointer-events-none absolute left-0 right-0 mx-auto mt-40 h-32 w-32"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-400 shadow-[0_0_10px_#ec4899]" />
        <div className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
        <div className="absolute left-1/2 bottom-0 h-2 w-2 -translate-x-1/2 rounded-full bg-pink-300 shadow-[0_0_10px_#f472b6]" />
        <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-indigo-400 shadow-[0_0_10px_#6366f1]" />
      </motion.div>

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Badge */}
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-pink-100 shadow-lg shadow-pink-500/20 backdrop-blur"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            Pour elle
            <span className="text-pink-300">♥</span>
          </motion.p>

          {/* Name with wave animation */}
          <motion.h1
            className="relative text-balance text-4xl font-semibold leading-tight text-pink-100 drop-shadow-[0_12px_45px_rgba(236,72,153,0.3)] sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          >
            <span className="relative inline-block">
              Jiongo Pierrette Merveille
              <motion.div
                className="absolute left-0 right-0 -bottom-2 h-[4px] bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Typewriter text */}
          <motion.p
            className="mt-5 text-lg text-pink-50/90 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {typeText}
          </motion.p>

          {/* Button + Message */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LoveButton
                onClick={() => setShowMessage((v) => !v)}
                active={showMessage}
              />
            </motion.div>

            <AnimatePresence>
              {showMessage && (
                <MessageBox
                  key="message"
                  title="12/12/2025"
                  message="Bonjour Princesse"
                  delay={0.1}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Love audio (Spotify embed) */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 shadow-xl shadow-rose-500/25">
              <iframe
                src="https://open.spotify.com/embed/track/4iNPp0BZ4lBu7bipdWLcWk?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Laura Ferre - Chanson d'amour"
              />
            </div>
          </div>
        </div>
      </main>

      <ClickHearts hearts={clickHearts} />
    </div>
  );
}
