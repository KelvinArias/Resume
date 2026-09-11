import { Play } from 'lucide-react';

export default function IntroButton() {
  return (
    <button className="group hidden lg:flex cursor-pointer absolute bottom-[64px] right-[63px] w-[257px] items-center gap-4 overflow-hidden rounded-[10px] border border-[#34CFFF] bg-black px-8 py-4 text-sm text-white/80 transition duration-300 shadow-[10px_10px_30px_0_rgba(255,255,255,0.25),0_0_28px_0_rgba(52,207,255,0.26)] hover:shadow-[10px_10px_34px_0_rgba(255,255,255,0.28),0_0_42px_0_rgba(52,207,255,0.36)]">
      <span className="pointer-events-none absolute inset-[-18px] rounded-[18px] bg-[#34CFFF]/10 blur-2xl opacity-70 transition group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-[-1px] rounded-[inherit] shadow-[inset_0_0_25px_0_rgba(52,207,255,0.5)]" />
      <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-white">
        <Play size={15} color="white" strokeWidth={1.75} />
      </div>
      <div className="relative flex flex-col gap-2 text-left leading-[17.472px]">
        <span className="font-bold text-sm">Watch Intro</span>
        <span className="text-sm text-white/75">1 min</span>
      </div>
    </button>
  );
}
