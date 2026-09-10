import { useEffect, useState } from "react";
import cx from "classnames";
import { Code2, Network } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cx("w-screen fixed top-0 left-0 z-50 flex justify-center", isScrolled ? "bg-black/80 backdrop-blur-sm shadow-lg" : "bg-transparent")}>
      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 flex items-center gap-1 mb-8 justify-between py-4">
        <div className="flex items-center gap-1">
          <span className="text-3xl font-bold text-white tracking-tight">KA</span>
          <span className="text-3xl text-cyan-400">.</span>
        </div>
        <div className="flex gap-4">
          <a
            aria-label="Know more about me on GitHub"
            className="socialIcon"
            href="https://github.com/KelvinArias"
            target="_blank"
            rel="noreferrer"
          >
            <Code2 size={30} color="white" strokeWidth={1.75} />
          </a>
          <a
            aria-label="Know more about me on Linkedin"
            className="socialIcon"
            href="https://www.linkedin.com/in/kelvin-arias-cv21/"
            target="_blank"
            rel="noreferrer"
          >
            <Network size={30} color="white" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </nav>
  );
}
