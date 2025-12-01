import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users } from "lucide-react";

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Hackathons
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-glow">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                    Smart India Hackathon 2025
                  </h3>
                  <p className="text-xl text-primary/80 mb-3">Ministry of Education's Innovation Cell</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Date</div>
                      <div className="font-medium">2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Venue</div>
                      <div className="font-medium">Karunya Institute</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">About the Event</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Smart India Hackathon is the world's biggest open innovation model initiative by the Government of India.
                    Participated in solving real-world problems presented by various government ministries and organizations,
                    demonstrating innovative thinking and technical expertise in developing practical solutions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Team Collaboration
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    Innovation Challenge
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                    National Level
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Hackathons;
