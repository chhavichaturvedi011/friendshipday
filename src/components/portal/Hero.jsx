import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import FloatingParticles from '../background/FloatingParticles.jsx';

export default function Hero({ friend, theme }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <FloatingParticles count={16} color={theme.particle} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[600, `Welcome Back ${friend.name} ❤️`]}
          wrapper="p"
          speed={50}
          cursor={false}
          className="font-display text-sm md:text-base tracking-widest uppercase text-slate-300 mb-6"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
        className={`w-40 h-40 md:w-52 md:h-52 rounded-full flex items-center justify-center text-7xl ring-4 ${theme.ring}`}
        style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`, boxShadow: theme.glowShadow }}
      >
        {friend.favoriteEmoji}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
        className={`mt-6 font-display text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent ${theme.gradientText}`}
      >
        {friend.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="mt-2 font-cute text-2xl text-slate-300"
      >
        "{friend.nickname}"
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className={`mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium ${theme.chip}`}
      >
        {friend.friendshipYears} years of friendship
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="mt-8 max-w-lg font-script text-3xl md:text-4xl text-slate-100 px-4"
      >
        "{friend.quote}"
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-slate-500 text-xs tracking-widest"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
