import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle.jsx';

const LABELS = {
  trust: 'Trust',
  fun: 'Fun',
  support: 'Support',
  drama: 'Drama',
  foodSharing: 'Food Sharing',
};

function Ring({ value, theme, label }) {
  const isInfinite = value === '∞';
  const pct = isInfinite ? 100 : Math.min(100, Number(value));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={radius} strokeWidth="8" className="stroke-white/10" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            stroke={theme.accent}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg">
          {isInfinite ? '∞' : `${value}%`}
        </div>
      </div>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  );
}

export default function FriendshipMeter({ friend, theme }) {
  return (
    <section className="relative py-24 px-4 max-w-4xl mx-auto">
      <SectionTitle theme={theme}>
        Our Friendship Meter
      </SectionTitle>
      <div className="flex flex-wrap justify-center gap-8 mt-14">
        {Object.entries(friend.meter).map(([key, value]) => (
          <Ring key={key} value={value} theme={theme} label={LABELS[key] || key} />
        ))}
      </div>
    </section>
  );
}
