import React, { useRef, useState } from 'react';
import Sound from '../assets/yelken.mp3';

export default function Valentine() {
  const audioRef = useRef(null);
  const [state, setState] = useState({
    isPlaying: false,
    noButtonTextIndex: 0,
    isAccepted: false,
    yesButtonSize: 1,
    backgroundClass: 'bg-crow1',
  });

  const noButtonTexts = [
    'No',
    'Are you sure?',
    'Really Sure?',
    'Think again',
    'Last chance',
    'Surely not?',
    'You might regret this',
    'Have a heart?',
    "Don't be so cold!",
    'I will keep asking',
    'I WILL KEEP ASKING',
    'Is that your final answer?',
    'You are breaking my heart :(',
    'But...',
  ];

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setState((prevState) => ({
        ...prevState,
        isPlaying: true,
        backgroundClass: 'bg-crow',
      }));
    }
  };

  const handleYesButtonClick = () => {
    setState((prevState) => ({ ...prevState, isAccepted: true }));
  };

  const handleNoButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      noButtonTextIndex: prevState.noButtonTextIndex + 1,
      yesButtonSize: prevState.yesButtonSize + 0.2,
    }));
  };

  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen gap-24 ${state.backgroundClass} bg-center`}
    >
      {!state.isPlaying && (
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={handlePlaySound}
            className="bg-[rgba(255,255,255,0.5)] text-black px-16 py-4 rounded"
          >
            The crows brought you a question from Atilla, Ilayda.
          </button>
        </div>
      )}
      {state.isPlaying && !state.isAccepted && (
        <>
          <div className="flex flex-col items-center gap-8">
            <img
              src="https://media.tenor.com/ZhNxfL0GmoMAAAAi/mocha-bear-hearts.gif"
              alt="Mocha bear hearts"
            />
            <h1 className="text-[2rem] text-[rgba(255,255,255,0.8)]">
              Will You Be My Valentine?
            </h1>
          </div>
          <div className="flex flex-row gap-24">
            <button
              onClick={handleYesButtonClick}
              className="bg-[rgba(0,128,0,0.5)] text-white px-8 py-4 rounded"
              style={{ transform: `scale(${state.yesButtonSize})` }}
            >
              Yes!
            </button>
            {state.noButtonTextIndex < noButtonTexts.length ? (
              <button
                onClick={handleNoButtonClick}
                className="bg-[rgba(255,0,0,0.5)] text-white px-8 py-4 rounded"
              >
                {noButtonTexts[state.noButtonTextIndex]}
              </button>
            ) : null}
          </div>
        </>
      )}
      {state.isAccepted && (
        <div className="flex flex-col items-center gap-8">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Kissing bear"
          />
          <h1 className="text-[5rem] text-[rgba(255,255,255,0.8)]">
            Ok Yay !!!
          </h1>
        </div>
      )}
      <audio ref={audioRef} src={Sound} />
    </section>
  );
}
