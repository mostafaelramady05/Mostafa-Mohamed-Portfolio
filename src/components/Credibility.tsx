import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Clock, Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { icon: Users, value: "55K+", label: "LinkedIn Followers", desc: "Engaging with dashboards, career tips, and Python use cases" },
  { icon: TrendingUp, value: "200+", label: "Dashboard Users", desc: "Explored Wuzzuf Job Market Dashboard to identify hiring trends" },
  { icon: Clock, value: "40%", label: "Time Reduction", desc: "In reporting time through Python automation" },
  { icon: Star, value: "25%", label: "Speed Improvement", desc: "In SQL data retrieval performance" },
];

const testimonials = [
  { quote: "Sohila doesn't just build dashboards — she builds clarity.", author: "Freelance Client", role: "Operations Manager" },
  { quote: "She mixes technical expertise with storytelling. That's rare.", author: "Peer Data Analyst", role: "Senior BI Developer" },
];

const Credibility = () => {
  return (
    <section id="credibility" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Trusted by the Data Community</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">Measurable impact, community leadership, and proven results</p>

        {/* Recognition badge */}
        <motion.div
          className="max-w-xl mx-auto mb-12 bg-card border border-border rounded-xl p-6 neon-glow text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Award className="h-8 w-8 text-primary mx-auto mb-3" />
          <Badge className="bg-primary text-primary-foreground mb-2">Top 3 Data Science Creator</Badge>
          <p className="text-sm text-muted-foreground">
            Egypt — Favikon (2026). Recognized for leading a 55K+ follower community focused on impactful Power BI and analytics content.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 text-center neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <m.icon className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground font-mono">{m.value}</p>
              <p className="text-sm font-medium text-foreground mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-6 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Quote className="h-5 w-5 text-primary mb-3" />
              <blockquote className="text-foreground italic mb-3">"{t.quote}"</blockquote>
              <div className="text-sm">
                <p className="font-medium text-foreground">{t.author}</p>
                <p className="text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badges */}
        <div className="text-center mt-10">
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">6+ Hours Weekly Saved</Badge>
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">40% Faster Reporting</Badge>
            <Badge variant="outline" className="px-3 py-1 font-mono text-xs">55K+ Community</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credibility;
