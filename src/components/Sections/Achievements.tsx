import { motion } from 'motion/react';
import { Trophy, Star, ShieldCheck } from 'lucide-react';
import { TiltCard } from '../UI/TiltCard';

const achievements = [
  {
    title: "Second Position, PROMPT401 2025",
    description: "Awarded for developing an innovative AI solution.",
    icon: Trophy,
    color: "from-yellow-400/20 to-yellow-600/5",
    iconColor: "text-yellow-400"
  },
  {
    title: "Full Stack Certification",
    description: "Demonstrating proficiency in complete MERN/PERN stack development.",
    icon: Star,
    color: "from-brand-cyan/20 to-brand-cyan/5",
    iconColor: "text-brand-cyan"
  },
  {
    title: "GitHub Professional",
    description: "Validating advanced skills in GitHub workflows, project management, and automation.",
    icon: ShieldCheck,
    color: "from-purple-400/20 to-purple-600/5",
    iconColor: "text-purple-400"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard className={`h-full flex flex-col bg-gradient-to-br \${achievement.color} border border-white/10`}>
                  <div className="mb-6 flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border border-white/20">
                      <Icon className={achievement.iconColor} size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
