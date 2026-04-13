import { motion } from "motion/react";
import { Lightbulb, Zap, Code2, Sparkles, Rocket, RefreshCw } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Idea",
      desc: "Conceptualizing core mechanics and defining the unique vision for the project."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Prototype",
      desc: "Building rapid prototypes to validate gameplay loops and technical feasibility."
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Implement",
      desc: "Developing robust systems and integrating assets with clean, scalable code."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Test",
      desc: "Rigorous testing and debugging to ensure high performance and stability."
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Improve",
      desc: "Iterating based on feedback to polish mechanics and enhance the player experience."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Deploy",
      desc: "Optimizing and deploying to platforms while iterating based on player feedback."
    }
  ];

  return (
    <section id="process" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_100%,rgba(0,85,255,0.02)_0%,transparent_70%)]" />
      
      <div className="container-tight relative">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-primary/20" />
              Methodology
              <div className="w-8 h-px bg-primary/20" />
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-10 leading-tight">
              THE <span className="blue-gradient-text">ENGINEERING</span> FLOW
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              A systematic approach to game development that balances technical 
              rigor with creative exploration.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Refined Connection Line */}
          <div className="absolute top-[60px] left-[10%] w-[80%] h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-16 relative">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-28 h-28 rounded-[2.5rem] bg-white border border-primary/5 shadow-2xl shadow-primary/5 flex items-center justify-center text-primary mb-12 group-hover:bg-primary group-hover:text-white group-hover:-translate-y-3 transition-all duration-700 z-10 relative">
                  {step.icon}
                  <div className="absolute -inset-2 bg-primary/5 rounded-[2.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                </div>
                
                <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[160px] font-display font-black text-primary/[0.02] -z-0 select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700">
                  {i + 1}
                </div>

                <h3 className="text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed font-medium px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
