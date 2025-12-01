import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Database, Cloud, Cpu, Terminal, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript", "TypeScript"]
    },
    {
      icon: Layers,
      title: "Web Development",
      skills: ["React", "HTML/CSS", "Node.js", "REST APIs"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["SQL", "MySQL", "Database Design"]
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: ["Snowflake", "Microsoft Azure", "Git", "GitHub"]
    },
    {
      icon: Cpu,
      title: "Computer Architecture",
      skills: ["Parallel Processing", "Data-Level Parallelism", "Instruction Parallelism"]
    },
    {
      icon: Terminal,
      title: "Other Technologies",
      skills: ["Machine Learning", "IoT", "System Programming", "Computer Vision"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full group">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-sm border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
