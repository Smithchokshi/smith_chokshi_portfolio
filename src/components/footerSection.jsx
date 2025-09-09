import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const FooterSection = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-700/50 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-400 mb-4">
          © {new Date().getFullYear()} {personalInfo.name}. Ready to build
          amazing applications together.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:smithchokshi@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:9029731129"
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <Phone size={20} />
          </a>
          <a
            href={personalInfo.github}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            className="text-pink-400 hover:text-pink-300 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
