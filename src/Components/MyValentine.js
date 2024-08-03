import crow from '../assets/Crows/crow.webp';
import crow1 from '../assets/Crows/crow1.webp';
import crow2 from '../assets/Crows/crow2.webp';
import crow3 from '../assets/Crows/crow3.webp';

export default function MyValentine() {
  return (
    <section className="flex flex-row justify-center flex-wrap gap-8 h-screen w-full">
      <a href={crow} target="_blank" rel="noopener noreferrer">
        <img src={crow} className="cursor-pointer" alt="crow" />
      </a>
      <a href={crow1} target="_blank" rel="noopener noreferrer">
        <img src={crow1} className="cursor-pointer" alt="crow1" />
      </a>
      <a href={crow2} target="_blank" rel="noopener noreferrer">
        <img src={crow2} className="cursor-pointer" alt="crow2" />
      </a>
      <a href={crow3} target="_blank" rel="noopener noreferrer">
        <img src={crow3} className="cursor-pointer" alt="crow3" />
      </a>
    </section>
  );
}
