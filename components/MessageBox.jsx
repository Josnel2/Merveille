'use client';

import { motion } from 'framer-motion';

export default function MessageBox({ title, message, delay = 0 }) {
  return (
    <motion.div
      className="max-w-2xl rounded-2xl border border-white/10 bg-white/10 p-6 text-left text-pink-50 shadow-2xl shadow-rose-500/25 backdrop-blur-md"
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.95 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      <h3 className="mb-2 text-xl font-semibold text-pink-100 drop-shadow">{title}</h3>
      <p className="leading-relaxed text-pink-50/90">{message}</p>
    </motion.div>
  );
}
