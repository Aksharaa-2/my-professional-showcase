import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, BookOpen, Gamepad2 } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Code,
      title: "Coding",
      description: "Building side projects and exploring new technologies"
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Tech blogs, documentation, and science fiction novels"
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategy games and puzzle-solving challenges"
    }
  ];

  return (
    <section id="hobbies" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Hobbies & Interests
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full group text-center">
                <div className="mb-4 mx-auto w-fit">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <hobby.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{hobby.title}</h3>
                <p className="text-muted-foreground text-sm">{hobby.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
