import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function Timeline({ friend, theme }) {
  return (
    <section className="relative py-24 px-4 max-w-3xl mx-auto">
      <SectionTitle  theme={theme}>
        My Some Fav. Memory With You ❤️
      </SectionTitle>

      <div className="relative mt-16 pl-8">
        <div
          className="absolute left-[11px] top-0 bottom-0 w-0.5"
          style={{ background: `linear-gradient(180deg, ${theme.primary}, ${theme.secondary}, transparent)` }}
        />
        {friend.memories.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative mb-12 last:mb-0"
          >
            <span
              className="absolute -left-8 top-1 w-6 h-6 rounded-full ring-4 ring-midnight-950 flex items-center justify-center text-[10px] font-bold"
              style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
            >
              {i + 1}
            </span>
            <p className={`text-xs font-semibold tracking-widest uppercase bg-clip-text text-transparent ${theme.gradientText}`}>
              {m.date}
            </p>
            <p className="font-display text-xl font-semibold mt-1">{m.title}</p>
            <p className="text-sm text-slate-400 mt-1">{m.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
