import { Code, Database, Cloud, Users, Award } from "lucide-react";
import { skills } from "../data/portfolioData";

const Skill = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            The Developer's Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tools and technologies that power innovation and bring ideas to
            life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl p-8 border border-gray-600/30 transform hover:scale-105 transition-all duration-500"
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                    index === 0
                      ? "from-red-500 to-orange-500"
                      : index === 1
                      ? "from-blue-500 to-cyan-500"
                      : index === 2
                      ? "from-green-500 to-emerald-500"
                      : index === 3
                      ? "from-purple-500 to-pink-500"
                      : index === 4
                      ? "from-yellow-500 to-orange-500"
                      : "from-indigo-500 to-purple-500"
                  } flex items-center justify-center`}
                >
                  {index === 0 ? (
                    <Code size={24} />
                  ) : index === 1 ? (
                    <Users size={24} />
                  ) : index === 2 ? (
                    <Database size={24} />
                  ) : index === 3 ? (
                    <Database size={24} />
                  ) : index === 4 ? (
                    <Cloud size={24} />
                  ) : (
                    <Award size={24} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillList.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-gray-700/50 to-gray-800/50 text-gray-200 rounded-full text-sm border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
