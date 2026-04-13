import { motion, useScroll, useTransform } from "motion/react";
import { Gamepad2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Collaboration", href: "#collaboration" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl border-b border-primary/5 shadow-sm" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="container-tight">
        <div className="flex justify-between items-center">
          <button 
            className="flex items-center gap-4 group cursor-pointer border-none bg-transparent p-0 outline-none" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <div className="bg-primary w-10 h-10 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center text-white font-black text-sm group-hover:rotate-12 transition-transform duration-500">
              F
            </div>
            <span className="text-2xl font-display font-bold tracking-tighter">
              FAVAS <span className="text-primary">M</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60 hover:text-primary transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>
            <Button size="sm" className="rounded-xl px-8 h-12 text-[10px] font-bold uppercase tracking-[0.2em] btn-premium shadow-xl shadow-primary/10" render={<a href="#contact" />}>
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-xl w-10 h-10 bg-primary/5 text-primary">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary/5 shadow-2xl p-8 space-y-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-xl font-display font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full rounded-xl h-14 text-sm font-bold btn-premium" render={<a href="#contact" onClick={() => setIsOpen(false)} />}>
            Get In Touch
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
