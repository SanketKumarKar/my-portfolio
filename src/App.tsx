import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/Layout/CustomCursor';
import Navbar from './components/Layout/Navbar';
import InitialLoader from './components/Layout/InitialLoader';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Certificates from './components/Sections/Certificates';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <InitialLoader onComplete={() => setIsLoading(false)} />}

      <div
        className={`w-full relative bg-[#030413] text-white min-h-screen z-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Global Video Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#030413]">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          {/* Gradient overlay to ensure text readability and blend with the dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030413]/60 via-[#030413]/40 to-[#030413]/80" />
        </div>

        <CustomCursor />
        <Navbar />
        
        <main className="w-full h-full flex flex-col items-center">
          <Hero isLoading={isLoading} />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

