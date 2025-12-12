'use client';

import { motion } from 'framer-motion';

export default function FloatingHearts({ hearts }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: `${heart.x}%` }}
          initial={{ y: '-10%', opacity: 0 }}
          animate={{
            y: '110vh',
            opacity: [0, heart.opacity, 0],
            x: ['-2%', '2%', '-2%'],
            rotate: [-8, 8, -10],
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            duration: heart.duration,
            delay: heart.delay,
          }}
        >
          <div
            className="text-pink-300 drop-shadow-[0_10px_25px_rgba(236,72,153,0.35)]"
            style={{ fontSize: `${heart.size}px` }}
          >
            ♥
          </div>
        </motion.div>
      ))}
    </div>
  );
}
