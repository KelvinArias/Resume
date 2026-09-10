import { Play } from 'lucide-react';

type PlayButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function PlayButton({ onClick }: PlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Play video"
      className={`
        group flex h-14 w-14 items-center justify-center rounded-full
        absolute bottom-4 right-4 z-20
        border border-cyan-300/90 bg-black/70
        shadow-[0_0_12px_rgba(34,211,238,0.9),0_0_28px_rgba(34,211,238,0.45)]
        transition duration-300 ease-out
        hover:scale-105 hover:shadow-[0_0_18px_rgba(34,211,238,1),0_0_40px_rgba(34,211,238,0.65)]
        active:scale-95
      `}
    >
      {/* soft outer glow */}
      <span className="absolute inset-0 rounded-full bg-cyan-400/10 blur-md transition group-hover:bg-cyan-400/20" />
      {/* inner dark circle */}
      <span className="absolute inset-0.75 rounded-full bg-[#02070a]/95 shadow-inner" />
      {/* play icon */}
      <div className="relative z-10 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
        <Play size={16} color="#fff" strokeWidth={1.75} />
      </div>
    </button>
  );
}
