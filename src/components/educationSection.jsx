import { education } from "../data/portfolioData";

const Education = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent line-height-class">
            The Learning Path
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Education is the foundation that enables continuous growth and
            innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 transform hover:scale-105 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="text-6xl">{edu.icon}</div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-400 mb-2">{edu.school}</p>
                  <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
