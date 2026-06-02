import { motion } from "framer-motion";
import { ChartBar, Code, Award, Users, Zap, Database } from "lucide-react";

const highlights = [
  { icon: ChartBar, text: "Architected 10+ interactive Power BI dashboards using star-schema modeling, reducing time-to-insight from days to minutes" },
  { icon: Code, text: "Reduced manual reporting overhead by 40% for 5+ clients via automated ETL pipelines using Python and SQL" },
  { icon: Award, text: "Top 3 Data Science Creator in Egypt (Favikon, 2026) & Top 200 Arabic-Speaking Influencer" },
  { icon: Users, text: "55,000+ LinkedIn followers reached via original dashboard insights and data education content" },
  { icon: Database, text: "Optimized query performance by 25% through refactored SQL scripts and indexing strategies for large-scale datasets" },
  { icon: Zap, text: "Increased project success rates by 35% for 50+ professionals through structured mentoring frameworks" },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          BI Developer specializing in end-to-end data modeling and automated ETL pipelines.
          Expert in SQL, Python, and Power BI with a focus on transforming fragmented datasets
          into scalable, decision-ready architectures. Recognized Technical Mentor for 50+
          professionals and Top 200 Arabic-speaking influencer in data literacy.
        </motion.p>

        <motion.blockquote
          className="border-l-4 border-primary pl-4 italic text-foreground/80 my-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          "Dashboards aren't just visuals — they're decisions waiting to happen."
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground text-sm">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
