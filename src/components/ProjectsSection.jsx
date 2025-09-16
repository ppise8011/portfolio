import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Makhanawala",
    description:
      "Redesigned the entire site for enhanced user experience and conversion.",
    image: "https://i.postimg.cc/BZygC82N/project10.png", // Replace with actual image path
    tags: ["Wordpress"],
    demoUrl: "https://makhanawala.com/",
    githubUrl: "", // No GitHub link if none
  },
  {
    id: 2,
    title: "Urban Monk",
    description:
      "Redesigned the entire site for enhanced user experience in WOrdpress.",
    image: "https://i.postimg.cc/kXBHJ3vY/project5.png", // Replace with actual image path
    tags: ["Wordpress"],
    demoUrl: "https://myurbanmonk.in/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Daishik",
    description:
      "Redesigned the entire site for enhanced user experience and conversion.",
    image: "https://i.postimg.cc/6QXMdzqQ/project6.png", // Replace with actual image path
    tags: ["Shopify"],
    demoUrl: "https://daishik.co.in", // Replace with actual URL
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="px-6 md:px-16 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-70 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-left">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-left">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} Demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pranav-pise-48b5872a6/" // Update to your LinkedIn URL
          >
            Check My LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
