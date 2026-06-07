import { motion } from 'motion/react';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Angela Yu",
    date: "2024",
    image: "public/cert/UC-a6b4d278-7f4b-4303-8bf3-937948290e1b.jpg"
  },
  {
    title: "GitHub Professional Certificate",
    issuer: "GitHub",
    date: "2023",
    image: "public/cert/github1751705122428.jpg"
  },
  {
    title: "GitHub Copilot Fundamentals - Understand the AI pair programmer",
    issuer: "MICROSOFT",
    date: "2023",
    image: "public/cert/micro.jpg"
  },
  {
    title: "Fundamentals of Accelerated Computing with CUDA Python",
    issuer: "NVIDIA",
    date: "2023",
    image: "public/cert/nvdia.jpg"
  }
];

export default function Certificates() {
  // Duplicate array three times to ensure smooth infinite loop and enough items to fill ultrawide screens
  const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

  return (
    <section id="certificates" className="py-24 relative overflow-hidden w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="w-full relative overflow-hidden flex group">
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 w-max pl-6 animate-marquee hover:[animation-play-state:paused]"
        >
          {duplicatedCertificates.map((cert, index) => (
            <div key={index} className="w-[260px] sm:w-[300px] md:w-[450px] flex-shrink-0">
              <div className="glass-card rounded-3xl p-4 overflow-hidden relative">
                <div className="aspect-video w-full rounded-2xl overflow-hidden relative border border-white/5 bg-black/50 group/card">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500 opacity-60 group-hover/card:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-dark/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Award className="text-brand-cyan mb-2" size={24} />
                    <h3 className="font-bold text-lg text-white font-sans">{cert.title}</h3>
                    <p className="text-sm text-gray-300 font-mono">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
