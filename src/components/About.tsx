import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function About() {
  const focusAreas = [
    { title: "Unity Development", desc: "Building robust 2D/3D games with optimized performance." },
    { title: "Gameplay Mechanics", desc: "Designing intuitive and engaging player interactions." },
    { title: "C# Programming", desc: "Writing clean, scalable, and maintainable game logic." },
    { title: "Interactive Systems", desc: "Developing complex systems for immersive experiences." }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-tight relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Introduction & Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-4">
                <div className="w-8 h-px bg-primary/20" />
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-[1.1] mb-10">
                UNITY DEVELOPER <br />
                <span className="text-primary">ARCHITECTING</span> <br />
                EXPERIENCES
              </h2>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed font-medium">
                <p>
                  I am <span className="text-foreground font-bold">Favas M</span>, a Unity Game Developer focused on building interactive and engaging gameplay experiences. I specialize in bridging the gap between complex technical systems and intuitive player interactions.
                </p>
                <p>
                  My approach to development is rooted in <span className="text-primary font-bold">technical excellence</span> and <span className="text-primary font-bold">creative problem-solving</span>. I believe that the best games are built on a foundation of clean code and a deep understanding of player psychology.
                </p>
              </div>
            </div>

            {/* High-level Skills Overview */}
            <div className="pt-10 border-t border-primary/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8 opacity-60">My Mindset</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Clean Code</h4>
                  <p className="text-sm text-muted-foreground">Prioritizing maintainability and scalability in every system.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-foreground">Performance</h4>
                  <p className="text-sm text-muted-foreground">Optimizing for smooth experiences across all platforms.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Focus Areas & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:sticky lg:top-32"
          >
            <div className="p-10 md:p-12 rounded-3xl bg-white border border-primary/5 soft-depth space-y-12 relative">
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.01] rounded-full -translate-y-1/2 translate-x-1/2" />

              {/* Focus Areas Block */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8 opacity-60">Core Focus</h3>
                <div className="space-y-6">
                  {focusAreas.map((area) => (
                    <div key={area.title} className="group">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">{area.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Philosophy */}
              <div className="pt-10 border-t border-primary/5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6 opacity-60">Philosophy</h3>
                <p className="text-base text-muted-foreground/80 italic leading-relaxed font-medium">
                  "Great gameplay isn't just about what the player sees, but how every system works in harmony to create a seamless world."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
