import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Job Application Tracker",
    description:
      "A modern full-stack web app to track job applications in real-world scenarios, featuring drag-and-drop functionality, secure authentication, and responsive user interfaces.",
    image: "/projects/TrackMyJobs.png",
    tags: [
      "Next.js 16",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "TypeScript",
      "BetaAuth",
    ],
    link: "https://track-my-jobs-six.vercel.app/",
    github: "https://github.com/SiphoMsiza1998/TrackMyJobs",
  },
  {
    title: "Modern Personal Portfolio",
    description:
      "A sleek and interactive personal portfolio with hero section, project showcase, experience timeline, testimonials, and a contact form with email integration. Built with modern animations and responsive design.",
    image: "/projects/Modern-Personal-Portfolio.png",
    tags: ["React", "TailwindCSS", "Vite", "EmailJS"],
    link: "#",
    github: "#",
  },
  {
    title: "MaxiSiza Laundry Services",
    description:
      "A full-featured laundry service website with a full-bleed hero, animated service cards, step-by-step process section, transparent pricing grid, and a booking form with R50 deposit policy enforcement. Features page-load stagger animations, scroll-triggered reveals, animated progress bars, and a fully responsive dark editorial design.",
    image: "/projects/MaxiSiza.png",
    tags: [
      "React",
      "Vite",
      "CSS Animations",
      "IntersectionObserver",
      "Unsplash CDN",
    ],
    link: "https://maxisiza-website-krjf6ua5f-siphomsiza1998s-projects.vercel.app/",
    github: "https://github.com/SiphoMsiza1998/maxisiza-website",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a fully responsive personal portfolio website to showcase my technical skills and projects. Implemented modern layout techniques, interactive elements, and optimized performance to enhance user experience across devices.",
    image: "/projects/JavaScript-Personal-Portfolio-Website.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://siphomsiza1998.github.io/Personal-Portfolio-Website/",
    github: "https://github.com/SiphoMsiza1998/Personal-Portfolio-Website",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows*/}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded"></div>
      <div className="container mx-auto px-6 relative z-10"></div>

      {/* Section Header*/}
      <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-fade-in">
          Featured Work{" "}
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-fade-in animation-delay-100 text-secondary-foreground">
          Projects With
          <span className="font-serif italic font-normal text-white">
            {" "}
            Real-World Impact
          </span>
        </h2>

        <p className="text-muted-foreground animation-fade-in animation-delay-200">
          Here’s a selection of my recent work, where I build modern web
          applications and tools that turn real-world problems into simple
          solutions.
        </p>
      </div>
      {/* Project Grid*/}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group glass rounded-2xl overflow-hidden animation-fade-in md:row-span-1"
            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
          >
            {/*Image*/}
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className=" w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

              {/* Overlay Links*/}
              <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.link}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <ArrowUpRight className="w-5 h-5 " />
                </a>
                <a
                  href={project.github}
                  className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Github className="w-5 h-5 " />
                </a>
              </div>
            </div>

            {/* Content*/}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
              <div className=" flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All CTA*/}
      <div className="text-center mt-12 animation-fade-in animation-delay-500">
        <AnimatedBorderButton>
          View All Projects
          <ArrowUpRight class="w-5 h-5" />
        </AnimatedBorderButton>
      </div>
    </section>
  );
};
