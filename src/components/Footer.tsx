import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-2">
              Aksharaa S
            </h3>
            <p className="text-muted-foreground">
              Building innovative solutions through code
            </p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://github.com/Aksharaa-2" 
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aksharaa-s-7552b5364" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:aksharaa692005@gmail.com" 
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> by Aksharaa S
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
