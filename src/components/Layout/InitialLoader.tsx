import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress: fast start, slow middle, fast finish
        const remaining = 100 - prev;
        const increment = Math.max(0.5, remaining * 0.06);
        return Math.min(100, prev + increment);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  const handleExitComplete = () => {
    onComplete();
  };

  const firstName = "SANKET";
  const lastName = "KAR";
  const subtitle = "Full-Stack Developer & AI Engineer";

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isExiting && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030413] overflow-hidden"
        >
          {/* Disco color animation keyframes injected inline */}
          <style>{`
            @keyframes disco-text {
              0%, 100% { color: #ffffff; text-shadow: 0 0 20px rgba(255,255,255,0.3); }
              16% { color: #FF10F0; text-shadow: 0 0 30px rgba(255,16,240,0.5), 0 0 60px rgba(255,16,240,0.2); }
              33% { color: #38BDF8; text-shadow: 0 0 30px rgba(56,189,248,0.5), 0 0 60px rgba(56,189,248,0.2); }
              50% { color: #FF10F0; text-shadow: 0 0 30px rgba(255,16,240,0.5), 0 0 60px rgba(255,16,240,0.2); }
              66% { color: #ffffff; text-shadow: 0 0 20px rgba(255,255,255,0.3); }
              83% { color: #38BDF8; text-shadow: 0 0 30px rgba(56,189,248,0.5), 0 0 60px rgba(56,189,248,0.2); }
            }
            .disco-letter {
              animation: disco-text 3s ease-in-out infinite;
            }
          `}</style>

          {/* Animated gradient background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 60, -30, 0],
                y: [0, -50, 40, 0],
                scale: [1, 1.3, 0.9, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, #0A32FF 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />
            <motion.div
              animate={{
                x: [0, -50, 40, 0],
                y: [0, 60, -30, 0],
                scale: [1, 0.8, 1.2, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, #D946EF 0%, transparent 70%)',
                filter: 'blur(80px)',
              }}
            />
            <motion.div
              animate={{
                x: [0, 30, -50, 0],
                y: [0, -25, 50, 0],
                scale: [1, 1.1, 0.95, 1],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full opacity-15"
              style={{
                background: 'radial-gradient(circle, #38BDF8 0%, transparent 70%)',
                filter: 'blur(100px)',
              }}
            />
          </div>

          {/* Orbital ring particles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] h-[220px] md:w-[400px] md:h-[400px]"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-brand-cyan"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translate(min(110px, 28vw)) rotate(-${i * 45}deg)`,
                  }}
                />
              ))}
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[160px] h-[160px] md:w-[280px] md:h-[280px]"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute w-1 h-1 rounded-full bg-brand-purple"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 60}deg) translate(min(80px, 20vw)) rotate(-${i * 60}deg)`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* First name with staggered letter animation + disco color effect */}
            <div className="flex overflow-hidden mb-1">
              {firstName.split("").map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
                  }}
                  className="disco-letter text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.15em] md:tracking-[0.2em]"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Last name */}
            <div className="flex overflow-hidden mb-3">
              {lastName.split("").map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.08,
                    ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
                  }}
                  className="disco-letter text-4xl sm:text-5xl md:text-7xl font-bold tracking-[0.15em] md:tracking-[0.2em]"
                  style={{
                    animationDelay: `${(firstName.length + i) * 0.2}s`,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-xs sm:text-sm md:text-base font-mono text-gray-500 tracking-[0.15em] md:tracking-[0.3em] uppercase mb-8 md:mb-12 text-center max-w-[90vw]"
            >
              {subtitle}
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-40 sm:w-48 md:w-64 relative"
            >
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #0A32FF, #38BDF8, #FF10F0, #38BDF8)',
                    backgroundSize: '200% 100%',
                    animation: 'disco-bar 2s linear infinite',
                  }}
                />
              </div>
              <style>{`
                @keyframes disco-bar {
                  0% { background-position: 0% 0%; }
                  100% { background-position: 200% 0%; }
                }
              `}</style>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="block text-center mt-3 text-xs font-mono text-gray-600 tracking-widest"
              >
                {Math.round(progress)}%
              </motion.span>
            </motion.div>
          </div>

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

