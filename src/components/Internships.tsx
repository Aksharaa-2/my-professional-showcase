import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-12 bg-gradient-card border-border/50 text-center">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Open to Opportunities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Currently seeking internship opportunities to apply my technical skills and contribute to innovative projects.
              Eager to learn from industry professionals and gain hands-on experience in software development.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
