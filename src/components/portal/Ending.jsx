import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import FloatingParticles from '../background/FloatingParticles.jsx';

export default function Ending({ friend, theme }) {
  const fired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired.current) {
            fired.current = true;
            fireCelebration();
          }
        });
      },
      { threshold: 0.5 }
    );
    const el = document.getElementById('ending-section');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fireCelebration = () => {
    const duration = 2500;
    const end = Date.now() + duration;
    (function frame() {
      confetti({ particleCount: 3, angle: 60, spread: 60, origin: { x: 0 }, colors: [theme.primary, theme.secondary, '#F5C453'] });
      confetti({ particleCount: 3, angle: 120, spread: 60, origin: { x: 1 }, colors: [theme.primary, theme.secondary, '#F5C453'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    setTimeout(() => {
      confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 }, colors: [theme.primary, theme.secondary, '#F5C453'] });
    }, 400);
  };

  return (
    <section id="ending-section" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden">
      <FloatingParticles count={26} color={theme.particle} />

      {/* floating balloons */}
      <div className="pointer-events-none absolute inset-0">
        {['🎈', '🎈', '🎈', '🎈', '🎈'].map((b, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl"
            style={{ left: `${10 + i * 18}%`, bottom: '-10%' }}
            animate={{ y: ['0%', '-140vh'], rotate: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 10 + i * 1.5, repeat: Infinity, delay: i * 1.2, ease: 'easeInOut' }}
          >
            {b}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-lg"
      >
        <span className="text-6xl">{friend.favoriteEmoji}</span>
        <p className="font-script text-3xl md:text-4xl text-slate-100 mt-6 leading-relaxed">
          No matter where life takes us... you'll always have a special place in my heart.
        </p>
        <h2 className={`mt-8 font-display text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent ${theme.gradientText}`}>
          Happy Friendship Day ❤️
        </h2>
        <p className="text-slate-400 text-sm mt-4">— made with love, for {friend.name}</p>
      </motion.div>
    </section>
  );
}
