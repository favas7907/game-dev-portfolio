import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function About() {
  const education = [
    {
      degree: "BTech Computer Science and Engineering",
      institution: "University of Calicut",
      batch: "2024 - 2028",
      desc: "Focusing on core computer science principles, software engineering, and advanced game development systems."
    }
  ];

  const focusAreas = [
    "Unity Development",
    "Gameplay Mechanics",
    "C# Programming",
    "Interactive Systems"
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] -skew-x-12 translate-x-1/4" />
      
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-primary/20" />
              About Me
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 leading-[1.1] tracking-tighter">
              PASSIONATE <br />
              <span className="text-primary">TECHNICAL</span> <br />
              CREATIVE
            </h2>
            <div className="space-y-10 text-xl text-muted-foreground leading-relaxed font-medium">
              <p>
                I am <span className="text-foreground font-bold">Favas M</span>, a dedicated Unity Game Developer with a strong focus on creating 
                engaging gameplay mechanics and interactive systems. My journey in game development 
                is driven by a passion for solving technical challenges and bringing creative visions to life.
              </p>
              <p>
                Specializing in <span className="text-primary font-bold">C#</span> and <span className="text-primary font-bold">Unity</span>, I strive to build high-performance, scalable systems 
                that provide seamless player experiences. I believe in clean code and continuous 
                learning to stay at the forefront of game technology.
              </p>
            </div>

            {/* Focus Areas Subsection */}
            <div className="mt-12">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6">Core Focus</h3>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="secondary" className="px-6 py-2.5 rounded-xl bg-primary/5 text-primary border-none text-xs font-bold">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education Subsection */}
            <div className="mt-20">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-10">Education</h3>
              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-primary/[0.02] border border-primary/5 hover:border-primary/20 transition-colors duration-500">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold">{edu.degree}</h4>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full">{edu.batch}</span>
                    </div>
                    <p className="text-muted-foreground font-bold text-lg mb-4">{edu.institution}</p>
                    <p className="text-muted-foreground/60 text-sm leading-relaxed">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 space-y-12">
            {/* Professional Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 layered-card bg-primary text-white shadow-2xl shadow-primary/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Sparkles className="h-24 w-24" />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-8 opacity-60">Philosophy</h3>
              <p className="text-3xl font-display font-bold leading-tight italic relative z-10">
                "Clean code isn't just about performance; it's about creating a foundation where creativity can flourish without technical debt."
              </p>
            </motion.div>

            {/* Additional Info / Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-[3rem] bg-primary/[0.02] border border-primary/5"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8">Current Focus</h3>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Currently exploring <span className="text-foreground font-bold">Advanced Shader Development</span> and 
                <span className="text-foreground font-bold">Multiplayer Networking</span> in Unity to push the boundaries 
                of interactive storytelling.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
