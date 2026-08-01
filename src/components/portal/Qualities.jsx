import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

export default function Qualities({ friend, theme }) {
  return (
    <section className="relative py-24 px-4 max-w-4xl mx-auto">
      <SectionTitle  theme={theme}>
        Things I Like About You
      </SectionTitle>

      <div className="grid sm:grid-cols-2 gap-4 mt-14">
        {friend.specialQualities.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="glass rounded-2xl px-5 py-4 flex items-center gap-4"
          >
            <span className="text-3xl">{q.emoji}</span>
            <span className="font-medium text-slate-100">{q.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
