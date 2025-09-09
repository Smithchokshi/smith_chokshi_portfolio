// data/portfolioData.js
export const personalInfo = {
  name: "Smith Chokshi",
  title: "Full Stack Java Developer",
  email: "smithchokshi@gmail.com",
  phone: "(902) 973-1129",
  location: "Toronto, Ontario, Canada",
  github: "https://github.com/Smithchokshi",
  linkedin: "https://www.linkedin.com/in/smith-chokshi-8657021a1/",
  tagline:
    "Every great developer's journey is built on solid foundations. Here's mine.",
};

export const experiences = [
  {
    title: "Technical Analyst - SuiteCloud",
    company: "Oracle",
    period: "MAY 2025 – SEP 2025",
    highlights: [
      "Worked in the NetSuite SuiteCloud team, developing and customizing ERP solutions to meet client-specific business needs.",
      "Worked in the NetSuite SuiteCloud team, developing and customizing ERP solutions to meet client-specific business needs.",
      "Designed and implemented SuiteFlow Workflows for automating business processes, reducing manual effort, and improving operational efficiency.",
      "Collaborated with clients to gather and document requirements, ensuring a clear understanding and alignment with technical solutions.",
      "Troubleshot and resolved complex issues within SuiteScript and workflow configurations, improving system stability and client satisfaction.",
      "Developed reusable script templates and standardized coding practices to enhance team productivity.",
      "Partnered with cross-functional teams to provide technical guidance and ensure seamless integration with third-party applications.",
      "Contributed to knowledge base documentation for faster resolution of recurring technical issues.",
    ],
    color: "from-red-500 to-orange-500",
    icon: "🏢",
  },
  {
    title: "Full Stack Java Developer",
    company: "Canada Revenue Agency",
    period: "JAN 2024 – APR 2025",
    highlights: [
      "Involved in complete Maintenance and Software Development Life cycle starting from Business Requirements gathering, Application Design, Implementation till DevOps Deployment.",
      "Developed and maintained scalable web applications using Java, Spring Boot, and Angular in an Agile environment.",
      "Built RESTful APIs and integrated them with front-end components using Angular for state management.",
      "Very good experience working with Spring framework such as IOC and Dependency Injection.",
      "Implemented microservices architecture to improve scalability and maintainability.",
      "Collaborated with front-end developers to build interactive, responsive UI components with Angular Material UI.",
      "Wrote unit and integration tests using JUnit, Mockito, Jest, and Cypress, ensuring high code quality and stability also involved in non-functional requirements.",
      "Deployed applications on AWS, utilizing EC2 and S3 for scalable cloud infrastructure.",
      "Used Docker and Kubernetes for containerization and orchestration of microservices.",
      "Integrated third-party APIs and ensured seamless data flow between back-end and front-end systems.",
      "Engaged in developing new features, code reviews, optimized performance, and followed best practices for clean, maintainable code.",
      "Designed and implemented RESTful Web Services for efficient communication between front-end and back-end components, ensuring smooth data exchange in real-time applications.",
      "Participated in Agile sprints, contributed to regular teamwork during sprint reviews, and coordinated with project managers to ensure timely delivery of tasks.",
      "Collaborated with the QA team to integrate unit testing into the CI/CD pipeline, improving code quality.",
    ],
    color: "from-blue-500 to-purple-500",
    icon: "🍁",
  },
  {
    title: "Associate Software Developer",
    company: "Openxcell",
    period: "MAY 2021 – NOV 2022",
    highlights: [
      "Developed Single Page Application MEAN stack applications utilizing MongoDB, Express.js, Angular, and Node.js for both front-end and back-end development using Spring boot and hibernate.",
      "Optimized application performance and enhanced front-end interactivity using Angular, React, and Redux-Saga for state management. In fact, worked on both MEAN and MERN stack.",
      "Built secure, scalable REST APIs and integrated them with MongoDB for data persistence.",
      "Contributed to the CI/CD pipeline using Jenkins, automating build and deployment processes.",
      "Collaboration with cross-functional teams, delivering high-quality software following Agile methodologies.",
      "Designed and maintained databases using PostgreSQL and MongoDB with effective query optimization techniques.",
      "Implemented security features like JWT for authentication and authorization in web applications.",
      "Utilized Amazon Web Services (AWS), including EC2, S3, and Lambda, to design and deploy scalable, high-performance web applications in a cloud environment, optimizing both cost and resource efficiency.",
      "Demonstrated strong communication skills by collaborating with cross-functional teams, including UI/UX designers, back-end developers, and business stakeholders, gathering requirements, discussing technical solutions, and delivering high-quality software solutions.",
    ],
    color: "from-green-500 to-blue-500",
    icon: "💻",
  },
  {
    title: "Software Developer Intern",
    company: "Dev Information Technology Limited",
    period: "OCT 2020 – MAR 2021",
    highlights: [
      "Assisted in the development and debugging of web applications using Java, Spring Boot, and MySQL, improving application performance by 15%.",
      "Collaborated with senior developers to build and test RESTful APIs and front-end components using React and JavaScript, ensuring seamless integration.",
      "Gained hands-on experience in Agile methodologies, version control (Git), and software testing, contributing to successful sprint deliveries.",
    ],
    color: "from-purple-500 to-pink-500",
    icon: "🚀",
  },
];

export const skills = {
  "Programming Languages": [
    "Java 11/8",
    "JavaScript",
    "TypeScript",
    "Python",
    "C++",
  ],
  Frontend: [
    "React.js",
    "Next.js",
    "Angular",
    "Redux",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JSP",
  ],
  Backend: [
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "J2EE",
    "Node.js",
    "Express.js",
    "RESTful APIs",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Firebase"],
  "Server and Messaging & Event Streaming": [
    "JMS",
    "Kafka",
    "APache",
    "Tomcat",
  ],
  "Cloud & DevOps": [
    "AWS (EC2, S3, Lambda)",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
  ],
  Testing: ["JUnit", "TestNG", "Mockito", "Jest", "Cypress"],
  "Methodologies/Other Skills": [
    "Agile",
    "Scrum",
    "Sprint",
    "Communication Skills",
    "Analytical Skills",
    "Interpersonal Skills",
    "Data Structure and Agorithms",
    "Elasticsearch",
    "Test Driven Development",
  ],
  "Tools & Documentation": ["Swagger", "Postman", "Jira", "Confluence"],
};

export const education = [
  {
    degree: "Master of Applied Computer Science",
    school: "Dalhousie University",
    period: "SEP 2022 – MAY 2024",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Information and Communication Technology",
    school: "Gujarat Technological University",
    period: "AUG 2017 – AUG 2021",
    icon: "📚",
  },
];

export const sectionTitles = {
  hero: {
    title: personalInfo.name,
    subtitle: personalInfo.title,
    scrollText: "Scroll to begin the journey",
  },
  about: {
    title: "The Foundation of Excellence",
    subtitle: personalInfo.tagline,
  },
  experience: {
    title: "The Professional Journey",
    subtitle:
      "Each role has been a chapter in my story, building expertise and creating impact.",
  },
  skills: {
    title: "The Developer's Arsenal",
    subtitle:
      "Tools and technologies that power innovation and bring ideas to life.",
  },
  education: {
    title: "The Learning Path",
    subtitle:
      "Education is the foundation that enables continuous growth and innovation.",
  },
  contact: {
    title: "Let's Create Something Amazing",
    subtitle:
      "Every great project starts with a conversation. Let's begin ours.",
  },
};

export const formConfig = {
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      required: true,
      gridClass: "md:col-span-1",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
      gridClass: "md:col-span-1",
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "Project Inquiry, Job Opportunity, etc.",
      required: true,
      gridClass: "md:col-span-2",
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project or opportunity...",
      required: true,
      rows: 5,
      gridClass: "md:col-span-2",
    },
  ],
  submitButton: {
    text: "Send Message",
    loadingText: "Sending Message...",
  },
  messages: {
    success: "Thank you for your message! I'll get back to you soon.",
    error:
      "Sorry, there was an error sending your message. Please try again or email me directly.",
  },
};

export const footerInfo = {
  copyright: `© ${new Date().getFullYear()} ${
    personalInfo.name
  }. Ready to build amazing applications together.`,
  socialLinks: [
    {
      href: `mailto:${personalInfo.email}`,
      icon: "Mail",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      href: `tel:${personalInfo.phone.replace(/[^\d]/g, "")}`,
      icon: "Phone",
      color: "text-green-400 hover:text-green-300",
    },
    {
      href: personalInfo.github,
      icon: "Github",
      color: "text-purple-400 hover:text-purple-300",
    },
    {
      href: personalInfo.linkedin,
      icon: "Linkedin",
      color: "text-pink-400 hover:text-pink-300",
    },
  ],
};
