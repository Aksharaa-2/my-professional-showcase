import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, BookOpen, PenLine, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      icon: PenLine,
      title: "Blogging",
      description: "Writing about SEO, search technology, and modern web trends"
    }
  ];

  const blogs = [
    {
      title: "Neural Search VS Traditional Search Why Modern Seo Is No Longer Just About Keywords",
      url: "https://medium.com/@aksharaasathya/neural-search-vs-traditional-search-why-modern-seo-is-no-longer-just-about-keywords-190d0e6d33a1"
    },
    {
      title: "Seo Is Not Just Ranking Its Digital Trust",
      url: "https://modern-seo-talks.blogspot.com/2026/06/seo-is-not-just-ranking-its-digital.html"
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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6">My Blogs</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {blogs.map((blog) => (
              <Card key={blog.url} className="p-5 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card group">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-semibold group-hover:text-primary transition-colors leading-snug">
                    {blog.title}
                  </h4>
                  <Button size="icon" variant="secondary" asChild className="flex-shrink-0">
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">Read {blog.title}</span>
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
