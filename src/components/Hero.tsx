import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Computer Science Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Aksharaa S
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Passionate developer crafting innovative solutions through code.
            <br />
            Building the future, one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button size="lg" variant="secondary" className="backdrop-blur-sm">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
