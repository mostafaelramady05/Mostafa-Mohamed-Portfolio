import { motion } from "framer-motion";
import { Users, BookOpen, Layout, MessageCircle, ExternalLink } from "lucide-react";

const timeline = [
  {
    icon: Users,
    role: "Data Analysis Mentor",
    org: "TechZone",
    details: [
      "Guided learners through SQL, Power BI, and Python projects",
      "Mentored 50+ learners through TZ4 SQL Initiative",
      "Conducted live PostgreSQL workshops",
    ],
  },
  {
    icon: MessageCircle,
    role: "Founder",
    org: "The Data Tea",
    details: [
      "Founded a pro-bono educational network bridging the knowledge gap for entry-level professionals",
      "Grew the network to 1,000+ subscribers",
    ],
    links: [
      { label: "Telegram", url: "https://t.me/thedatatea" },
      { label: "WhatsApp", url: "#" },
    ],
  },
  {
    icon: Layout,
    role: "Notion Creator",
    org: "Notion Egypt Community",
    details: [
      "Delivered hands-on workshops integrating Notion with data workflows and project management",
    ],
  },
];

const Community = () => {
  return (
    <section id="community" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Community & Volunteering</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">Building bridges in the data community</p>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                {/* Icon dot */}
                <div className="absolute left-2 top-1 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>

                <div className="bg-card border border-border rounded-xl p-5 neon-glow-hover transition-all duration-300">
                  <h3 className="font-semibold text-foreground">
                    {item.role}{" "}
                    <span className="text-primary font-mono text-sm">@ {item.org}</span>
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {item.details.map((d, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[8px]">●</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  {item.links && (
                    <div className="flex gap-3 mt-3">
                      {item.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-mono"
                        >
                          {link.label} <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
