/**
 * Generates a stable array of randomized particle configs
 * (used for floating hearts / sparkles / emoji rain backgrounds).
 */
export function generateParticles(count, kinds = ['heart', 'sparkle']) {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 12 + Math.random() * 20,
    duration: 7 + Math.random() * 9,
    delay: Math.random() * 10,
    kind: kinds[Math.floor(Math.random() * kinds.length)],
    drift: Math.random() * 60 - 30,
  }));
}

export function normalize(str) {
  return (str || '').trim().toLowerCase();
}
