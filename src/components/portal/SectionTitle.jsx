import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ children, eyebrow, theme, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-xs tracking-[0.3em] uppercase font-medium">
          <span className={theme ? `bg-clip-text text-transparent ${theme.gradientText}` : 'text-slate-400'}>
            {eyebrow}
          </span>
        </p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-3xl md:text-4xl font-bold mt-2"
      >
        {children}
      </motion.h2>
    </div>
  );
}
