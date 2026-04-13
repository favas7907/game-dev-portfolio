import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProject = projects.find(p => p.featured) || projects[0];
  const otherProjects = projects.filter(p => p.id !== featuredProject.id);

  return (
    <section id="projects" className="section-padding bg-background relative">
      {/* Decorative background text */}
      <div className="absolute top-40 left-0 text-[20rem] font-display font-black text-primary/[0.01] select-none pointer-events-none -translate-x-1/2">
        PROJECTS
      </div>

      <div className="container-tight relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-primary/20" />
              Selected Works
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">
              ENGINEERING <br />
              <span className="blue-gradient-text">EXPERIENCES</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-sm leading-relaxed font-medium lg:mb-2"
          >
            A curated selection of high-performance games 
            built with <span className="text-foreground font-bold">Unity</span> and <span className="text-foreground font-bold">C#</span>.
          </motion.p>
        </div>

        <div className="space-y-24">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ProjectCard project={featuredProject} featured />
          </motion.div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {otherProjects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
