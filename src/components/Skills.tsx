import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiNotion,
  SiPlotly,
  SiStreamlit,
} from "react-icons/si";
import { 
  FileSpreadsheet, 
  Code2, 
  LayoutDashboard, 
  Database, 
  BarChart2, 
  Calculator, 
  Palette, 
  Briefcase, 
  LineChart 
} from "lucide-react";
import type { ComponentType } from "react";

type Skill = { name: string; Icon: ComponentType<{ className?: string }> };

const skillCategories: { name: string; Icon: ComponentType<{ className?: string }>; skills: Skill[] }[] = [
  {
    name: "BI & Visualization",
    Icon: BarChart2,
    skills: [
      { name: "Power BI", Icon: BarChart2 },
      { name: "DAX", Icon: Code2 },
      { name: "Plotly", Icon: SiPlotly },
      { name: "Streamlit", Icon: SiStreamlit },
    ],
  },
  {
    name: "Programming & Scraping",
    Icon: Code2,
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "Pandas", Icon: SiPandas },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Selenium", Icon: SiSelenium },
    ],
  },
  {
    name: "Databases & SQL",
    Icon: Database,
    skills: [
      { name: "SQL Server", Icon: Database },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
    ],
  },
  {
    name: "Spreadsheet & Data Prep",
    Icon: FileSpreadsheet,
    skills: [
      { name: "Advanced Excel", Icon: FileSpreadsheet },
      { name: "Power Query", Icon: Database },
      { name: "Pivot Tables", Icon: LayoutDashboard },
    ],
  },
  {
    name: "Accounting & Finance",
    Icon: Calculator,
    skills: [
      { name: "Financial Reporting", Icon: Briefcase },
      { name: "Ledger Analysis", Icon: Calculator },
      { name: "Daftra ERP", Icon: Calculator },
    ],
  },
  {
    name: "Design & Productivity",
    Icon: Palette,
    skills: [
      { name: "Canva", Icon: Palette },
      { name: "Notion", Icon: SiNotion },
      { name: "KPI Tracking", Icon: LineChart },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Technical & Professional Skills</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">Bridging the gap between financial expertise and advanced data analytics</p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-card border border-border rounded-2xl p-6 neon-glow-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/25 to-accent/15 flex items-center justify-center">
                  <cat.Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <Badge
                    key={j}
                    variant="outline"
                    className="bg-background/60 border-border text-foreground/80 text-xs px-2.5 py-1.5 flex items-center gap-1.5 hover:bg-primary/10 hover:text-accent transition-colors"
                  >
                    <skill.Icon className="h-3.5 w-3.5 opacity-80" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;