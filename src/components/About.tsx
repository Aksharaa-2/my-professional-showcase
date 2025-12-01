import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Passionate about creating efficient solutions to complex challenges"
    },
    {
      icon: Lightbulb,
      title: "Creative Thinker",
      description: "Always exploring innovative approaches to software development"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Dedicated to continuous learning and achieving excellence"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student at Karunya Institute with a passion for innovation and technology.
            My journey in software development has led me to participate in prestigious hackathons like Smart India Hackathon,
            and work on diverse projects ranging from autonomous systems to secure digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-card h-full">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
