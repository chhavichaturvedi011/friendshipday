import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-midnight-950">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center shadow-lg"
      >
        <Heart size={30} className="text-white" fill="white" />
      </motion.div>
      <p className="mt-6 text-sm tracking-wide text-slate-300 shimmer-text font-display">
        Preparing Your Memories...
      </p>
    </div>
  );
}
