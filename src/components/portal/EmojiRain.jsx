import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

const EMOJIS = ['❤️', '🤗', '✨', '😊', '🌸', '🥹', '🫂', '💫'];

export default function EmojiRain({ theme }) {
  const [drops, setDrops] = useState([]);

  const shower = () => {
    const newDrops = Array.from({ length: 40 }).map((_, i) => ({
      id: `${Date.now()}-${i}`,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      duration: 2.5 + Math.random() * 2,
      delay: Math.random() * 0.8,
      size: 18 + Math.random() * 18,
    }));
    setDrops((d) => [...d, ...newDrops]);
    setTimeout(() => {
      setDrops((d) => d.filter((drop) => !newDrops.includes(drop)));
    }, 5000);
  };

  return (
    <section className="relative py-24 px-4 text-center overflow-hidden">
      <SectionTitle theme={theme}>
        Shower Me With Love
      </SectionTitle>

      <motion.button
        onClick={shower}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`mt-10 px-8 py-3 rounded-full font-semibold text-white ${theme.button}`}
      >
        Shower Me With Love 💗
      </motion.button>

      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        <AnimatePresence>
          {drops.map((d) => (
            <motion.span
              key={d.id}
              initial={{ y: '-10vh', opacity: 0 }}
              animate={{ y: '110vh', opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: d.duration, delay: d.delay, ease: 'linear' }}
              className="absolute"
              style={{ left: `${d.left}%`, fontSize: d.size }}
            >
              {d.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
