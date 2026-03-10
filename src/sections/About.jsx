import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring idead to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column*/}
          <div className="space-y-8">
            <div className="animation-hade-in ">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
              Building modern web experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animation-fade-in animation-delay-200">
              <p>
                Hi, I’m Sipho Msiza — a software developer specializing in
                React, Next.js, and TypeScript. I build scalable,
                high-performance web applications with a strong focus on clean
                UI, usability, and performance.
              </p>
              <p>
                I’m a graduate in Information Technology from Tshwane University
                of Technology, where I built a solid foundation in software
                development and problem-solving. Over the past 2 years, I’ve
                been actively working with React, building modern interfaces and
                real-world web applications.
              </p>
              <p>
                I enjoy turning ideas into reliable digital products through
                thoughtful code and clean design. When I’m not coding, I’m
                continuously learning new technologies, refining my skills, and
                working on personal projects that help me grow as a developer.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animation-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to build modern web applications that are not only
                functional, but enjoyable to use — with clean code and
                thoughtful user experiences.
              </p>
            </div>
          </div>
          {/* Right Column - Hilights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animation-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
