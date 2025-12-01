import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
                <p className="text-xl text-primary mb-3">Karunya Institute of Technology and Sciences</p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>Expected Graduation: 2026</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a comprehensive education in computer science with focus on software development,
                  algorithms, data structures, and emerging technologies. Active participant in hackathons
                  and technical events, consistently working on innovative projects.
                </p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Roll No: URK24CS5018
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
