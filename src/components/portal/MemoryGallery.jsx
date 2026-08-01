import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';

export default function MemoryGallery({ friend, theme }) {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle theme={theme}>
        My Fav. Memories
      </SectionTitle>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {friend.memories.map((m, i) => (
          <motion.button
            key={i}
            onClick={() => setActive(m)}
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -3 : 3 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass rounded-2xl p-3 pb-5 text-left shadow-xl"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
              <PolaroidImage src={m.image} alt={m.title} theme={theme} />
            </div>
            <p className="font-display font-semibold mt-3">{m.title}</p>
            <p className="text-xs text-slate-400 mt-0.5">{m.date}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-2xl p-4 max-w-lg w-full"
            >
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                <PolaroidImage src={active.image} alt={active.title} theme={theme} large />
              </div>
              <p className="font-display font-semibold text-lg mt-4">{active.title}</p>
              <p className="text-sm text-slate-300 mt-1">{active.description}</p>
              <button
                onClick={() => setActive(null)}
                className="mt-4 flex items-center gap-1 text-xs text-slate-400 hover:text-white transition"
              >
                <X size={14} /> Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PolaroidImage({ src, alt, theme, large }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-500"
        style={{ background: `linear-gradient(135deg, ${theme.primary}22, ${theme.secondary}22)` }}
      >
        <ImageIcon size={large ? 40 : 26} />
        <span className="text-[11px] px-3 text-center">Add photo at {src}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setErrored(true)} className="w-full h-full object-cover" />;
}

