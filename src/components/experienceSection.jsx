import { experiences } from "../data/portfolioData";

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-950">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent line-height-class">
            The Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Each role has been a chapter in my story, building expertise and
            creating impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - hidden on small screens */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-9 items-start">
                {/* Left side card (desktop) / Full width (mobile) */}
                {index % 2 === 0 ? (
                  <>
                    {/* Card */}
                    <div className="col-span-9 md:col-span-4 md:pr-6">
                      <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:scale-105 transition-transform duration-500">
                        <div className="mb-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h3>
                            <span
                              className={`mt-2 md:mt-0 text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xl text-gray-300 mb-6">
                            {exp.company}
                          </p>
                        </div>
                        <div className="space-y-3">
                          {exp.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/40"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                              ></div>
                              <p className="text-gray-300">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Timeline dot */}
                    <div className="hidden md:flex col-span-1 justify-center relative">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full border-4 border-gray-900 flex items-center justify-center text-2xl z-20`}
                      >
                        {exp.icon}
                      </div>
                    </div>
                    <div className="hidden md:block col-span-4"></div>
                  </>
                ) : (
                  <>
                    <div className="col-span-9 md:col-span-4 hidden md:block"></div>
                    {/* Timeline dot */}
                    <div className="hidden md:flex col-span-1 justify-center relative">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${exp.color} rounded-full border-4 border-gray-900 flex items-center justify-center text-2xl z-20`}
                      >
                        {exp.icon}
                      </div>
                    </div>
                    {/* Card */}
                    <div className="col-span-9 md:col-span-4 md:pl-6">
                      <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 hover:scale-105 transition-transform duration-500">
                        <div className="mb-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h3>
                            <span
                              className={`mt-2 md:mt-0 text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white`}
                            >
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xl text-gray-300 mb-6">
                            {exp.company}
                          </p>
                        </div>
                        <div className="space-y-3">
                          {exp.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-3 p-3 rounded-xl bg-gray-900/40"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}
                              ></div>
                              <p className="text-gray-300">{h}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
