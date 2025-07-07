"use client";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { skills, skillCategories } from "./data/skills";
import { projects } from "./data/projects";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";
function MainContent() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <main className="p-8 lg:p-12 space-y-24 max-h-screen overflow-y-auto">
      {/* Hero Section */}
      <section className="pt-12 pb-8">
        <div className="flex justify-end animate-fade-in-up">
          <ThemeToggle />
        </div>
        <div className="max-w-4xl">
          <h2 className="text-5xl lg:text-7xl font-light text-gray-900 dark:text-gray-100 leading-tight mb-8 animate-fade-in-up transition-colors duration-300">
            Creating digital
            <br />
            <span className="text-gray-500 dark:text-gray-400">
              experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-2xl animate-fade-in-up animate-delay-100 transition-colors duration-300">
            I&apos;m a software engineer focused on building exceptional digital
            products that combine beautiful design with powerful functionality.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={setSectionRef("about")}
        className={`scroll-mt-8 transition-all duration-700 ${
          visibleSections.has("about")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              About
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg transition-colors duration-300">
              <p>
                I&apos;m passionate about the intersection of design and
                technology. My journey began with curiosity about how things
                work and evolved into a love for creating digital solutions that
                make a difference.
              </p>
              <p>
                I specialize in full-stack development with expertise in modern
                JavaScript frameworks, cloud technologies, and user experience
                design. I believe great software is built through collaboration,
                iteration, and attention to detail.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-muted to-muted/80 rounded-3xl p-8 lg:p-10 transition-colors duration-300">
            <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Currently
            </h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="font-light">
                  Available for new opportunities
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="font-light">Learning AI/ML technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-light">Contributing to open source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={setSectionRef("skills")}
        className={`scroll-mt-8 transition-all duration-700 ${
          visibleSections.has("skills")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-12">
          <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 transition-colors duration-300">
            Skills & Technologies
          </h3>

          <div className="space-y-16">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(
                (skill) => skill.category && skill.category === category.id
              );
              return (
                <div key={category.id} className="space-y-8">
                  <h4 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest transition-colors duration-300">
                    {category.name}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categorySkills.map((skill) => {
                      const IconComponent = skill.icon;
                      const delay =
                        Number(category.id) * 100 + Number(skill.id) * 50;
                      return (
                        <div
                          key={skill.id}
                          className={`group flex items-center gap-4 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-border/80 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-300 hover:-translate-y-2 ${
                            visibleSections.has("skills")
                              ? "animate-fade-in-up"
                              : "opacity-0"
                          }`}
                          style={{ animationDelay: `${delay}ms` }}
                        >
                          <IconComponent className="text-2xl text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300" />
                          <span className="text-base font-light text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef("projects")}
        className={`scroll-mt-8 transition-all duration-700 ${
          visibleSections.has("projects")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-light text-gray-900 dark:text-gray-100 transition-colors duration-300">
              Selected Work
            </h3>
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 font-light group transition-colors duration-300"
            >
              View all projects
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${
                  visibleSections.has("projects")
                    ? "animate-fade-in-up"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-card/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-border hover:border-border/80 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 hover:-translate-y-4">
                  <div className="lg:flex">
                    <div className="lg:w-3/5 relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={500}
                        height={500}
                        className="w-full h-70 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-card/90 text-card-foreground text-xs font-light border-0 shadow-sm px-3 py-1 transition-colors duration-300">
                            FEATURED
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-2xl font-light text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-base transition-colors duration-300">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs border-border text-muted-foreground font-light bg-card/50 hover:bg-card/80 transition-colors duration-300 px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border text-foreground hover:bg-accent bg-card/50 backdrop-blur-sm rounded-xl font-light transition-all duration-300 hover:-translate-y-1 group/btn"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform duration-300" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-border text-foreground hover:bg-accent bg-card/50 backdrop-blur-sm rounded-xl font-light transition-all duration-300 hover:-translate-y-1"
                            asChild
                          >
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef("contact")}
        className={`scroll-mt-8 pb-16 transition-all duration-700 ${
          visibleSections.has("contact")
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center space-y-8">
          <h3 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
            Let&apos;s work
            <br />
            <span className="text-gray-500 dark:text-gray-400">together</span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto transition-colors duration-300">
            I&apos;m always interested in new opportunities and collaborations.
            Let&apos;s create something amazing together.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-light px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            asChild
          >
            <a href="mailto:ingkarat.sitt@gmail.com">Get in touch</a>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
