import { Play } from 'lucide-react';

export default function IntroButton() {
  return (
    <button className="lg:flex hidden cursor-pointer absolute gap-4 bottom-12 right-12 w-62 pl-8 py-3 bg-black border border-cyan-400 rounded-md text-sm text-white/80 transition shadow-[10px_10px_30px_0_rgba(255,255,255,0.25)] inset-shadow-[0_0_25px_0_rgba(52,207,255,0.5)]">
      <div className="border h-10 w-10 border-white flex items-center justify-center rounded-full">
        <Play size={15} color="white" strokeWidth={1.75} />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-bold text-sm">Watch Intro</span>
        <span className="text-sm text-white/75">1 min</span>
      </div>
    </button>
  );
}
