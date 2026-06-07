import { motion } from 'motion/react';
import { TiltCard } from '../UI/TiltCard';

const skillsData = [
  {
    category: "Programming",
    items: ["Python", "Java", "C++", "JavaScript"]
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Postman", "VS Code", "GitHub", "Claude AI", "GitHub Copilot"]
  },
  {
    category: "Core Subjects",
    items: ["DSA", "CAO", "OS", "DBMS"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 w-full overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand-cyan/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Core Competencies</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full border border-white/10 bg-gradient-to-br from-white/5 to-white/0 hover:border-brand-cyan/40 hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2 text-brand-cyan">
                  <span>{category.category}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => (
                    <span 
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
