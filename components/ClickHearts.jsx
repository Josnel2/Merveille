'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function ClickHearts({ hearts }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.span
            key={heart.id}
            className="absolute text-3xl text-rose-300 drop-shadow-[0_10px_25px_rgba(236,72,153,0.5)]"
            style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
            initial={{ scale: 0, opacity: 0, y: 10 }}
            animate={{ scale: 1.2, opacity: 1, y: -10, rotate: [-8, 8] }}
            exit={{ scale: 0.2, opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            ♥
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
