# Forever Friends ❤️

A premium, emotional, personalized Friendship Day web experience — dark theme, gradients,
glassmorphism, and cinematic animations. Built with React 18, React Router, Tailwind CSS,
Framer Motion, canvas-confetti and react-type-animation.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## How the flow works

1. **Landing (`/`)** — visitor types their name.
   - Not in your data → cute "we don't know each other" screen.
   - Found → 5 personalized security questions (no generic password).
   - All 5 correct → magical portal-unlock animation → redirected to `/portal`.
2. **Portal (`/portal`)** — reads the verified friend from React Context and renders
   all 10 sections (Hero, Memories, Timeline, Qualities, Friendship Meter, Secret Letter,
   Awards, Emoji Rain, Quiz Badge, Ending) themed automatically by that friend's `gender`.

Refreshing `/portal` directly redirects back to `/` — verification isn't stored anywhere
(by design, so nobody can bookmark straight into a friend's portal).

## Adding / editing friends

Everything is data-driven from **`src/data/friends.json`**. No component code needs to
change to add a new friend — just add a new object to the array:

```json
{
  "id": "unique-id",
  "name": "Their Name",
  "gender": "male | female",
  "nickname": "...",
  "friendshipYears": 4,
  "favoriteEmoji": "🔥",
  "favoriteColor": "#22D3EE",
  "quote": "A short line for the hero section",
  "passwordQuestions": [
    { "question": "...", "answer": "..." }
    // exactly 5 recommended
  ],
  "memories": [
    { "image": "/memories/xyz.jpg", "title": "...", "description": "...", "date": "2023" }
  ],
  "specialQualities": [{ "emoji": "😊", "text": "Your smile" }],
  "meter": { "trust": 99, "fun": 100, "support": 100, "drama": 40, "foodSharing": "∞" },
  "letter": "The long secret-letter message.",
  "awards": [{ "icon": "🏆", "title": "Best Listener" }]
}
```

Answers are matched case-insensitively with whitespace trimmed, so `"Momos"`, `" momos "`
and `"momos"` all count as correct.

## Adding real photos

Drop your image files in **`public/memories/`** and reference them from `friends.json` as
`/memories/filename.jpg`. If an image is missing or fails to load, the gallery gracefully
shows a soft placeholder instead of breaking — so you can wire up the data first and drop
in photos later.

## Adding background music (optional)

Drop an mp3 at **`public/music/theme.mp3`**. The note icon in the top-right corner toggles
it on/off; nothing plays until the visitor taps it (autoplay-with-sound is blocked by
browsers otherwise).

## Gender-based theming

All colors/gradients/icons per gender live in one place: **`src/hooks/useTheme.js`**.
`male` → royal blue/purple/cyan, cool glowing effects. `female` → pink/lavender/rose-gold,
soft dreamy sparkle effects. Add more keys there (e.g. a third theme) and reference the new
`gender` value in your friend objects — every section already reads colors from `theme.*`
so nothing else needs to change.

## Project structure

```
src/
  components/
    background/     → AuroraBackground, FloatingParticles (ambient motion)
    portal/          → one file per portal section (Hero, MemoryGallery, Timeline, ...)
    Loader.jsx        → initial "Preparing Your Memories..." screen
    MusicToggle.jsx
  context/
    FriendContext.jsx → holds the currently-verified friend + music state
  data/
    friends.json      → ← YOUR DATA LIVES HERE
  hooks/
    useTheme.js        → gender → color/gradient/icon tokens
  pages/
    Landing.jsx         → name entry + verification + unlock animation
    Portal.jsx           → assembles all 10 sections for the verified friend
  utils/
    particles.js          → floating-particle + string-normalize helpers
  App.jsx, main.jsx, index.css
```

## Notes on scope

This build focuses the animation budget on **Framer Motion** (page transitions, scroll
reveals, springs, 3D flip cards) plus **canvas-confetti** (fireworks/emoji bursts) and
**react-type-animation** (typing effects for the welcome line and the letter). GSAP and
Lottie were intentionally left out to keep the dependency footprint light — Framer Motion's
`whileInView` already covers every "animate on scroll" moment requested. If you want a
specific Lottie illustration somewhere (e.g. the loading screen), it's a drop-in addition:
`npm install lottie-react` and swap the relevant element in `Loader.jsx`.
