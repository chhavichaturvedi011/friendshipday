import React from 'react';
import { motion } from 'framer-motion';

/**
 * Slowly drifting aurora blobs + starfield behind portal sections.
 * `auroraClass` comes from the active gender theme (aurora-boy / aurora-girl).
 */
export default function AuroraBackground({ auroraClass = 'bg-aurora-girl' }) {
  return (
    <div className="fixed inset-0 -z-10 bg-midnight-950 overflow-hidden">
      <motion.div
        className={`absolute inset-0 ${auroraClass}`}
        animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* starfield */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              opacity: Math.random() * 0.6 + 0.2,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      {/* blurred glow circles */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 -right-10 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-3xl animate-float-slower" />
    </div>
  );
}
