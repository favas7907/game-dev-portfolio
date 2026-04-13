import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Gamepad2, Sparkles, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white hero-gradient">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Abstract Geometric Shapes with softer opacity */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[40rem] h-[40rem] border-[40px] border-primary/2 rounded-[8rem] blur-2xl"
        />
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-[45rem] h-[45rem] bg-primary/[0.04] rounded-full blur-[120px]"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container-tight relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-12 shadow-sm backdrop-blur-md"
          >
            <Trophy className="h-3.5 w-3.5 text-primary" />
            Unity Game Developer
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-12"
          >
            <h1 className="text-7xl md:text-[11rem] font-display font-bold tracking-tighter leading-[0.8] select-none">
              FAVAS <span className="blue-gradient-text">M</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-xl text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed font-medium"
          >
            Architecting high-performance gameplay systems 
            with <span className="text-primary font-bold">Unity</span> and <span className="text-primary font-bold">C#</span>. 
            Focused on technical excellence and immersive mechanics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button size="lg" className="rounded-2xl px-14 h-18 text-base font-bold btn-premium" render={<a href="#projects" />}>
              Explore Projects
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-2xl px-14 h-18 text-base font-bold border-primary/10 hover:bg-primary/5 transition-all duration-500" render={<a href="#contact" />}>
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group flex flex-col items-center gap-4 text-muted-foreground hover:text-primary transition-all">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100">Scroll</span>
          <div className="w-7 h-12 border-2 border-muted-foreground/20 rounded-full flex justify-center p-1.5 group-hover:border-primary/40 transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-muted-foreground/40 group-hover:bg-primary rounded-full transition-colors"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
