import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import crow from '../assets/Crows/crow.webp';
import crow1 from '../assets/Crows/crow1.webp';
import crow2 from '../assets/Crows/crow2.webp';
import crow3 from '../assets/Crows/crow3.webp';
import crow4 from '../assets/Crows/crow4.webp';
import crow5 from '../assets/Crows/crow5.webp';
import crow6 from '../assets/Crows/crow6.webp';
import crow7 from '../assets/Crows/crow7.webp';
import Sound from '../assets/yelken.mp3';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function MyValentine() {
  const audioRef = useRef(null);

  const handlePlaySound = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-black">
      <p className="text-white text-wrap mr-8 ml-8">
        Şairin de dediği gib:"Belki doğru belki yanlıs bir referans noktasıdır
        ben de bilemiyorum ancak bence senin düsünebildiğin, benim
        düsünebildiğim tüm ihtimaller de cok keyifli… en azından ‘bütün
        ihtimallerden’ daha keyifli :)"
      </p>
      <div className="flex flex-row">
        <button
          onClick={handlePlaySound}
          className="bg-[rgba(255,255,255,0.5)] text-black px-16 py-2 rounded m-8"
        >
          <h1 className="">Play</h1>
        </button>
        <button className="bg-[rgba(255,255,255,0.5)] text-black px-16 py-2 rounded m-8">
          <Link to="/">
            {' '}
            <h1 className="">Back</h1>
          </Link>
        </button>
      </div>
      <audio ref={audioRef} src={Sound}></audio>
      <Slider {...settings} className="w-3/4">
        <div className="px-2">
          <a href={crow} target="_blank" rel="noopener noreferrer">
            <img src={crow} className="cursor-pointer w-full" alt="crow" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow1} target="_blank" rel="noopener noreferrer">
            <img src={crow1} className="cursor-pointer w-full" alt="crow1" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow4} target="_blank" rel="noopener noreferrer">
            <img src={crow4} className="cursor-pointer w-full" alt="crow3" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow2} target="_blank" rel="noopener noreferrer">
            <img src={crow2} className="cursor-pointer w-full" alt="crow2" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow3} target="_blank" rel="noopener noreferrer">
            <img src={crow3} className="cursor-pointer w-full" alt="crow3" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow5} target="_blank" rel="noopener noreferrer">
            <img src={crow5} className="cursor-pointer w-full" alt="crow5" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow6} target="_blank" rel="noopener noreferrer">
            <img src={crow6} className="cursor-pointer w-full" alt="crow6" />
          </a>
        </div>
        <div className="px-2">
          <a href={crow7} target="_blank" rel="noopener noreferrer">
            <img src={crow7} className="cursor-pointer w-full" alt="crow7" />
          </a>
        </div>
      </Slider>
    </section>
  );
}
