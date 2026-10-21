import { motion } from "framer-motion";
import { BarChart3, Braces, Database, Workflow } from "lucide-react";

const skillCategories = [
  {title: "Dashboards & reporting", icon: BarChart3, description: "Turn business data into performance views and useful KPIs.", skills: ["Power BI", "DAX", "Data Modeling"]},
  {title: "Excel & data preparation", icon: Braces, description: "Clean, combine, and analyze data for repeatable reporting.", skills: ["Excel", "Power Query", "Power Pivot"]},
  {title: "Queries & transformations", icon: Database, description: "Tools in my data analysis toolkit.", skills: ["SQL", "dbt"]},
  {title: "Process improvement", icon: Workflow, description: "Speed up recurring accounting and data tasks.", skills: ["n8n", "ERP Systems", "Daftra", "APIs"]},
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-background scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <p className="text-sm font-semibold text-primary mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">The tools behind the work.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reporting, data preparation, and practical process improvement.
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
