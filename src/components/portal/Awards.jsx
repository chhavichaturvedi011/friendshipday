import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function Awards({ friend, theme }) {
  return (
    <section className="relative py-24 px-4 max-w-5xl mx-auto">
      <SectionTitle  theme={theme}>
        Friendship Awards
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14" style={{ perspective: 1000 }}>
        {friend.awards.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group h-36 [transform-style:preserve-3d] cursor-pointer"
          >
            <motion.div
              className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
            >
              <div
                className="absolute inset-0 rounded-2xl glass flex flex-col items-center justify-center gap-2 [backface-visibility:hidden]"
              >
                <span className="text-4xl">{a.icon}</span>
                <p className="font-display font-semibold text-sm">{a.title}</p>
              </div>
              <div
                className="absolute inset-0 rounded-2xl flex items-center justify-center text-center px-4 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              >
                <p className="text-sm font-medium text-white">Awarded to {friend.name} 🏅</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
