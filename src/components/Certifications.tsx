import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const certGroups = [
  {
    category: "AI & LLMs",
    certs: ["Anthropic: AI Fluency", "Anthropic: Claude 101", "Anthropic: Claude Code in Action"],
  },
  {
    category: "Data Engineering",
    certs: ["Databricks: SQL Analytics & BI", "Udemy: Data Warehouse Fundamentals", "DataCamp: Data Engineer Associate"],
  },
  {
    category: "BI & Analytics",
    certs: ["DataCamp: Data Scientist Associate", "DataCamp: Data Analyst Associate", "DataCamp: Data Literacy", "edX: Verified Certificates"],
  },
  {
    category: "SQL & Databases",
    certs: ["HackerRank: SQL (Basic)", "HackerRank: SQL (Intermediate)", "HackerRank: SQL (Advanced)"],
  },
  {
    category: "Cloud & Platforms",
    certs: ["Google Cloud Skills Boost", "Microsoft Learn", "Cisco: Data Analytics Essentials", "LinkedIn Learning"],
  },
];

const allCerts = certGroups.flatMap((g) => g.certs);
// Duplicate for seamless loop
const marqueeItems = [...allCerts, ...allCerts];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Certifications & Credentials</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10">
          40+ certifications across AI, Data Engineering, BI & Analytics
        </p>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((cert, i) => (
            <span
              key={i}
              className="mx-3 inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground whitespace-nowrap"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Categorized grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certGroups.map((group, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-semibold text-sm text-primary font-mono mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.certs.map((cert, j) => (
                  <Badge key={j} variant="secondary" className="text-xs bg-muted">
                    {cert}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://drive.google.com/drive/folders/1ch0TNOhaczs76D_T1t2juD0HbasaoU2I?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              View All Certificates
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
