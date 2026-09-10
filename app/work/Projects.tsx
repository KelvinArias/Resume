import { Code2, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="hidden md:flex flex-3/4 flex-col gap-8 lg:max-w-2xl pt-8 lg:pt-0 items-center lg:items-end">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border border-[#34CFFF]/70 rounded-2xl p-6 block-gap-4 backdrop-blur-sm shadow-[0_0_20px_rgba(52,207,255,0.3)]"
        >
          {/* Project Header */}
          <div className="flex items-start justify-between pb-2">
            <div>
              <p className="text-xs text-cyan-400">{project.year}</p>
              <h3 className="text-4xl font-bold text-white py-1 mb-0">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-md">
                {project.description}
              </p>
            </div>
            <div className="flex gap-2">
              <button className="cursor-pointer">
                <Code2 size={30} color="#fff" strokeWidth={1.75} />
              </button>
              <button className="p-1 rounded-full border border-[#34CFFF]/70 hover:bg-[#34CFFF]/20 cursor-pointer transition-colors">
                <ExternalLink size={20} color="#fff" strokeWidth={1.75} />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 border border-white/10 rounded-full text-[#34CFFF] bg-black/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Images Grid */}
          <div className="w-full">
            <div className="grid h-107 grid-cols-2 grid-rows-3 gap-3">
              {project.images.map((image, idx) => (
                <div
                  key={idx}
                  className={`
                group relative overflow-hidden rounded-xl bg-neutral-900
                ${idx === 0 ? 'row-span-2' : 'row-span-1'}
              `}
                >
                  <img
                    src={image}
                    alt={`${project.title} - ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
