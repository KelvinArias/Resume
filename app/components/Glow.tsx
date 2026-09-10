
export default function Glow() {
  return (
    <div className="fixed w-full h-full top-0 left-0 pointer-events-none -z-10">
      <div className="aspect-square h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  z-10 rounded-full bg-radial from-[#363333] from-0% via-[#1c1a1a] via-30% via-[#191919] via-60% via-[#100f0f] via-80% to-[#000000] to-100% blur-3xl" />
      <div className="w-88 h-88 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  z-10 rounded-full shadow-[0_0_50px_10px_rgba(52,207,255,0.5)]" />
      <div className="w-88 h-88 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10 rounded-full bg-black shadow-[5px_-5px_5px_0px_rgba(52,207,255,0.75)] " />
    </div>
  );
}