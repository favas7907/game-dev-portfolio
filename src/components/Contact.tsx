import { motion } from "motion/react";
import { Github, Linkedin, Mail, Send, Users, Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "favasm7907@gmail.com", href: "mailto:favasm7907@gmail.com" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "Favas M", href: "https://linkedin.com/in/favasm" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "favasm", href: "https://github.com" },
  ];

  const opportunities = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Projects",
      desc: "Open to joining established teams or indie studios."
    },
    {
      icon: <Handshake className="h-5 w-5" />,
      title: "Co-Development",
      desc: "Partnering with artists to bring concepts to life."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Consulting",
      desc: "Available for technical architecture guidance."
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-tight relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Info & Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-primary/10">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for Projects
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter leading-none mb-6">
                GET IN <span className="text-primary">TOUCH</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed max-w-md">
                Whether you have a question or a proposal, I'm always open to discussing new opportunities.
              </p>
            </div>

            {/* Contact Info List */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="flex items-center gap-6 p-6 rounded-2xl bg-primary/[0.02] border border-primary/5 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.4em] mb-1">{item.label}</p>
                    <p className="text-base font-bold group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Collaboration Block */}
            <div className="pt-10 border-t border-primary/5">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8">Collaboration Opportunities</h3>
              <div className="grid sm:grid-cols-3 gap-8">
                {opportunities.map((item) => (
                  <div key={item.title} className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-primary/5 soft-depth relative"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-2">Full Name</label>
                  <Input placeholder="John Doe" className="rounded-xl h-14 bg-primary/[0.02] border-primary/5 focus-visible:ring-primary/10 text-base font-medium px-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl h-14 bg-primary/[0.02] border-primary/5 focus-visible:ring-primary/10 text-base font-medium px-6" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/60 ml-2">Message</label>
                  <Textarea placeholder="How can I help you?" className="rounded-xl min-h-[160px] bg-primary/[0.02] border-primary/5 focus-visible:ring-primary/10 text-base font-medium p-6 resize-none" />
                </div>
              </div>
              <Button className="w-full h-16 rounded-xl text-base font-bold gap-3 btn-premium shadow-lg shadow-primary/10">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
