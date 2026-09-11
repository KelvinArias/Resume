// Hero Text Component

interface HeroTextProps {
  title: string;
  subtitle?: string | null;
  paragraph: string;
}

export default function HeroText({ title, subtitle, paragraph }: Readonly<HeroTextProps>) {
  return (
    <div className="flex flex-col gap-6 flex-1 justify-center items-center lg:items-start">
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <h1 className="text-7xl font-bold text-white leading-none">{title}</h1>
          <span className="text-5xl text-cyan-400">.</span>
        </div>
        <svg
          className="mt-0.5 h-3 w-[216px] max-w-[56vw]"
          viewBox="0 0 220 12"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M3 6.2 C26 4.8 45 6.9 68 5.9 C93 4.8 111 7.5 136 6.1 C161 4.8 183 6.6 217 4.7"
            fill="none"
            stroke="#34CFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 7.1 C34 6.7 58 7.9 84 6.8 C117 5.5 144 7.4 176 6.3 C191 5.8 204 5.6 216 4.9"
            fill="none"
            stroke="#34CFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.55"
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4 max-w-md lg:max-w-xs">
        {subtitle && (
          <h2 className="text-2xl font-semibold text-white">{subtitle}</h2>
        )}
        <p className="text-base leading-relaxed text-white/70 text-center lg:text-left">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
