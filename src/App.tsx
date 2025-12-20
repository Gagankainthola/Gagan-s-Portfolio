import { Github, Linkedin, Mail, ExternalLink, FileText, Code2 } from 'lucide-react';

function LeetCodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
    </svg>
  );
}

function App() {
  const projects = [
    {
      title: "LearnFlow AI-Powered Learning Platform",
      description: "Built an AI-driven course generation platform using Next.js and Drizzle ORM, serving 500+ users with automated contentcreation.Integrated Gemini API for intelligent content generation, reducing manual course creation effort by 60%.Established Clerk authentication with Google OAuth for secure, role-based access control.Optimized media storage with Cloudinary integration, reducing costs by 40% while improving performance.",
      tech: ["Next.js", "Drizzle ORM", "Gemini API", "Clerk", "Cloudinary", "PostgreSQL"],
      link: "https://github.com/Gagankainthola/LearnFlow?tab=readme-ov-file",
      github: "https://github.com/Gagankainthola/LearnFlow?tab=readme-ov-file"
    },
    {
      title: "TeleLegal - WebRTC Video Communication Platform",
      description: "Developed real-time peer-to-peer video platform using WebRTC with UDP-based media transmission for camera, micro-phone, and screen sharing.Architected Socket.IO for TCP-based signaling and RTCPeerConnection for direct browser-to-browser communication.Engineered JWT-based role authentication system with granular access control for clients, lawyers, and administrators.Optimized call latency by 35% through codec prioritization and bitrate tuning, enhancing user experience.",
      tech: ["React.js", "WebRTC","Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO"],
      link: "https://github.com/Gagankainthola/telelegal",
      github: "https://github.com/Gagankainthola/telelegal"
    }
  ];

  const internships = [
    {
      company: "Samplify",
      role: "SDE Intern",
      period: "3 months",
      description: "Developed and maintained scalable web applications using Angular and Node.js, improving performance and respon-siveness of user-facing modules by 30%.\nDeployed RESTful APIs in Node.js and PHP, ensuring secure data exchange with MySQL databases.Built CI/CD pipelines with Bitbucket, automating deployments and reducing release cycles by 40%.\nIntegrated real-time push notifications using WebSockets and message queues for reliable asynchronous processing.Debugged and resolved critical issues in legacy backend services, enhancing application stability.\nCollaborated with cross-functional teams in Agile sprints, delivering features and contributing to code reviews."
    },
    {
      company: "Appsketch.ai",
      role: "SDE Intern",
      period: "2 months",
      description: "Architected an AI-powered website builder using React.js and Redux for state management and component architecture.\nDesigned backend architecture for scalable builder infrastructure, improving code maintainability by 40%.\nEngineered drag-and-drop functionality enabling users to build custom page layouts without coding.\nDeveloped responsive UI components and design systems, maintaining consistency and enhancing user experience."
    }
  ];

  const techStack = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black -z-10"></div>

      <div className="fixed top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 blur-[150px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 blur-[150px]"></div>
      </div>

      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/50 border-b border-red-600/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-red-600">&lt;</span>
            <span className="text-white"></span>
            <span className="text-red-600">/&gt;</span>
          </div>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-red-600 transition-colors">Experience</a>
            <a href="#tech" className="hover:text-red-600 transition-colors">Tech</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-600 to-transparent"></div>

            <div className="space-y-6">
              <div className="overflow-hidden">
                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter animate-slide-up">
                  Gagan Kainthola
                </h1>
              </div>

              <div className="overflow-hidden">
                <h2 className="text-3xl md:text-5xl text-gray-400 animate-slide-up animation-delay-200">
                  Full Stack Software Engineer
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className="text-xl text-gray-500 max-w-2xl animate-slide-up animation-delay-400">
                   Not born talented, but built through relentless effort. Every skill here is earned through dedication, countless hours of learning, and the determination to keep pushing forward.
                </p>
              </div>

              <div className="flex gap-4 pt-6 animate-slide-up animation-delay-600">
                <a href="https://github.com/Gagankainthola" className="p-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.linkedin.com/in/gagan-kainthola-4a0144240/" className="p-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://leetcode.com/u/Gagan121/" className="p-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group">
                  <LeetCodeIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://drive.google.com/file/d/1yNc8A6T5Qoy_cXjaupeSRrWlwQYvgRbW/view" className="p-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group">
                  <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="mailto:gagankainthola2@gmail.com" className="p-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group">
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-red-600/20 hover:border-red-600/50 transition-all duration-300 clip-corner"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-red-600/10 clip-corner-small"></div>

                <div className="p-8 relative">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm border border-red-600/30 text-red-600 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm hover:text-red-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-red-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/50 to-transparent"></div>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-red-600/30 hover:border-red-600 transition-colors"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-red-600 rotate-45"></div>

                <div className="bg-black/50 border border-red-600/20 p-8 hover:border-red-600/50 transition-all">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-red-600 mb-1">
                        {internship.role}
                      </h3>
                      <h4 className="text-xl text-gray-300">
                        {internship.company}
                      </h4>
                    </div>
                    <span className="text-gray-500 font-mono">
                      {internship.period}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed">
                    {internship.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-5xl font-bold">Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-600/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative aspect-square border border-red-600/20 hover:border-red-600 bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center gap-3 p-4 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all"></div>
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className="w-12 h-12 object-contain relative z-10 group-hover:scale-110 transition-transform"
                />
                <span className="text-center font-mono text-xs relative z-10 group-hover:text-red-600 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <h2 className="text-5xl font-bold">Get In Touch</h2>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="https://github.com/Gagankainthola"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/Gagan121/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group"
            >
              <LeetCodeIcon className="w-5 h-5" />
              <span>LeetCode</span>
            </a>

            <a
              href="https://drive.google.com/file/d/1yNc8A6T5Qoy_cXjaupeSRrWlwQYvgRbW/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-red-600/30 hover:bg-red-600/10 hover:border-red-600 transition-all rounded group"
            >
              <FileText className="w-5 h-5" />
              <span>Resume</span>
            </a>
          </div>

          <a
            href="mailto:gagankainthola2@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </div>
      </section>

      <footer className="border-t border-red-600/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>Designed & Built by Gagan Kainthola</p>
        </div>
      </footer>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }

        .clip-corner-small {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%);
        }
      `}</style>
    </div>
  );
}

export default App;