import { motion } from "motion/react";
import { Code, ExternalLink, Play, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectDetails } from "./ProjectDetails";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured }: ProjectCardProps) {
  return (
    <Dialog>
      <div className="h-full">
        <Card className={`h-full flex flex-col overflow-hidden border-none bg-white soft-depth transition-all duration-700 group relative hover:scale-[1.01] ${featured ? 'md:flex-row md:min-h-[500px] ring-1 ring-primary/5' : 'rounded-[2.5rem]'}`}>
          <div className={`relative overflow-hidden ${featured ? 'md:w-[55%]' : 'aspect-[16/10]'}`}>
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="absolute top-8 left-8 flex flex-col gap-3">
              {project.featured && (
                <Badge className="bg-primary text-white border-none px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl shadow-primary/20">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          <div className={`flex flex-col flex-grow p-10 md:p-14 ${featured ? 'md:w-[45%] bg-primary/[0.01]' : ''}`}>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/40">
                  {tech}
                </span>
              ))}
            </div>

            <h3 className={`font-display font-bold tracking-tighter mb-6 group-hover:text-primary transition-colors duration-500 ${featured ? 'text-5xl md:text-7xl' : 'text-3xl'}`}>
              {project.title}
            </h3>
            
            <p className="text-muted-foreground font-medium mb-10 leading-relaxed line-clamp-3 text-base">
              {project.description}
            </p>

            {featured && (
              <div className="flex flex-wrap gap-4 mb-10">
                {project.playUrl && (
                  <Button size="sm" className="rounded-xl h-12 px-6 font-bold btn-premium" render={<a href={project.playUrl} target="_blank" rel="noopener noreferrer" />}>
                    <Play className="mr-2 h-4 w-4 fill-current" /> Play
                  </Button>
                )}
                {project.codeUrl && (
                  <Button variant="outline" size="sm" className="rounded-xl h-12 px-6 font-bold border-primary/10 hover:bg-primary/5" render={<a href={project.codeUrl} target="_blank" rel="noopener noreferrer" />}>
                    <Code className="mr-2 h-4 w-4" /> Code
                  </Button>
                )}
              </div>
            )}

            <div className="mt-auto pt-10 flex items-center justify-between border-t border-primary/5">
              <DialogTrigger variant="link" className="p-0 h-auto text-primary font-bold uppercase tracking-[0.3em] text-[10px] group/btn hover:no-underline flex items-center gap-3">
                {featured ? 'View Case Study' : 'Explore Case Study'}
                <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-500">
                  <ArrowUpRight className="h-3.5 w-3.5 group-hover/btn:text-white transition-colors" />
                </div>
              </DialogTrigger>
            </div>
          </div>
        </Card>
      </div>

      <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
        <DialogHeader className="p-10 pb-0">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Project Showcase</span>
          </div>
          <DialogTitle className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
            {project.title}
          </DialogTitle>
          <p className="text-xl text-muted-foreground font-medium mt-2">{project.tagline}</p>
        </DialogHeader>
        <div className="p-10 pt-6">
          <ProjectDetails project={project} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
