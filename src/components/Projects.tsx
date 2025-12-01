import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Vaultify - Private Digital Locker",
      description: "Secure document management system with multi-factor authentication. Features encrypted storage, trash management, and protected file handling for sensitive documents.",
      tags: ["Security", "React", "Authentication", "Cloud Storage"],
      highlights: ["MFA Implementation", "Encrypted Storage", "Document Management"],
      github: "https://github.com/Aksharaa-2/private-digital-lock.git"
    },
    {
      title: "Plant Disease Detection Chatbot",
      description: "AI-powered chatbot for identifying and diagnosing plant diseases, specifically optimized for tomato crops. Includes real-time disease prediction and treatment recommendations.",
      tags: ["Machine Learning", "Computer Vision", "Chatbot", "Agriculture"],
      highlights: ["Disease Prediction", "Interactive Chat", "Treatment Suggestions"],
      github: "#"
    },
    {
      title: "Self-Autonomous Car",
      description: "Autonomous vehicle simulation implementing self-driving algorithms and sensor integration for navigation and obstacle detection.",
      tags: ["IoT", "Computer Vision", "Embedded Systems"],
      highlights: ["Autonomous Navigation", "Sensor Integration", "Real-time Processing"],
      github: "https://github.com/Aksharaa-2/arduino_code.git"
    },
    {
      title: "Gmail OTP Verification System",
      description: "Secure email-based OTP verification system with time-limited codes. Implements robust authentication flow for user verification.",
      tags: ["Python", "Email Integration", "Security", "Backend"],
      highlights: ["5-minute OTP validity", "Email Integration", "Secure Authentication"],
      github: "https://github.com/Aksharaa-2/gmail_otp_verfication.git"
    },
    {
      title: "Soil Moisture Sensor with LED Indicator",
      description: "IoT-based soil monitoring system with visual LED indicators for moisture levels, helping optimize irrigation for plants.",
      tags: ["IoT", "Hardware", "Arduino", "Sensors"],
      highlights: ["Real-time Monitoring", "LED Indicators", "Agriculture Tech"],
      github: "https://github.com/Aksharaa-2/soil-moisture-sensor-with-led-indicator.git"
    },
    {
      title: "Mini-Shell Commands",
      description: "Custom command-line shell implementation with file operations including cd, ls, mkdir, cat, and cut commands for file management.",
      tags: ["Python", "System Programming", "CLI", "File System"],
      highlights: ["File Operations", "Custom Commands", "Shell Interface"],
      github: "https://github.com/Aksharaa-2/minishell.git"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full group">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-foreground/80 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">▪</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
