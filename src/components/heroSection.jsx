import { Code, Mail, Phone, Github, Linkedin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-bounce">
          <Code size={80} className="mx-auto text-blue-400 mb-4" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl mb-8 text-gray-300">
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="mailto:smithchokshi@gmail.com"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Mail size={20} />
            {personalInfo.email}
          </a>
          <a
            href="tel:9029731129"
            className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
          >
            <Phone size={20} />
            {personalInfo.phone}
          </a>
          <a
            href={personalInfo.github}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} />
            Github
          </a>
          <a
            href={personalInfo.linkedin}
            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
        <div className="animate-bounce">
          <ArrowDown size={32} className="mx-auto text-gray-400" />
          <p className="text-gray-400 mt-2">Scroll to begin the journey</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
