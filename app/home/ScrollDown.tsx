export default function ScrollDown() {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
      <div className="w-0 h-25 border border-white flex items-start justify-center">
        <div className="w-4 h-4 bg-white rounded-full animate-bounce absolute -bottom-2 shadow-[0_0_5px_2px_rgba(255,255,255,0.75)]" />
      </div>
    </div>
  );
}