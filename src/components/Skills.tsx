import { motion } from "framer-motion";
import { BarChart3, Database, Calculator, Wrench } from "lucide-react";

// جمعنا كل المهارات في قائمة واحدة عشان يتعرضوا تحت بعض
const skillCategories = [
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: ["Power BI", "DAX", "Power Query", "Plotly", "Streamlit"],
  },
  {
    title: "Programming, Scraping & Databases",
    icon: Database,
    skills: ["Python", "Pandas", "NumPy", "Selenium", "SQL Server", "PostgreSQL", "MySQL"],
  },
  {
    title: "Accounting & Spreadsheets",
    icon: Calculator,
    skills: ["Microsoft Excel", "Financial Modeling", "Data Reconciliation", "Accounting Information Systems"],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: ["Canva", "Git & GitHub", "Jupyter Notebook"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical & Professional Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bridging the gap between financial expertise and advanced data analytics
          </p>
        </motion.div>

        {/* عرض المهارات تحت بعضها (Stacked Layout) */}
        <div className="flex flex-col gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/20 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 shadow-sm group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-background border border-border p-3 rounded-2xl group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
