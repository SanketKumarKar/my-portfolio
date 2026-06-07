import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: '11TcJitY6ZSYn-GYF',
});

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_el6zmci', 'template_wv6avkn', e.currentTarget)
      .then(() => {
        setShowSuccess(true);
        setFormState({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }, (error) => {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 glass-card bg-[#020617]/90 border border-brand-cyan/30 text-white px-6 py-4 rounded-2xl flex items-center shadow-[0_0_30px_rgba(56,189,248,0.2)] backdrop-blur-xl"
          >
            <CheckCircle className="text-brand-cyan mr-3" size={28} />
            <p className="font-bold text-lg">Message sent successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 glass-card rounded-3xl p-5 sm:p-8 md:p-12 border border-white/10">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's build something amazing together.</h3>
            <p className="text-gray-400 mb-12">
              Whether you have a question, a project idea, or just want to say hi, 
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mt-auto">
              <a href="mailto:sanketkumarkar@gmail.com" className="flex items-center space-x-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10 transition-colors">
                  <Mail size={20} className="group-hover:text-brand-cyan" />
                </div>
                <span className="font-mono text-sm sm:text-base truncate">sanketkumarkar@gmail.com</span>
              </a>
              
              <a href="https://linkedin.com/in/sanketkumarkar" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-[#0A66C2]/50 group-hover:bg-[#0A66C2]/10 transition-colors">
                  <Linkedin size={20} className="group-hover:text-[#0A66C2]" />
                </div>
                <span className="font-mono text-sm sm:text-base truncate">linkedin.com/in/sanketkumarkar</span>
              </a>

              <a href="https://github.com/SanketKumarKar" target="_blank" rel="noreferrer" className="flex items-center space-x-4 text-gray-300 hover:text-white group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </div>
                <span className="font-mono text-sm sm:text-base truncate">github.com/SanketKumarKar</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-6"
            id="contact-form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black font-bold text-lg py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors mt-auto group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span>Sending...</span>
                  <Loader2 size={18} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
