// import React, { useEffect, useRef } from 'react';
// import { Music, VolumeX } from 'lucide-react';
// import { useFriend } from '../context/FriendContext.jsx';

// /**
//  * Optional background music toggle.
//  * Drop an mp3 at public/music/theme.mp3 and it will play/pause here.
//  * If no file is present the button still works, it just has nothing to play.
//  */
// export default function MusicToggle() {
//   const { musicOn, setMusicOn } = useFriend();
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (!audioRef.current) return;
//     if (musicOn) {
//       audioRef.current.volume = 0.35;
//       audioRef.current.play().catch(() => {});
//     } else {
//       audioRef.current.pause();
//     }
//   }, [musicOn]);

//   return (
//     <>
//       <audio ref={audioRef} src="/music/theme.mp3" loop />
//       <button
//         onClick={() => setMusicOn((v) => !v)}
//         className="fixed top-5 right-5 z-40 glass rounded-full p-3 hover:scale-110 active:scale-95 transition"
//         aria-label="Toggle background music"
//       >
//         {musicOn ? <Music size={18} className="text-pink-300" /> : <VolumeX size={18} className="text-slate-300" />}
//       </button>
//     </>
//   );
// }

// [
//   {
//     "id": "vansh",
//     "name": "Vansh",
//     "gender": "male",
//     "nickname": "Poplu",
//     "friendshipYears": "3 Years, 7 Month & 15 Days",
//     "favoriteEmoji": "❤️",
//     "favoriteColor": "#22D3EE",
//     "quote": "You are one of the best chapters of my life.That I never want it to END",
//     "passwordQuestions": [
//       { "question": "What nickname do I call you?", "answer": "Poplu" },
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "At What Day We Propose Each Other with rose ?", "answer": "11th Feb" },
//       { "question": "Who usually gets angry first?", "answer": "Me" },
//       { "question": "What was our special memory Placed?", "answer": "Dausa" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/vc.jpg",
//         "title": "The Day I Fell In Love With You",
//         "description": "When You hold My hand taking me out from crowd.",
//         "date": "1st Oct 2022"
//       },
//       {
//         "image": "/memories/vc2.jpg",
//         "title": "Your Birthday",
//         "description": "This Day I feel proud that I fullfill some of your dream.",
//         "date": "28th Nov 2023"
//       },
//       {
//         "image": "/memories/vc1.jpg",
//         "title": "Late Night Fun",
//         "description": "This is the moment I realize how much you love me more than your sleep",
//         "date": "Late night, forever memory"
//       }
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile that just want me to smile" },
//       { "emoji": "❤️", "text": "Your Love for me that alway make me strong" },
//       { "emoji": "🤗", "text": "Your hug that take away my stress, my saddnes" },
//       { "emoji": "😂", "text": "Your funny jokes for making me happy" },
//       { "emoji": "🌸", "text": "Your kindness, positivity & support" }
//     ],
//     "meter": { "trust": 100, "fun": 100, "support": 100, "drama": 200, "foodSharing": 100 },
//     "letter": "Bhoundu , you are the only person I run first when I am feeling Low , hurt , and overthinking because you make me understand you are only who can tolerate me but sometime you can't but its okay And once you feel for a sec that i may leave you but you never know that how much I LOVE YOU ❤️ because you never compare it or you never understand but just know one thing My love for you is never selfish I don't love you for what I'll get in return. I love you without conditions, without expectations — even if you never love me back the same way. But my love for you never gonna change. Forever Yours",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener who listen my every bak bak but sometimes get tired" },
//       { "icon": "😂", "title": "Best Funny Song maker" },
//       { "icon": "🍕", "title": "Food Partner" },
//       { "icon": "🤗", "title": "Best Hug that make me realize why i love you ❤️" },
//       { "icon": "💖", "title": "Most Caring that make me feel that I don't need to handel anything when you are with me 🤗" }
//     ]
//   },
//   {
//     "id": "sagar",
//     "name": "Sagar",
//     "gender": "male",
//     "nickname": "Fakeuchand",
//     "friendshipYears": 3,
//     "favoriteEmoji": "🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the brother & friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "What nickname do I call you?", "answer": "Fakeuchand" },
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "What's our company name that we are going to give?", "answer": "Backchodians" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" },
//       { "question": "When You came to meet me at my home?", "answer": "24th May" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/s&p.jpg",
//         "title": "First Trip",
//         "description": "Three Days, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/S&p1.jpg",
//         "title": "Dandiya Night",
//         "description": "The countless icecream with countless talks and funny memories.",
//         "date": "2024"
//       },
//       {
//         "image": "/memories/s&p3.jpg",
//         "title": "The Lakshay Night",
//         "description": "Screamed every lyric, lost our voices, no regrets.",
//         "date": "26th Feb 2025"
//       }
      
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support" },
//       { "emoji": "😂", "text": "Your funny jokes" },
//       { "emoji": "🌸", "text": "Your positivity" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "drama": 200, "foodSharing": 100 },
//     "letter": "Sagar, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship. I'm still waiting for the day you guys come to Indore, so we can recreate memories just like Udaipur. My friendship never gonna change I am always their for you . You can count on me ",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "😂", "title": "Meme King" },
//       { "icon": "😊", "title": "Caring" },
//       { "icon": "😂", "title": "Single for very long" }
//     ]
//   },
//   {
//     "id": "paras",
//     "name": "Paras",
//     "gender": "male",
//     "nickname": "overthinker",
//     "friendshipYears": 3,
//     "favoriteEmoji": "🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the brother & friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "What's our company name that we are going to give?", "answer": "Backchodians" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/s&p.jpg",
//         "title": "First Trip",
//         "description": "Three Days, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/S&p1.jpg",
//         "title": "Dandiya Night",
//         "description": "The countless icecream with countless talks and funny memories.",
//         "date": "2024"
//       },
//       {
//         "image": "/memories/s&p3.jpg",
//         "title": "The Lakshay Night",
//         "description": "Screamed every lyric, lost our voices, no regrets.",
//         "date": "26th Feb 2025"
//       }
      
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support" },
//       { "emoji": "😊", "text": "Your Thinking and strength" },
//       { "emoji": "🌸", "text": "Your positivity" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "drama": 0, "foodSharing": 100 },
//     "letter": "Paras, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship.I know what you are facing and struggling But still waiting for the day you guys come to Indore, so we can recreate memories just like Udaipur. My friendship never gonna change I am always their for you .You can count on me ",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "🌸", "title": "Deep thinkier & guider" },
//       { "icon": "😊", "title": "Caring" }
//     ]
//   },
//    {
//     "id": "ayushi",
//     "name": "Ayushi",
//     "gender": "female",
//     "nickname": "Chuhiya",
//     "friendshipYears": 8,
//     "favoriteEmoji": "❤️🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the sister & friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "What nickname do I call you?", "answer": "Chuhiya" },
//       { "question": "Which place did we first meet?", "answer": "School" },
//       { "question": "What was our special memory Placed?", "answer": "School" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/ayushi.jpg",
//         "title": "Cafe Meet",
//         "description": "Three hours, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/ayushi1.jpg",
//         "title": "Dandiya Night",
//         "description": "The place where we enjoyed and have fun"
//       }
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support" },
//       { "emoji": "😊", "text": "Your Thinking and strength" },
//       { "emoji": "🌸", "text": "Your positivity" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "drama": 200, "foodSharing": 100 },
//     "letter": "Ayushi, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship. My friendship never gonna change I am always their for you .You can count on me ",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "🌸", "title": "Beautiful Soul" },
//       { "icon": "😊", "title": "Caring" }
//     ]
//   },
//   {
//     "id": "diya",
//     "name": "Diya",
//     "gender": "female",
//     "nickname": "panda",
//     "friendshipYears": 1.2,
//     "favoriteEmoji": "❤️🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the sister & friend I got to choose and given by office politics.",
//     "passwordQuestions": [
//       { "question": "What nickname do I call you?", "answer": "Panda" },
//       { "question": "Which place did we first meet?", "answer": "Office" },
//       { "question": "What was our special memory Placed?", "answer": "Office" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/d1.jpg",
//         "title": "Diwali",
//         "description": "Three hours, unforgetable memories , a friendship for life.",
//         "date": "2025"
//       },
//       {
//         "image": "/memories/d2.jpg",
//         "title": "Random Day",
//         "description": "The day we had so much fun trolling office outfit recommendations, taking a ton of photos, and just enjoying every bit of it.",
//         "date": "2025"
//       },
//       {
//         "image": "/memories/d3.jpg",
//         "title": "Last Day In Office",
//         "description": "The day we realized we could no longer just say 'chalo, kal milte hain' — but that never changed our friendship.",
//         "date": "2026"
//       }
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support & positivity" },
//       { "emoji": "😊", "text": "Your Thinking and strength" },
//       { "emoji": "🌸", "text": "Your Laugh" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "foodSharing": 100 },
//     "letter": "Diya Ma'am, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship. My friendship never gonna change I am always their for you .You can count on me . I am missing you so much. Sharing Food , Telling 'Diya Ma'am mere liye khana le ana', 'Diya Ma'am kuch acha khana h ' , 'Diya Ma'am IceCream khaye '",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "🌸", "title": "Beautiful Soul" },
//       { "icon": "😊", "title": "Caring" }
//     ]
//   },
//   {
//     "id": "harsh",
//     "name": "Harsh",
//     "gender": "male",
//     "nickname": "kittu",
//     "friendshipYears": 8,
//     "favoriteEmoji": "🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the brother & friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "What nickname do I call you?", "answer": "Kittu" },
//       { "question": "Which place did we first meet?", "answer": "School" },
//       { "question": "What was our special memory Placed?", "answer": "School" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/harsh2.jpeg",
//         "title": "My Birthday",
//         "description": "Three hours, unforgetable memories , a friendship for life.",
//         "date": "2021"
//       },
//       {
//         "image": "/memories/harsh.jpg",
//         "title": "Recent Meet",
//         "description": "The day we had so much fun.",
//         "date": "2026"
//       }
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support & positivity" },
//       { "emoji": "😊", "text": "Your Thinking and strength" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "foodSharing": 100 },
//     "letter": "Harsh, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship. My friendship never gonna change I am always their for you .You can count on me .",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "🌸", "title": "Deep thinkier & guider" },
//       { "icon": "😊", "title": "Caring" },
//       { "icon": "😂", "title": "Single for very long" }
//     ]
//   },
//   {
//     "id": "parul",
//     "name": "Parul",
//     "gender": "female",
//     "nickname": "chulbul",
//     "friendshipYears": 3,
//     "favoriteEmoji": "❤️🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the friend I got to choose and given by paras.",
//     "passwordQuestions": [
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "What was our special memory Placed?", "answer": "College" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/parul3.jpg",
//         "title": "First Trip",
//         "description": "Three Days, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/parul.jpg",
//         "title": "Dandiya Night",
//         "description": "The vibe the dance.",
//         "date": "2024"
//       },
//       {
//         "image": "/memories/parul2.jpg",
//         "title": "The Lakshay Night",
//         "description": "Screamed every lyric, lost our voices, no regrets.",
//         "date": "26th Feb 2025"
//       }
      
//     ],
//     "specialQualities": [
//       { "emoji": "😊", "text": "Your smile" },
//       { "emoji": "🤗", "text": "Your kindness , support & positivity" },
//       { "emoji": "😊", "text": "Your Thinking and strength" },
//       { "emoji": "🌸", "text": "Your Beautiful soul" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "foodSharing": 100 },
//     "letter": "Parul, thank you for being my friend and for loving this friendship unconditionally — never expecting daily calls or daily conversations, yet never letting that change what we have core friendship. My friendship never gonna change I am always their for you .You can count on me .",
//     "awards": [
//       { "icon": "🏆", "title": "Best Listener" },
//       { "icon": "🌸", "title": "Beautiful Soul" },
//       { "icon": "😊", "title": "Caring" },
//       { "icon": "😂", "title": "Talkative" }
//     ]
//   },
//    {
//     "id": "mahima",
//     "name": "Mahima",
//     "gender": "female",
//     "nickname": "chibi",
//     "friendshipYears": 3,
//     "favoriteEmoji": "❤️🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "What was our special memory Placed?", "answer": "Flat" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/m2.jpg",
//         "title": "First Trip",
//         "description": "Three Days, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/mahima.jpg",
//         "title": "Dandiya Night",
//         "description": "The vibe the dance.The get ready fun.",
//         "date": "2024"
//       },
//       {
//         "image": "/memories/mahima1.jpg",
//         "title": "My Brithday",
//         "description": "lots of fun",
//         "date": "1st July 2026"
//       }
      
//     ], 
//      "specialQualities": [
//       { "emoji": "😂", "text": "Your Laugh Like Camel" },
//       { "emoji": "🤗", "text": "Your kindness , support & positivity" },
//       { "emoji": "🌸", "text": "Your soul" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "foodSharing": 100 },
//     "letter": "Mahima, thank you for being a good friend. For solving things between me and vansh and also between us. Changing your habit for me so that I don't feel stressed . Cleaning room because I don't like. Doing things for me Thank you.Some people become friends, some become family. You're both",
//     "awards": [
//       { "icon": "🏆", "title": "Over Explainer" },
//       { "icon": "😊", "title": "Caring" },
//       { "icon": "😂", "title": "Talkative" }
//     ]
//   },
//   {
//     "id": "anmol",
//     "name": "Anmol",
//     "gender": "male",
//     "nickname": "Anmol",
//     "friendshipYears": 3,
//     "favoriteEmoji": "🤗",
//     "favoriteColor": "#EC4899",
//     "quote": "You are the friend I got to choose.",
//     "passwordQuestions": [
//       { "question": "Which place did we first meet?", "answer": "College" },
//       { "question": "What was our special memory Placed?", "answer": "Flat" },
//       { "question": "Where is our first and best trip?", "answer": "Udaipur" }
//     ],
//     "memories": [
//       {
//         "image": "/memories/anmol.jpeg",
//         "title": "First Trip",
//         "description": "Three Days, unforgetable memories , a friendship for life.",
//         "date": "2023"
//       },
//       {
//         "image": "/memories/vcma.jpg",
//         "title": "Dandiya Night",
//         "description": "The vibe the dance.The get ready fun.",
//         "date": "2024"
//       },
//       {
//         "image": "/memories/anmol2.jpeg",
//         "title": "My Brithday",
//         "description": "lots of fun",
//         "date": "1st July 2026"
//       }
      
//     ], 
//      "specialQualities": [
//       { "emoji": "😂", "text": "Your Laugh Like Horse" },
//       { "emoji": "🌸", "text": "Your Over Excitment" }
//     ],
//     "meter": { "trust": 100, "fun": 98, "support": 100, "foodSharing": 100 },
//     "letter": "Anmol, thank you for being a good friend and treating like younger Sister.Some people become friends, some become family. You're both ",
//     "awards": [
//       { "icon": "🏆", "title": "Over Excitment" },
//       { "icon": "😂", "title": "Silent Listner" }
//     ]
//   }
// ]


import React, { useEffect, useRef } from 'react';
import { Music, VolumeX, Disc } from 'lucide-react';
import { useFriend } from '../context/FriendContext.jsx';

export default function MusicToggle() {
  const { musicOn, setMusicOn, activeFriend } = useFriend();
  const audioRef = useRef(null);

  // Direct Online Audio Stream Link
  const currentSongSrc = activeFriend?.song?.src || "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.volume = 0.4;
      // Try playing automatically
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Modern browsers require 1 user click to unlock audio context
          const enableAudioOnUserInteraction = () => {
            if (audioRef.current && musicOn) {
              audioRef.current.play();
            }
            window.removeEventListener('click', enableAudioOnUserInteraction);
          };
          window.addEventListener('click', enableAudioOnUserInteraction);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [musicOn, currentSongSrc]);

  return (
    <div className="fixed top-5 right-5 z-40 flex items-center gap-2">
      {/* Current Song Title Badge */}
      {musicOn && activeFriend?.song && (
        <div className="glass px-3 py-1.5 rounded-full text-xs font-medium text-pink-300 animate-pulse flex items-center gap-1.5">
          <Disc size={14} className="animate-spin text-pink-400" />
          <span>{activeFriend.song.title}</span>
        </div>
      )}

      {/* Online Audio Tag */}
      <audio 
        key={currentSongSrc} 
        ref={audioRef} 
        src={currentSongSrc} 
        autoPlay={musicOn}
        loop 
        preload="auto"
      />

      <button
        onClick={() => setMusicOn((v) => !v)}
        className="glass rounded-full p-3 hover:scale-110 active:scale-95 transition shadow-lg flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20"
        aria-label="Toggle background music"
      >
        {musicOn ? (
          <Music size={18} className="text-pink-300 animate-bounce" />
        ) : (
          <VolumeX size={18} className="text-slate-300" />
        )}
      </button>
    </div>
  );
}