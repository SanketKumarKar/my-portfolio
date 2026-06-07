import { motion } from 'motion/react';
import { ArrowRight, Download, Volume2, VolumeX } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { useRef, useState } from 'react';

// Magnetic Button Wrapper
const MagneticButton = ({ children, className, ...props }: any) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative overflow-hidden group", className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

interface HeroProps {
  isLoading?: boolean;
}

export default function Hero({ isLoading = false }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const hasPlayedOnce = useRef(false);

  // Sync muted state to the video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Start playing the video only after the loader finishes
  useEffect(() => {
    if (!isLoading && videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked unmuted autoplay, fall back to muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
          }
        });
      }
    }
  }, [isLoading]);

  // After the first full play, mute and enable looping
  const handleVideoEnded = () => {
    if (videoRef.current && !hasPlayedOnce.current) {
      hasPlayedOnce.current = true;
      setIsMuted(true);
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="flex flex-col items-start text-left">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="inline-flex items-center space-x-2 glass rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-gray-300">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-3 sm:mb-4 leading-tight"
          >
            Hi, I'm Sanket <span className="inline-block origin-bottom-right hover:animate-pulse">👋</span>
            <br />
            <span className="text-gradient">Full-Stack Developer</span>
            <br />
            & AI Engineer
          </motion.h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-lg leading-relaxed"
          >
            Building scalable web applications, intelligent AI systems, and
            innovative digital experiences that solve real-world problems.
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12 w-full sm:w-auto"
          >
            <MagneticButton className="bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton className="glass text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors">
              <Download size={18} />
              <span>Download Resume</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex items-center space-x-4 sm:space-x-8 font-mono text-sm text-gray-400"
          >
            <div className="flex flex-col">
              <span className="text-brand-cyan font-bold text-lg sm:text-xl">AI/ML</span>
              <span className="text-xs sm:text-sm">Developer</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg sm:text-xl">MERN/PERN</span>
              <span className="text-xs sm:text-sm">Stack Expert</span>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg sm:text-xl">VIT Chennai</span>
              <span className="text-xs sm:text-sm">B.Tech Student</span>
            </div>
          </motion.div>
        </div>

        {/* Video / 3D Element Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center items-center h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-4 lg:mt-0 lg:-mt-20"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full aspect-video max-w-sm sm:max-w-md lg:max-w-xl rounded-2xl lg:rounded-3xl overflow-hidden glass-card p-1.5 sm:p-2 group"
          >
            {/* Using a placeholder tech-style video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/30 to-brand-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            <video
              ref={videoRef}
              src="/hero1.mp4"
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
            />
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors backdrop-blur-sm"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
