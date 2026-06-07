import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 mt-20 relative z-10 w-full overflow-hidden">
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm font-mono mb-4 md:mb-0">
          © {currentYear} Sanket Kumar Kar. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6">
          <a href="https://github.com/SanketKumarKar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/sanketkumarkar" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:sanketkumarkar@gmail.com" className="text-gray-400 hover:text-brand-cyan transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
