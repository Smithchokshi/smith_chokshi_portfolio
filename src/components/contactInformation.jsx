import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const ContactInformation = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50">
      <h3 className="text-3xl font-bold mb-8 text-center text-pink-400">
        Get In Touch
      </h3>

      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl">
          <Mail className="text-blue-400 flex-shrink-0" size={24} />
          <span className="text-gray-300">{personalInfo.email}</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl">
          <Phone className="text-green-400 flex-shrink-0" size={24} />
          <span className="text-gray-300">{personalInfo.phone}</span>
        </div>
        <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-2xl">
          <MapPin className="text-purple-400 flex-shrink-0" size={24} />
          <span className="text-gray-300">{personalInfo.location}</span>
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-xl font-bold mb-4 text-white">Follow My Journey</h4>
        <div className="flex justify-center gap-4">
          <a
            href={personalInfo.github}
            className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            className="p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 hover:from-blue-600 hover:to-purple-600 rounded-2xl transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
