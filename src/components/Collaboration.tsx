import { motion } from "motion/react";
import { Users, Handshake, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Collaboration() {
  const opportunities = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Projects",
      desc: "Open to joining established teams or indie studios as a lead or gameplay developer."
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Co-Development",
      desc: "Interested in partnering with artists and designers to bring unique game concepts to life."
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Technical Consulting",
      desc: "Available for code reviews, Unity optimization, and technical architecture guidance."
    }
  ];

  return (
    <section id="collaboration" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-40 right-0 text-[15rem] font-display font-black text-primary/[0.01] select-none pointer-events-none translate-x-1/2">
        PARTNER
      </div>

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-4">
              <div className="w-8 h-px bg-primary/20" />
              Collaboration
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-12 tracking-tighter leading-[0.9]">
              LET'S CREATE <br />
              <span className="blue-gradient-text">TOGETHER</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium max-w-xl">
              I'm always looking for innovative projects and talented individuals to work with. 
              Whether you have a fully-fledged idea or just a spark of inspiration, let's talk.
            </p>
            <Button size="lg" className="rounded-full px-12 h-16 text-xs font-bold uppercase tracking-[0.2em] btn-premium shadow-2xl shadow-primary/20" render={<a href="#contact" />}>
              Start a Conversation <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </motion.div>

          <div className="space-y-10">
            {opportunities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 layered-card group"
              >
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
