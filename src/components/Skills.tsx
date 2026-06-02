import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  SiPython,
  SiPostgresql,
  SiMysql,
  SiApachespark,
  SiDatabricks,
  SiSnowflake,
  SiGooglebigquery,
  SiPandas,
  SiNumpy,
  SiSelenium,
  SiR,
  SiNotion,
  SiMetabase,
  SiN8N,
  SiApacheairflow,
  SiDocker,
  SiPlotly,
  SiStreamlit,
  SiApachekafka,
} from "react-icons/si";
import { FileSpreadsheet, Code2, FlaskConical, LayoutDashboard, Database, BarChart2, Cloud } from "lucide-react";
import type { ComponentType } from "react";

type Skill = { name: string; Icon: ComponentType<{ className?: string }> };

const skillCategories: { name: string; Icon: ComponentType<{ className?: string }>; skills: Skill[] }[] = [
  {
    name: "BI & Visualization",
    Icon: BarChart2,
    skills: [
      { name: "Power BI", Icon: BarChart2 },
      { name: "Plotly", Icon: SiPlotly },
      { name: "Streamlit", Icon: SiStreamlit },
      { name: "Metabase", Icon: SiMetabase },
      { name: "Excel Charts", Icon: FileSpreadsheet },
    ],
  },
  {
    name: "Data Engineering & ETL",
    Icon: Database,
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql },
      { name: "Apache Spark", Icon: SiApachespark },
      { name: "Apache Kafka", Icon: SiApachekafka },
      { name: "Airflow", Icon: SiApacheairflow },
      { name: "n8n", Icon: SiN8N },
      { name: "Docker", Icon: SiDocker },
    ],
  },
  {
    name: "Cloud & Modern Data Stack",
    Icon: Cloud,
    skills: [
      { name: "Databricks", Icon: SiDatabricks },
      { name: "Snowflake", Icon: SiSnowflake },
      { name: "BigQuery", Icon: SiGooglebigquery },
    ],
  },
  {
    name: "Programming & Querying",
    Icon: Code2,
    skills: [
      { name: "Python", Icon: SiPython },
      { name: "Pandas", Icon: SiPandas },
      { name: "NumPy", Icon: SiNumpy },
      { name: "Selenium", Icon: SiSelenium },
      { name: "R", Icon: SiR },
    ],
  },
  {
    name: "Spreadsheet Skills",
    Icon: FileSpreadsheet,
    skills: [
      { name: "Excel", Icon: FileSpreadsheet },
      { name: "Power Query", Icon: FileSpreadsheet },
      { name: "Pivot Tables", Icon: FileSpreadsheet },
      { name: "Macros / VBA", Icon: Code2 },
    ],
  },
  {
    name: "Methodologies",
    Icon: FlaskConical,
    skills: [
      { name: "A/B Testing", Icon: FlaskConical },
      { name: "Statistical Modeling", Icon: FlaskConical },
      { name: "OLS Regression", Icon: FlaskConical },
      { name: "Hypothesis Testing", Icon: FlaskConical },
      { name: "Agile", Icon: FlaskConical },
    ],
  },
  {
    name: "Workflow & Tools",
    Icon: LayoutDashboard,
    skills: [
      { name: "Notion", Icon: SiNotion },
      { name: "KPI Tracking", Icon: LayoutDashboard },
      { name: "Data Storytelling", Icon: LayoutDashboard },
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
          <span className="gradient-text">Technical Skills</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">Tools and technologies powering the work</p>

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
