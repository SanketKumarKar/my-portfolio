import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';
import { TiltCard } from '../UI/TiltCard';

const projects = [
  {
    title: 'FeastFull',
    description: 'A comprehensive platform streamlining weekly meal planning with algorithmic menu generation and user voting.',
    features: [
      'Weekly meal planning',
      'Voting system',
      'Feedback management and AI Analysis',
      'RBAC Support',
      'Row Level Security',
      'Gemini Support for meal planning',
      'PDF report generation'
    ],
    tech: ['React', 'TailwindCSS', 'PostgreSQL', 'GenAI'],
    demoUrl: 'https://feastfull.vercel.app/',
    githubUrl: 'https://github.com/SanketKumarKar/Hostel-Mess-Planner',
    image: '/project/feastfull.jpeg'
  },
  {
    title: 'PawShelter',
    description: 'A modern PERN stack management system for animal shelters with integrated analytics and access control.',
    features: [
      'PERN Stack Application',
      'Role Based Access Control',
      'Analytics dashboard',
      'JWT Authentication',
      'Data visualization'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: 'https://github.com/SanketKumarKar/Animal-Shelter-FULLSTACK',
    image: '/project/pawshelter.jpeg'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <TiltCard className="h-full flex flex-col p-1 group">
                <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-[22px] rounded-b-xl mb-6">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 text-xs font-mono font-bold bg-black/60 backdrop-blur-md rounded-full text-white border border-white/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
                  
                  <div className="mb-6 border-l-2 border-brand-cyan/30 pl-4 py-1">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1">
                      {project.features.map(f => (
                        <li key={f} className="text-sm text-gray-400 font-mono flex items-center before:content-['▹'] before:mr-2 before:text-brand-cyan">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4 mt-auto">
                    <a 
                      href={project.demoUrl}
                      className="flex-1 glass py-3 rounded-xl flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-white/10 hover:border-brand-cyan/50 transition-all text-white"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 border border-white/20 py-3 rounded-xl flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-white hover:text-black transition-all"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
