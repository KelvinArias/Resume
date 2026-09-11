export default function ScrollDown() {
  return (
    <div className="pointer-events-none absolute bottom-[79px] left-1/2 hidden h-[115px] w-[100px] -translate-x-1/2 lg:block">
      <div className="absolute left-1/2 top-0 h-[82px] w-px -translate-x-1/2 bg-white/65" />
      <div className="scroll-glow-dot absolute left-1/2 top-[76px] h-[15px] w-[15px] rounded-full bg-white shadow-[0_0_5px_2px_rgba(255,255,255,0.75),0_0_18px_4px_rgba(255,255,255,0.25)]" />
    </div>
  );
}
