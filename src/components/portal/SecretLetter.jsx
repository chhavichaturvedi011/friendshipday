import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';

export default function SecretLetter({ friend, theme }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 px-4 max-w-2xl mx-auto text-center">
      <SectionTitle  theme={theme}>
        Secret Letter
      </SectionTitle>

      <div className="mt-14 flex justify-center">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="envelope"
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="w-28 h-20 rounded-lg flex items-center justify-center relative"
                style={{ background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})` }}
              >
                <Mail size={30} className="text-white" />
              </motion.div>
              <span className="text-sm font-medium text-slate-300">Open Letter ❤️</span>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, rotateX: -90, y: -20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="paper-texture text-midnight-900 rounded-lg shadow-2xl px-6 py-8 md:px-10 md:py-10 max-w-lg text-left"
              style={{ transformPerspective: 800 }}
            >
              <p className="font-script text-3xl mb-4 text-fuchsia-700">Dear {friend.name},</p>
              <TypeAnimation
                sequence={[300, friend.letter]}
                wrapper="p"
                speed={70}
                cursor={true}
                className="font-script text-xl leading-relaxed whitespace-pre-line"
              />
              <p className="font-script text-2xl mt-6 text-right text-fuchsia-700">With love, always ❤️</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
