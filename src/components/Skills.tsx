import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Layout, Code2, Gamepad2, Wrench } from "lucide-react";

export function Skills() {
  const skillGroups = [
    {
      title: "Game Development",
      icon: <Gamepad2 className="h-6 w-6" />,
      skills: ["Unity 3D/2D", "Gameplay Mechanics", "Physics Systems", "AI & Pathfinding", "Shaders & VFX", "Cinemachine"]
    },
    {
      title: "Programming",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["C#", "HLSL/Shader Graph", "Data Structures", "Design Patterns", "Optimization", "Scriptable Objects"]
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Blender", "Plastic SCM", "Visual Studio", "Unity Version Control", "Agile/Scrum"]
    },
    {
      title: "Design",
      icon: <Layout className="h-6 w-6" />,
      skills: ["UI/UX Design", "Level Design", "Technical Art", "Prototyping", "Game Feel", "User Research"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white relative overflow-hidden">
      <div className="container-tight relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-primary/20" />
              Expertise
              <div className="w-8 h-px bg-primary/20" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-10 leading-tight">
              TECHNICAL <span className="blue-gradient-text">ARSENAL</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              A comprehensive toolkit tailored for high-performance game development 
              and immersive interactive experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 layered-card group"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-display font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold bg-primary/[0.02] text-foreground border border-primary/5 hover:border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
