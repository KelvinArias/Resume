'use client';
import HeroText from '@components/HeroText';
import Projects from './Projects';
import MobileProjects from './MobileProjects';

const projects = [
  {
    id: 1,
    year: '2024',
    title: 'Start design Group',
    description: 'Start design group is a boutique creative agency with offices in Los Angeles, Miami, and Lima. Helping clients all over the world.',
    tags: ['React', 'Next', 'TypeScript', 'Tailwind CSS'],
    images: [
      '/work/portfolio.jpg',
      '/work/case-study-1.jpg',
      '/work/case-study-2.jpg',
      '/work/case-study-3.jpg',
    ],
  },
];

export default function Work() {
  return (
    <section className="w-full relative h-screen flex justify-center pt-16">
      <div className="flex-1 block lg:flex items-center justify-between gap-8 lg:gap-12 py-16 max-w-6xl lg:px-12">
        {/* Left Column - Title & Description */}
        <HeroText
          title="Work"
          paragraph="A collection of projects focused on interaction, performance, and modern web experiences."
        />
        {/* Right Column - Project Cards */}
        <Projects projects={projects} />
        <MobileProjects projects={projects} />
      </div>
    </section>
  );
}
