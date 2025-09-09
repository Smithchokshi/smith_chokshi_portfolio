import { Star } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  // helper highlight functions (inside the component)
  const HBlue = ({ children }) => (
    <span className="font-semibold text-blue-300">{children}</span>
  );
  const HPurple = ({ children }) => (
    <span className="font-semibold text-purple-300">{children}</span>
  );

  // array of JSX points
  const aboutMePoints = [
    <>
      Experienced highly skilled{" "}
      <HBlue>Java Developer & Full-Stack Engineer</HBlue> with{" "}
      <HPurple>4+ years</HPurple> in backend and frontend development,
      proficient in <HBlue>Java</HBlue>, <HBlue>J2EE</HBlue>,{" "}
      <HBlue>Spring Boot</HBlue>, <HBlue>Hibernate</HBlue>, and JavaScript
      frameworks like <HPurple>React</HPurple> and <HPurple>Angular</HPurple>.
    </>,
    <>
      Skilled in <HBlue>API Development</HBlue> using <HPurple>RESTful</HPurple>{" "}
      and <HPurple>SOAP Web Services</HPurple>, ensuring seamless integration
      and high performance.
    </>,
    <>
      Proficient in <HPurple>Object-Oriented Programming (OOP)</HPurple> with
      expertise in <HBlue>Java 8 features</HBlue> like{" "}
      <HPurple>Lambda expressions</HPurple>, <HPurple>Streams</HPurple>,{" "}
      <HPurple>Multithreading</HPurple>, <HPurple>Concurrency</HPurple>, and{" "}
      <HPurple>Functional Interfaces</HPurple>.
    </>,
    <>
      Expert in <HBlue>Design Patterns</HBlue>,{" "}
      <HPurple>Design Principles</HPurple> (<HBlue>OOAD</HBlue>,{" "}
      <HBlue>SOLID</HBlue>) & <HPurple>Architectural Principles</HPurple>,
      including <HBlue>MVC</HBlue>, <HBlue>Singleton</HBlue>,{" "}
      <HBlue>Adapter</HBlue>, <HBlue>Observer</HBlue>, and <HBlue>DAO</HBlue>.
    </>,
    <>
      <HPurple>Database Expertise</HPurple> in <HBlue>Oracle</HBlue>,{" "}
      <HBlue>MySQL</HBlue>, and <HBlue>MongoDB</HBlue>, with hands-on experience
      in <HPurple>JDBC</HPurple>, <HPurple>SQL</HPurple>,{" "}
      <HPurple>PL/SQL</HPurple>, <HPurple>Stored Procedures</HPurple>, and{" "}
      <HPurple>query optimization</HPurple>.
    </>,
    <>
      Experience developing <HBlue>Microservice architecture</HBlue> using{" "}
      <HPurple>Spring Boot</HPurple> and <HPurple>Hibernate</HPurple>.
    </>,
    <>
      <HPurple>Full-Stack Development Skills</HPurple> using <HBlue>Java</HBlue>
      , <HPurple>MERN</HPurple> (<HBlue>MongoDB</HBlue>,{" "}
      <HBlue>Express.js</HBlue>, <HBlue>React.js</HBlue>, <HBlue>Node.js</HBlue>
      ) and <HPurple>MEAN</HPurple> (<HBlue>MongoDB</HBlue>,{" "}
      <HBlue>Express.js</HBlue>, <HBlue>Angular</HBlue>, <HBlue>Node.js</HBlue>
      ).
    </>,
    <>
      <HBlue>Cloud & DevOps Experience</HBlue>, working with{" "}
      <HPurple>AWS</HPurple>, <HPurple>Firebase</HPurple>, and{" "}
      <HPurple>Git</HPurple> for efficient <HBlue>CI/CD workflows</HBlue>.
    </>,
    <>
      <HBlue>Agile & Project Management Knowledge</HBlue>, leveraging{" "}
      <HPurple>JIRA</HPurple> for issue tracking, work assignment, and change
      management.
    </>,
    <>
      <HPurple>Application Security & Performance Optimization</HPurple>,
      ensuring applications are scalable, secure, and optimized. Used{" "}
      <HBlue>Spring Security</HBlue> and <HBlue>JWT</HBlue> to secure
      applications.
    </>,
    <>
      <HPurple>Collaborative & Adaptive Team Player</HPurple>, bringing strong{" "}
      <HBlue>analytical</HBlue>, <HBlue>organizational</HBlue>, and{" "}
      <HBlue>problem-solving skills</HBlue> to dynamic and evolving work
      environments.
    </>,
    <>
      Writing <HBlue>JUnit Tests</HBlue> and{" "}
      <HPurple>Integration Testing</HPurple> cases to ensure code coverage and
      quality standards, with reviews and <HBlue>SonarQube</HBlue>.
    </>,
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-900 via-gray-900 to-blue-900 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Foundation of Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div
            className="bg-gray-800/30 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50"
            style={{
              transform: `translateY(${Math.max(0, (scrollY - 800) * 0.05)}px)`,
              opacity: Math.min(1, Math.max(0, (scrollY - 600) / 400)),
            }}
          >
            <ul className="space-y-6 text-gray-300 leading-relaxed">
              {aboutMePoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20"
                >
                  <Star
                    className="text-blue-400 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
