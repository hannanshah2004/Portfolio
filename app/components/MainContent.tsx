import { motion } from 'framer-motion';

const MainContent: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="ml-64 p-12 bg-white min-h-screen">
      <motion.section id="about" className="mb-16" {...fadeInUp}>
        <h1 className="text-5xl font-bold mb-2 text-blue-600">Syed Hannan Shah</h1>
        <h2 className="text-2xl text-gray-600 mb-4">Computer Engineering Student</h2>
        <p className="text-gray-700 mb-4">hannansshah2004@gmail.com | 201-989-8476</p>
        <div className="flex space-x-4">
          <a href="https://github.com/hannanshah2004" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/hannansyedshah" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </motion.section>

      <motion.section id="education" className="mb-16" {...fadeInUp}>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Education</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering - Computer Engineering</h3>
          <p className="text-gray-700 mb-1">Rutgers University, Honors College</p>
          <p className="text-gray-600 mb-1">CS GPA: 3.75</p>
          <p className="text-sm text-gray-500">Sep 2022 - May 2026</p>
        </div>
      </motion.section>

      <motion.section id="experience" className="mb-16" {...fadeInUp}>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Experience</h2>
        {[
          {
            role: "Software Engineer Intern",
            company: "Blockhouse",
            location: "New York City, NY",
            duration: "November 2024 - Present",
            details: [
              "Engineered ultra-low-latency backend microservices using Django, Golang, and Rust.",
              "Optimized data pipelines and storage with Redpanda, ClickHouse, and MongoDB.",
              "Developed high-performance frontend applications with Next.js and TradingView."
            ]
          },
          {
            role: "Machine Learning Research Intern",
            company: "Florida International University",
            location: "Miami, FL",
            duration: "May 2024 - Present",
            details: [
              "Enhanced Federated Learning security for resource-constrained edge devices.",
              "Achieved 75% validation accuracy despite various attacks.",
              "Substantially minimized simulation runtime using pruning techniques."
            ]
          },
          {
            role: "Software Engineer Intern",
            company: "AHS Insurance Services",
            location: "Jersey City, NJ",
            duration: "August 2023 - May 2024",
            details: [
              "Developed a responsive landing page using React.js and TailwindCSS.",
              "Deployed with CI/CD on Vercel and optimized with ESLint and Prettier."
            ]
          },
          {
            role: "Bioinformatics Research Intern",
            company: "Rutgers University",
            location: "Piscataway, NJ",
            duration: "May 2023 - August 2023",
            details: [
              "Developed and implemented automated data analysis scripts in Python to process transformation data, improving hypothesis testing and observing GUS staining in calli leaves.",
              "Utilized SnapGene to program and visualize the binary vector system delivery of T-DNA to plant nuclei via the Type IV secretion system, yielding successful transformation of tobacco leaves with 85% efficiency.",
            ],
          }      
        ].map((exp, index) => (
          <motion.div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300" {...fadeInUp}>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{exp.role}</h3>
            <p className="text-gray-600 mb-4">{exp.company} | {exp.location} | {exp.duration}</p>
            <ul className="list-disc ml-6 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i} className="mb-2">{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      <motion.section id="projects" className="mb-16" {...fadeInUp}>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Notable Projects</h2>
        {[
          {
            name: "QuantumBull",
            link: "https://thequantumbull.org/",
            details: [
              "Django-based backend for fetching and filtering stock data.",
              "Implemented TensorFlow LSTM model for stock price predictions.",
              "Automated testing and deployment with Docker and GitHub Actions."
            ]
          },
          {
            name: "ReferLoop",
            link: "https://www.referloop.org/",
            details: [
              "Developed a secure full-stack referral platform with React.js and Next.js.",
              "Integrated Docker and CI/CD pipelines for seamless deployment.",
              "Implemented validation and security checks to ensure referral link legitimacy."
            ]
          }
        ].map((project, index) => (
          <motion.div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300" {...fadeInUp}>
            <h3 className="text-xl font-semibold mb-2">
              <a href={project.link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              {project.details.map((detail, i) => (
                <li key={i} className="mb-2">{detail}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>

      <motion.section id="skills" className="mb-16" {...fadeInUp}>
    <h2 className="text-3xl font-bold mb-6 text-blue-600">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
        {
            category: "Programming Languages",
            skills: ["Java", "Python", "JavaScript", "C++", "HTML/CSS"],
        },
        {
            category: "Technologies",
            skills: ["Git", "AWS", "MongoDB", "PostgreSQL", "RESTful APIs"],
        },
        {
            category: "System Design & Performance Optimization",
            skills: [
            "Scalable Microservices Architecture",
            "Distributed Systems Design",
            "High-Performance Computing",
            "Caching Strategies (Redis, Memcached)",
            "Database Sharding and Indexing",
            ],
        },
        {
            category: "Concepts",
            skills: ["Full Stack Development", "Machine Learning", "Cloud Computing"],
        },
        ].map((skillSet, index) => (
        <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            {...fadeInUp}
        >
            <h3 className="text-lg font-semibold mb-4 text-blue-600">{skillSet.category}</h3>
            <ul className="list-disc ml-6 text-gray-700">
            {skillSet.skills.map((skill, i) => (
                <li key={i} className="mb-1">{skill}</li>
            ))}
            </ul>
        </motion.div>
        ))}
    </div>
    </motion.section>
    </div>
  );
};

export default MainContent;

