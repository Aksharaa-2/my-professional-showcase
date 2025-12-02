import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const Internships = () => {
  return (
    <section id="internships" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Internships
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Python Internship</h3>
                  <p className="text-primary font-semibold">Abservetech Private Limited</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>December 20, 2024 - January 4, 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Completed a comprehensive Python internship program focusing on practical application development. 
                  Gained hands-on experience with Python programming, working on real-world projects and enhancing 
                  technical skills in a professional environment.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Python</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Development</span>
              </div>
              <Button size="sm" variant="secondary" className="w-full" asChild>
                <a href="user-uploads://Akshara_Internship_Certificate_1.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </a>
              </Button>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Cybersecurity Internship</h3>
                  <p className="text-primary font-semibold">Prompt Infotech</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>June 2, 2025 - July 2, 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Successfully completed an intensive cybersecurity internship with hands-on exposure to security 
                  protocols, threat analysis, and network protection. Actively contributed to assigned tasks and 
                  gained practical knowledge in a professional cybersecurity environment.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Cybersecurity</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">Network Security</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
