import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      provider: "Cisco",
      certificates: [
        { name: "C Programming Essentials 1", year: "2024" },
        { name: "C Programming Essentials 2", year: "2024" }
      ],
      color: "from-blue-500 to-blue-600",
      link: "/certificates/cisco-c-essentials-1.jpeg"
    },
    {
      provider: "Infosys Springboard",
      certificates: [
        { name: "Data-Level Parallelism", year: "2025" },
        { name: "Introduction to Computer Architecture", year: "2025" },
        { name: "Instruction Parallelism", year: "2025" }
      ],
      color: "from-purple-500 to-purple-600",
      link: "#"
    },
    {
      provider: "Microsoft",
      certificates: [
        { name: "Microsoft Azure Fundamentals", year: "2025" },
        { name: "Microsoft Cloud Badge", year: "2025" }
      ],
      color: "from-cyan-500 to-cyan-600",
      link: "#"
    },
    {
      provider: "Snowflake",
      certificates: [
        { name: "Snowflake Certification", year: "2025" }
      ],
      color: "from-teal-500 to-teal-600",
      link: "#"
    },
    {
      provider: "Kaggle",
      certificates: [
        { name: "Introduction to Programming", year: "2025" }
      ],
      color: "from-blue-400 to-blue-500",
      link: "#"
    },
    {
      provider: "Simplilearn",
      certificates: [
        { name: "Professional Certificate", year: "2025" }
      ],
      color: "from-orange-500 to-orange-600",
      link: "#"
    },
    {
      provider: "IBM",
      certificates: [
        { name: "IBM Professional Certificate", year: "2025" }
      ],
      color: "from-indigo-500 to-indigo-600",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {cert.provider}
                    </h3>
                    <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary border-primary/20">
                      {cert.certificates.length} {cert.certificates.length === 1 ? 'Certificate' : 'Certificates'}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {cert.certificates.map((certificate) => (
                    <div key={certificate.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <span className="text-sm font-medium">{certificate.name}</span>
                      <span className="text-xs text-muted-foreground">{certificate.year}</span>
                    </div>
                  ))}
                </div>

                <Button size="sm" variant="secondary" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificates
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
