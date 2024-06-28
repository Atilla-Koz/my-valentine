import React, { useRef, useState } from 'react';
import Sound from '../assets/sound.mp4';

export default function Valentine() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [noButtonTextIndex, setNoButtonTextIndex] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);

  const noButtonTexts = [
    'No',
    'Are you sure?',
    'Really Sure?',
    'Think again',
    'Last chance',
    'Surely not?',
    'You might regret this',
    'Have a hearth !',
    'Dont be so cold !',
    'I will keep asking',
    'I will keep asking',
    'is that your final answer?',
    'you are breaking my heart :(',
  ];

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleYesButtonClick = () => {
    setIsAccepted(true);
  };

  const handleNoButtonClick = () => {
    setNoButtonTextIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-16">
      {!isPlaying && (
        <div className="flex flex-col items-center gap-8">
          <button
            onClick={handlePlaySound}
            className="bg-pink-500 text-white px-8 py-4 rounded"
          >
            Start
          </button>
        </div>
      )}
      {isPlaying && !isAccepted && (
        <>
          <div className="flex flex-col items-center gap-8">
            <img
              src="https://media.tenor.com/ZhNxfL0GmoMAAAAi/mocha-bear-hearts.gif"
              alt="Mocha bear hearts"
            />
            <h1 className="text-[2rem]">Will You Be My Valentine?</h1>
          </div>
          <div className="flex flex-row gap-8">
            <button
              onClick={handleYesButtonClick}
              className="bg-green-500 text-white px-8 py-4 rounded"
            >
              Yes!
            </button>
            {noButtonTextIndex < noButtonTexts.length ? (
              <button
                onClick={handleNoButtonClick}
                className="bg-red-500 text-white px-8 py-4 rounded"
              >
                {noButtonTexts[noButtonTextIndex]}
              </button>
            ) : null}
          </div>
        </>
      )}
      {isAccepted && (
        <div className="flex flex-col items-center gap-8">
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Kissing bear"
          />
          <h1 className="text-[5rem]">Ok Yay !!!</h1>
        </div>
      )}
      <audio ref={audioRef} src={Sound} />
    </section>
  );
}
