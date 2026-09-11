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
        <img
          src="/svg/hero-underline.svg"
          alt=""
          className="mt-0.5 h-0.5 w-[78px] max-w-[22vw]"
          aria-hidden="true"
          draggable={false}
        />
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
