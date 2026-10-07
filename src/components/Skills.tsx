import { motion } from "framer-motion";
import { BarChart3, Braces, Database, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Data Analysis & BI",
    icon: BarChart3,
    level: "Strongest today",
    description: "The tools I use most confidently for business reporting and analysis.",
    skills: ["Excel", "Power BI", "Power Query", "DAX"],
  },
  {
    title: "Automation & Data Workflows",
    icon: Workflow,
    level: "Practical + developing",
    description: "Hands-on workflow building, with depth still growing through real use cases.",
    skills: ["n8n", "APIs", "OCR / AI-assisted extraction", "Web / data extraction", "ERP / data workflows"],
  },
  {
    title: "SQL & Data Systems",
    icon: Database,
    level: "Working knowledge",
    description: "Comfortable with day-to-day querying and actively improving database depth.",
    skills: ["SQL", "SQL databases", "Data preparation", "Relational data concepts"],
  },
  {
    title: "Programming & Technical Tools",
    icon: Braces,
    level: "Developing",
    description: "Useful implementation skills—not presented as senior software-engineering expertise.",
    skills: ["Python", "BeautifulSoup", "Selenium", "Git / GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-background scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills, grouped by what I can do with them.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No percentage bars and no giant logo wall. The emphasis is on current working strength, with developing skills labeled as developing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground text-right">
                  {category.level}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-muted/[0.35] px-3 py-2 text-sm font-medium text-foreground/[0.85]">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
