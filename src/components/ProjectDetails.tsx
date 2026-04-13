import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Project } from "@/data/projects";
import { Code, Play, CheckCircle2, Cpu, Zap } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <ScrollArea className="max-h-[85vh] pr-6">
      <div className="space-y-16 pb-16">
        {/* Video/Hero Image */}
        <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-primary/[0.02] border border-primary/5 shadow-2xl relative group">
          {project.videoUrl ? (
            <iframe
              src={project.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 rounded-[2.5rem]" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            {/* Description */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-3xl font-display font-bold tracking-tight">Project Overview</h3>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {project.description}
              </p>
            </section>

            {/* Features & Mechanics */}
            <div className="grid sm:grid-cols-2 gap-16">
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                  <div className="w-4 h-px bg-primary/30" />
                  Core Features
                </h3>
                <ul className="space-y-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground flex gap-4 text-base font-medium group">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" /> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 flex items-center gap-3">
                  <div className="w-4 h-px bg-primary/30" />
                  Key Mechanics
                </h3>
                <ul className="space-y-6">
                  {project.mechanics.map((mech, i) => (
                    <li key={i} className="text-muted-foreground flex gap-4 text-base font-medium group">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform" /> 
                      <span>{mech}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Process */}
            <section className="bg-primary/[0.02] p-12 rounded-[3rem] border border-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                <Cpu className="h-32 w-32" />
              </div>
              <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Development Insights
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium italic">
                "{project.process}"
              </p>
            </section>

            {/* Gallery */}
            <section>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10 flex items-center gap-3">
                <div className="w-4 h-px bg-primary/30" />
                Visual Gallery
              </h3>
              <div className="grid grid-cols-2 gap-8">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="aspect-video rounded-[2rem] overflow-hidden border border-primary/5 premium-shadow group cursor-zoom-in relative">
                    <img src={src} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-12">
            {/* Tech Stack */}
            <section className="bg-white p-8 rounded-[2.5rem] border border-primary/5 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 mb-8">Engine & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-5 py-2.5 rounded-xl bg-primary/[0.03] text-primary border-none text-xs font-bold hover:bg-primary hover:text-white transition-all duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            <Separator className="opacity-30" />

            {/* Actions */}
            <div className="space-y-6">
              {project.playUrl && (
                <Button className="w-full h-18 rounded-2xl gap-4 text-lg font-bold btn-premium shadow-2xl shadow-primary/20" render={<a href={project.playUrl} target="_blank" rel="noopener noreferrer" />}>
                  <Play className="h-6 w-6 fill-current" /> Launch Experience
                </Button>
              )}
              {project.codeUrl && (
                <Button variant="outline" className="w-full h-18 rounded-2xl gap-4 text-lg font-bold border-2 border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-500" render={<a href={project.codeUrl} target="_blank" rel="noopener noreferrer" />}>
                  <Code className="h-6 w-6" /> View Repository
                </Button>
              )}
            </div>

            {/* Concept Art */}
            {project.conceptArt && project.conceptArt.length > 0 && (
              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 mb-8">Concept Art</h3>
                <div className="grid grid-cols-1 gap-8">
                  {project.conceptArt.map((src, i) => (
                    <div key={i} className="rounded-[2rem] overflow-hidden border border-primary/5 premium-shadow group">
                      <img src={src} alt={`Concept Art ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
