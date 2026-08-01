/**
 * Returns a full theme token set based on a friend's gender.
 * Every color, gradient and icon-set the portal uses comes from here,
 * so adding a new gender variant only means adding one entry below.
 */
export const THEMES = {
  male: {
    key: 'male',
    label: 'Royal',
    gradientText: 'bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300',
    auroraClass: 'bg-aurora-boy',
    primary: '#4F46E5',
    secondary: '#7C3AED',
    accent: '#22D3EE',
    ring: 'ring-cyan-400/60',
    chip: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-200',
    button: 'bg-gradient-to-r from-indigo-500 to-cyan-400',
    glowShadow: '0 0 60px rgba(34,211,238,0.35)',
    icons: ['🤜🤛', '⚡', '🔥', '💙'],
    particle: '#67e8f9',
  },
  female: {
    key: 'female',
    label: 'Dreamy',
    gradientText: 'bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-300',
    auroraClass: 'bg-aurora-girl',
    primary: '#EC4899',
    secondary: '#A855F7',
    accent: '#FDA4AF',
    ring: 'ring-pink-400/60',
    chip: 'bg-pink-500/15 border-pink-400/30 text-pink-200',
    button: 'bg-gradient-to-r from-pink-500 to-fuchsia-400',
    glowShadow: '0 0 60px rgba(236,72,153,0.35)',
    icons: ['🦋', '🌸', '✨', '💗'],
    particle: '#f9a8d4',
  },
};

export default function useTheme(gender) {
  return THEMES[gender] || THEMES.female;
}
