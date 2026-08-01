// import React, { createContext, useContext, useState } from 'react';

// const FriendContext = createContext(null);

// export function FriendProvider({ children }) {
//   const [friend, setFriend] = useState(null);
//   const [musicOn, setMusicOn] = useState(false);

//   return (
//     <FriendContext.Provider value={{ friend, setFriend, musicOn, setMusicOn }}>
//       {children}
//     </FriendContext.Provider>
//   );
// }

// export function useFriend() {
//   const ctx = useContext(FriendContext);
//   if (!ctx) throw new Error('useFriend must be used inside <FriendProvider>');
//   return ctx;
// }

import React, { createContext, useContext, useState } from 'react';
import friendsData from '../data/friends.json'; // Aapka JSON data array path

const FriendContext = createContext(null);

export function FriendProvider({ children }) {
  // 1. Initial state me pehla friend (Vansh) default set kiya hai
  // 2. Variable name 'activeFriend' rakha hai jo aapke components me use ho raha hai
  const [activeFriend, setActiveFriend] = useState(friendsData[0] || null);
  const [musicOn, setMusicOn] = useState(false);

  return (
    <FriendContext.Provider 
      value={{ 
        activeFriend, 
        setActiveFriend, 
        musicOn, 
        setMusicOn,
        // Backward compatibility ke liye 'friend' bhi de diya hai
        friend: activeFriend, 
        setFriend: setActiveFriend 
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}

export function useFriend() {
  const ctx = useContext(FriendContext);
  if (!ctx) throw new Error('useFriend must be used inside <FriendProvider>');
  return ctx;
}