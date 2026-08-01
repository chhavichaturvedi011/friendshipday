import React, { useEffect, useRef } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { useFriend } from '../context/FriendContext.jsx';

/**
 * Optional background music toggle.
 * Drop an mp3 at public/music/theme.mp3 and it will play/pause here.
 * If no file is present the button still works, it just has nothing to play.
 */
export default function MusicToggle() {
  const { musicOn, setMusicOn } = useFriend();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  return (
    <>
      <audio ref={audioRef} src="/music/theme.mp3" loop />
      <button
        onClick={() => setMusicOn((v) => !v)}
        className="fixed top-5 right-5 z-40 glass rounded-full p-3 hover:scale-110 active:scale-95 transition"
        aria-label="Toggle background music"
      >
        {musicOn ? <Music size={18} className="text-pink-300" /> : <VolumeX size={18} className="text-slate-300" />}
      </button>
    </>
  );
}
