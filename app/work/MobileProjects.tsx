import { useState } from "react";
import { Code2, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  year: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
};



export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-6 text-white md:hidden">
      <div className="mx-auto max-w-92.5">
        {/* Project Header with Year and Action Buttons */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm text-cyan-400">{currentProject.year}</span>

          <div className="flex gap-3">
            {currentProject.githubUrl && (
              <button className="cursor-pointer">
                <Code2 size={30} color="#fff" strokeWidth={1.75} />
              </button>
            )}

            {currentProject.liveUrl && (
              <button className="p-1 rounded-full border border-[#34CFFF]/70 hover:bg-[#34CFFF]/20 cursor-pointer transition-colors">
                <ExternalLink size={20} color="#fff" strokeWidth={1.75} />
              </button>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h2 className="mb-4 text-[21px] font-light tracking-wide">
          {currentProject.title}
        </h2>

        {/* Project Image Carousel */}
        <div
          className="relative h-[164px] cursor-grab"
          onClick={goNext}
        >
          {projects.map((project, index) => {
            const position =
              (index - currentIndex + projects.length) % projects.length;

            if (position > 2) return null;

            return (
              <div
                key={project.title}
                className="absolute left-0 top-0 h-full w-[245px] rounded-lg border border-cyan-400/70 bg-zinc-900 transition-all duration-500"
                style={{
                  transform: `translateX(${position * 32}px) scale(${1 - position * 0.04
                    })`,
                  zIndex: 10 - position,
                  opacity: 1 - position * 0.25,
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Project Description */}
        <p className="mt-5 max-w-85 text-[15px] leading-tight text-white/60">
          {currentProject.description}
        </p>

        {/* Project Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {currentProject.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-cyan-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Swipe Indicator */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="h-[2px] w-12 rounded-full bg-cyan-400" />
          <p className="text-[10px] text-white">Swipe to explore</p>
        </div>


      </div>
    </section>
  );
}
