import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';

export default function QuizBadge({ friend, theme }) {
  return (
    <section className="relative py-24 px-4 text-center">
      <SectionTitle theme={theme}>
        Friendship Quiz Result
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        className="mt-12 mx-auto w-48 h-48 rounded-full flex flex-col items-center justify-center gap-2 relative"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #FFE9A8, #F5C453 60%, #B8860B)',
          boxShadow: '0 0 60px rgba(245,196,83,0.5)',
        }}
      >
        <div className="absolute inset-2 rounded-full border-2 border-white/40 border-dashed" />
        <BadgeCheck size={38} className="text-midnight-900" />
        <p className="font-display font-extrabold text-midnight-900 text-sm leading-tight px-4 text-center">
          Verified<br />Best Friend
        </p>
      </motion.div>
      <p className="text-slate-400 text-sm mt-6">{friend.name} passed with 100% friendship score 🎉</p>
    </section>
  );
}
