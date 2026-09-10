import { BriefcaseBusiness, Code2, MapPin } from 'lucide-react';

const techItems = [
  {
    icon: <Code2 size={24} color="white" strokeWidth={1.75} />,
    title: 'Tech Stack',
    subtitle: 'Next.js • Node.js • MongoDB • TypeScript',
  },
  {
    icon: <BriefcaseBusiness size={24} color="white" strokeWidth={1.75} />,
    title: '5+ Years',
    subtitle: 'Work Experience',
  },
  {
    icon: <MapPin size={24} color="white" strokeWidth={1.75} />,
    title: 'Based in Miami, FL',
    subtitle: 'Open to new opportunities',
  },
];


// Info Panel Component
export default function InfoPanel() {
  return (
    <div className="flex flex-col gap-6">
      {techItems.map((item, index) => (
        <div
          key={index}
          className="flex gap-4 items-start group cursor-pointer"
        >
          <div className="shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center text-lg border-cyan-400/50">
            {item.icon}
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-white">{item.title}</p>
            <p className="text-xs text-white/60">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
