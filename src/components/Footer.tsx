import { Gamepad2, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-white border-t border-primary/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      
      <div className="container-tight">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <div className="text-3xl font-display font-black tracking-tighter flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white text-base shadow-xl shadow-primary/20">F</div>
              FAVAS <span className="text-primary">M</span>
            </div>
            <p className="text-muted-foreground/60 text-sm font-medium max-w-[240px] text-center md:text-left leading-relaxed">
              Architecting high-performance digital worlds with Unity and C#.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="flex items-center gap-10">
              {[
                { icon: <Linkedin className="h-6 w-6" />, href: "https://linkedin.com/in/favasm", label: "LinkedIn" },
                { icon: <Github className="h-6 w-6" />, href: "https://github.com", label: "GitHub" },
                { icon: <Mail className="h-6 w-6" />, href: "mailto:favasm7907@gmail.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/30 hover:text-primary transition-all duration-500 hover:-translate-y-1.5"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <div className="text-muted-foreground/30 text-[10px] font-bold uppercase tracking-[0.4em]">
                © {currentYear} ALL RIGHTS RESERVED
              </div>
              <div className="text-primary/10 text-[8px] font-bold uppercase tracking-[0.5em]">
                BUILT WITH PRECISION
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
