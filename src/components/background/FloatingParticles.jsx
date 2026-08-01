import React, { useMemo } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { generateParticles } from '../../utils/particles';

/**
 * Ambient floating hearts + sparkles. Purely decorative, sits behind content.
 */
export default function FloatingParticles({ count = 22, color = '#f9a8d4', className = '' }) {
  const particles = useMemo(() => generateParticles(count), [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-[-8%] animate-float-particle"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        >
          {p.kind === 'heart' ? (
            <Heart size={p.size} fill={color} stroke="none" style={{ opacity: 0.55 }} />
          ) : (
            <Sparkles size={p.size} stroke={color} style={{ opacity: 0.65 }} />
          )}
        </div>
      ))}
    </div>
  );
}
