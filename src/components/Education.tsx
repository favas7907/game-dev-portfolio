import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "BTech Computer Science and Engineering",
      institution: "University of Calicut",
      batch: "2024 - 2028",
      desc: "Focusing on core computer science principles, software engineering, and advanced game development systems."
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6 flex items-center gap-4">
            <div className="w-8 h-px bg-primary/20" />
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
            EDUCATION
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-primary/[0.02] border border-primary/5 soft-depth group hover:border-primary/20 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-bold text-lg">{edu.institution}</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest border border-primary/10">
                    {edu.batch}
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed font-medium max-w-3xl">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
