import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, Check, Sparkles, Frown } from 'lucide-react';
import friends from '../data/friends.json';
import { useFriend } from '../context/FriendContext.jsx';
import { normalize } from '../utils/particles';
import FloatingParticles from '../components/background/FloatingParticles.jsx';
import AuroraBackground from '../components/background/AuroraBackground.jsx';

const STAGE = { NAME: 'name', NOT_FOUND: 'not_found', VERIFY: 'verify', UNLOCKING: 'unlocking' };

export default function Landing() {
  const navigate = useNavigate();
  const { setFriend } = useFriend();

  const [stage, setStage] = useState(STAGE.NAME);
  const [nameInput, setNameInput] = useState('');
  const [candidate, setCandidate] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [answerInput, setAnswerInput] = useState('');
  const [wrong, setWrong] = useState(false);

  const submitName = (e) => {
    e.preventDefault();
    const found = friends.find((f) => normalize(f.name) === normalize(nameInput));
    if (!found) {
      setStage(STAGE.NOT_FOUND);
      return;
    }
    setCandidate(found);
    setQIndex(0);
    setAnswerInput('');
    setStage(STAGE.VERIFY);
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    const q = candidate.passwordQuestions[qIndex];
    if (normalize(answerInput) !== normalize(q.answer)) {
      setWrong(true);
      setTimeout(() => setWrong(false), 500);
      return;
    }
    setAnswerInput('');
    if (qIndex + 1 < candidate.passwordQuestions.length) {
      setQIndex((i) => i + 1);
    } else {
      setStage(STAGE.UNLOCKING);
      setTimeout(() => {
        setFriend(candidate);
        navigate('/portal');
      }, 3200);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <AuroraBackground auroraClass="bg-aurora-girl" />
      <FloatingParticles count={20} color="#d8b4fe" />

      <AnimatePresence mode="wait">
        {stage === STAGE.NAME && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full max-w-sm glass rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex justify-center mb-5">
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center"
              >
                <Sparkles className="text-white" size={28} />
              </motion.div>
            </div>
            <h1 className="text-center font-display text-2xl font-bold mb-1">Forever Friends</h1>
            <p className="text-center text-slate-400 text-sm mb-6">
              What's your name?
            </p>
            <form onSubmit={submitName} className="space-y-3">
              <input
                autoFocus
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Type your name..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-400/40 transition placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 font-semibold hover:opacity-90 active:scale-[0.98] transition"
              >
                Continue <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        )}

        {stage === STAGE.NOT_FOUND && (
          <motion.div
            key="notfound"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full max-w-sm glass rounded-3xl p-8 text-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4"
            >
              <Frown size={26} className="text-rose-300" />
            </motion.div>
            <p className="font-display text-lg font-semibold mb-1">Oops...</p>
            <p className="text-slate-300 text-sm mb-6">
              I don't think we know each other 😅❤️
            </p>
            <button
              onClick={() => setStage(STAGE.NAME)}
              className="text-sm text-fuchsia-300 hover:text-fuchsia-200 transition"
            >
              Try another name
            </button>
          </motion.div>
        )}

        {stage === STAGE.VERIFY && candidate && (
          <motion.div
            key="verify"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, x: wrong ? [0, -10, 10, -6, 6, 0] : 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full max-w-sm glass rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center">
                <Lock className="text-white" size={22} />
              </div>
            </div>
            <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-1">
              Question {qIndex + 1} of {candidate.passwordQuestions.length}
            </p>
            <h2 className="text-center font-display text-lg font-semibold mb-5">
              {candidate.passwordQuestions[qIndex].question}
            </h2>

            <div className="flex gap-1.5 justify-center mb-5">
              {candidate.passwordQuestions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i < qIndex ? 'w-6 bg-emerald-400' : i === qIndex ? 'w-6 bg-fuchsia-400' : 'w-3 bg-white/15'
                  }`}
                />
              ))}
            </div>

            <form onSubmit={submitAnswer} className="space-y-3">
              <input
                autoFocus
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
                placeholder="Your answer..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40 transition placeholder-slate-500"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold hover:opacity-90 active:scale-[0.98] transition"
              >
                <Check size={18} /> Verify
              </button>
            </form>
            {wrong && (
              <p className="mt-3 text-center text-rose-400 text-sm">
                That's not quite right — try again 💭
              </p>
            )}
          </motion.div>
        )}

        {stage === STAGE.UNLOCKING && <UnlockAnimation name={candidate?.name} />}
      </AnimatePresence>
    </div>
  );
}

function UnlockAnimation({ name }) {
  return (
    <motion.div
      key="unlock"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 flex flex-col items-center justify-center text-center"
    >
      {/* light rays */}
      <motion.div
        className="absolute w-[36rem] h-[36rem] rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.25), transparent 30%)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      {/* portal ring */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative w-40 h-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-[0_0_100px_rgba(217,70,239,0.6)]"
      >
        <motion.span
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="text-5xl"
        >
          🔓
        </motion.span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-8 font-display text-xl font-semibold shimmer-text"
      >
        Unlocking memories with {name}...
      </motion.p>
    </motion.div>
  );
}
