import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_50%_100%,rgba(0,85,255,0.03)_0%,transparent_70%)] -z-10" />
      
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-10 border border-primary/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Collaboration
            </div>
            <h2 className="text-6xl md:text-7xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
              LET'S BUILD <br />
              SOMETHING <span className="blue-gradient-text">LEGENDARY</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed font-medium max-w-lg">
              Whether you're looking for a lead developer for your next title or 
              want to collaborate on an innovative project, I'm just a message away.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Mail className="h-6 w-6" />, label: "Email", value: "favasm7907@gmail.com", href: "mailto:favasm7907@gmail.com" },
                { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", value: "Favas M", href: "https://linkedin.com/in/favasm" },
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="group p-8 rounded-[2.5rem] bg-primary/[0.02] hover:bg-primary/5 transition-all duration-500 border border-primary/5 hover:border-primary/20"
                >
                  <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.4em] mb-2">{item.label}</p>
                  <p className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{item.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[3rem] soft-depth border border-primary/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <form className="space-y-10 relative" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-4">Name</label>
                  <Input placeholder="John Doe" className="rounded-2xl h-16 bg-primary/[0.02] border-none focus-visible:ring-primary/10 text-base font-medium px-8" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-4">Email</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-2xl h-16 bg-primary/[0.02] border-none focus-visible:ring-primary/10 text-base font-medium px-8" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-4">Message</label>
                <Textarea placeholder="Tell me about your vision..." className="rounded-[2rem] min-h-[200px] bg-primary/[0.02] border-none focus-visible:ring-primary/10 text-base font-medium p-8 resize-none" />
              </div>
              <Button className="w-full h-18 rounded-2xl text-lg font-bold gap-4 group btn-premium shadow-xl shadow-primary/10">
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
