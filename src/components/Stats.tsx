import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Award, Users, UserCheck } from "lucide-react";

const kpis = [
  { icon: Award, value: 40, suffix: "+", label: "Technical Certifications" },
  { icon: Users, value: 1000, suffix: "+", label: "Community Members Mentored" },
  { icon: UserCheck, value: 60, suffix: "K+", label: "LinkedIn Followers" },
];

const Stats = () => {
  return (
    <section className="py-8 relative z-10 -mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-card border border-border rounded-xl p-6 text-center neon-glow-hover transition-all duration-300">
                <kpi.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground font-mono">
                  <CountUp end={kpi.value} duration={2.5} suffix={kpi.suffix} separator="," />
                </p>
                <p className="text-sm text-muted-foreground mt-1">{kpi.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
