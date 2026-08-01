import React, { createContext, useContext, useState } from 'react';

const FriendContext = createContext(null);

export function FriendProvider({ children }) {
  const [friend, setFriend] = useState(null);
  const [musicOn, setMusicOn] = useState(false);

  return (
    <FriendContext.Provider value={{ friend, setFriend, musicOn, setMusicOn }}>
      {children}
    </FriendContext.Provider>
  );
}

export function useFriend() {
  const ctx = useContext(FriendContext);
  if (!ctx) throw new Error('useFriend must be used inside <FriendProvider>');
  return ctx;
}
