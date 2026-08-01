import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useFriend } from '../context/FriendContext.jsx';
import useTheme from '../hooks/useTheme.js';
import AuroraBackground from '../components/background/AuroraBackground.jsx';
import MusicToggle from '../components/MusicToggle.jsx';

import Hero from '../components/portal/Hero.jsx';
import MemoryGallery from '../components/portal/MemoryGallery.jsx';
import Timeline from '../components/portal/Timeline.jsx';
import Qualities from '../components/portal/Qualities.jsx';
import FriendshipMeter from '../components/portal/FriendshipMeter.jsx';
import SecretLetter from '../components/portal/SecretLetter.jsx';
import Awards from '../components/portal/Awards.jsx';
import EmojiRain from '../components/portal/EmojiRain.jsx';
import QuizBadge from '../components/portal/QuizBadge.jsx';
import Ending from '../components/portal/Ending.jsx';

export default function Portal() {
  const { friend } = useFriend();
  const theme = useTheme(friend?.gender);

  useEffect(() => {
    document.title = friend ? `Forever Friends — ${friend.name}` : 'Forever Friends';
  }, [friend]);

  // Guard: no verified friend in context (e.g. page refresh) -> back to entry
  if (!friend) return <Navigate to="/" replace />;

  return (
    <div className="relative">
      <AuroraBackground auroraClass={theme.auroraClass} />
      <MusicToggle />

      <Hero friend={friend} theme={theme} />
      <MemoryGallery friend={friend} theme={theme} />
      <Timeline friend={friend} theme={theme} />
      <Qualities friend={friend} theme={theme} />
      <FriendshipMeter friend={friend} theme={theme} />
      <SecretLetter friend={friend} theme={theme} />
      <Awards friend={friend} theme={theme} />
      <EmojiRain theme={theme} />
      <QuizBadge friend={friend} theme={theme} />
      <Ending friend={friend} theme={theme} />

      <footer className="relative z-10 text-center text-xs text-slate-500 py-8">
        Made with ❤️ for {friend.name} — Forever Friends
      </footer>
    </div>
  );
}
