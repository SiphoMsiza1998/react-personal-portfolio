const experiences = [
  {
    period: "2024 - 2025",
    role: "Front-End Developer Intern",
    company: "NetCampus Group",
    description:
      "Worked on a Doctor Management System, developing both front-end and back-end features. Built responsive interfaces with React and Next.js, created RESTful APIs using Node.js and Express.js, implemented JWT authentication, and managed databases with Prisma.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Prisma",
      "JWT",
    ],
    current: true,
  },
  {
    period: "2023 - 2024",
    role: "Front-End Developer Intern",
    company: "Solvey Polymers and Chemicals(Pty) Ltd, South Africa",
    description:
      "Built and maintained responsive user interface components using React and Tailwind CSS. Collaborated with the development team to improve performance, scalability, and user experience across applications.",
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    current: false,
  },
  {
    period: "2022 - 2023",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Developed custom websites and web applications for small businesses and startups, managing projects from initial design to deployment. Focused on responsive design, performance, and user experience.",
    technologies: ["JavaScript", "WordPress", "SQL"],
    current: false,
  },
  {
    period: "2021 - 2022",
    role: "Network Technician Intern",
    company: "Bon Connect Pty Ltd",
    description:
      "Configured, managed, monitored, and troubleshooted computer networks and IT infrastructure. Performed hardware maintenance, provided LAN and WAN support to clients, and diagnosed network connectivity and cabling issues.",
    technologies: [],
    current: false,
  },
  {
    period: "2020 - 2021",
    role: "Principal Tutor",
    company: "Tshwane University of Technology",
    description:
      "Led a team of tutors to ensure effective academic support for students across various subjects. Monitored student progress, identified challenges, and developed strategies and initiatives to improve pass rates and overall academic performance.",
    technologies: [],
    current: false,
  },
  {
    period: "2019 - 2020",
    role: "Academic Tutor",
    company: "Tshwane University of Technology",
    description:
      "Assisted students struggling with programming and mathematics by providing personalized guidance, explaining complex concepts, and helping improve academic performance. Supported students on probation or at risk of academic exclusion.",
    technologies: ["C++", "Java", "Calculus"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header*/}

        <div className=" max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
            {" "}
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.{" "}
            </span>
          </h2>

          <p className="text-muted-foreground animation-fade-in animation-delay-200">
            A journey from curious learner to hands-on developer, creating
            real-world web experiences.
          </p>
        </div>

        {/* Timeline*/}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Iteams*/}

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animation-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot*/}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75 " />
                  )}
                </div>

                {/*Content*/}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 `}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""} `}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
