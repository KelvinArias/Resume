'use client';
import Navbar from '@components/NavBar';
import Home from './home';
import Glow from '@components/Glow';
import Work from './work';

// Main Page Component
export default function MainContainer() {
  return (
    <main className="relative flex-wrap w-full z-10 flex justify-center">
      <Navbar />
      <Home />
      <Glow />
      <Work />
    </main>
  );
}
