import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
type Category = { name: string; Icon: ComponentType<{ className?: string }>; skills: Skill[] };

const allCategories: Category[] = [
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

// تجميع المهارات في 3 تابات رئيسية عشان الـ UI يكون أنظف
const tabGroups = {
  "Data Analytics": ["BI & Visualization", "Programming & Scraping", "Databases & SQL"],
  "Accounting & Spreadsheets": ["Accounting & Finance", "Spreadsheet & Data Prep"],
  "Other Tools": ["Design & Productivity"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof tabGroups>("Data Analytics");

  // الفلترة بناءً على التاب النشط
  const filteredCategories = allCategories.filter((cat) => 
    tabGroups[activeTab].includes(cat.name)
  );

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
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Bridging the gap between financial expertise and advanced data analytics
        </p>

        {/* ============================================================== */}
        {/* نظام التابات (Tabs Navigation) */}
        {/* ============================================================== */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(Object.keys(tabGroups) as Array<keyof typeof tabGroups>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                  : "bg-card text-muted-foreground border border-border hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ============================================================== */}
        {/* محتوى المهارات (مع أنيميشن عند التبديل) */}
        {/* ============================================================== */}
        <motion.div layout className="max-w-5xl mx-auto min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // الـ Key مهم جداً عشان الأنيميشن يشتغل لما يتغير
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center"
            >
              {filteredCategories.map((cat, i) => (
                <div
                  key={cat.name}
                  className="bg-card border border-border rounded-2xl p-6 neon-glow-hover h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shadow-sm">
                      <cat.Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {cat.skills.map((skill, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="bg-background/80 border-border text-foreground/80 text-xs px-3 py-1.5 flex items-center gap-1.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                      >
                        <skill.Icon className="h-3.5 w-3.5 opacity-90" />
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
