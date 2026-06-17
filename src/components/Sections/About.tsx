import { motion } from 'motion/react';
export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-brand-cyan">Education</h3>
            <p className="text-xl mb-2 font-medium">B.Tech CSE AI & Machine Learning</p>
            <p className="text-gray-400 mb-6">VIT Chennai • 8.4 CGPA</p>

            <p className="text-gray-300 leading-relaxed mb-6">
              I am an AI engineering student passionate about building intelligent systems
              and modern web experiences. I love bridging the gap between complex machine
              learning algorithms and user-centric applications.
            </p>

            <ul className="space-y-2 text-gray-400 font-mono text-sm border-l-2 border-brand-cyan/30 pl-4">
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-brand-cyan before:rounded-full before:-ml-[21px] before:mr-4">Problem Solver</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-brand-cyan before:rounded-full before:-ml-[21px] before:mr-4">Open Source Enthusiast</li>
              <li className="flex items-center before:content-[''] before:w-2 before:h-2 before:bg-brand-cyan before:rounded-full before:-ml-[21px] before:mr-4">Agentic AI Systems</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Artificial Intelligence', icon: '🤖' },
              { label: 'Full Stack Dev', icon: '💻' },
              { label: 'Agentic Systems', icon: '🧠' },
              { label: 'Machine Learning', icon: '📈' },
            ].map((passion, i) => (
              <motion.div
                key={passion.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-white/5 hover:border-brand-cyan/30 transition-colors"
              >
                <span className="text-4xl">{passion.icon}</span>
                <span className="font-medium text-sm text-gray-200">{passion.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
