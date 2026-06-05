import { motion } from "framer-motion";
import { BarChart3, Database, Calculator, FileSpreadsheet, Code, Wrench, SearchCode, FileText } from "lucide-react";

// مهاراتك الحقيقية بعد حذف Financial Modeling
const skillCategories = [
  {
    title: "BI & Visualization",
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "DAX", icon: Code },
      { name: "Power Query", icon: Database },
      { name: "Matplotlib", icon: BarChart3 },
    ],
  },
  {
    title: "Databases & Programming",
    icon: Database,
    skills: [
      { name: "SQL Server", icon: Database },
      { name: "Python", icon: Code },
      { name: "Web Scraping", icon: SearchCode },
      { name: "BeautifulSoup", icon: Code },
      { name: "Selenium", icon: SearchCode },
    ],
  },
  {
    title: "Accounting & Spreadsheets",
    icon: Calculator,
    skills: [
      { name: "Microsoft Excel", icon: FileSpreadsheet },
      { name: "Google Sheets", icon: FileSpreadsheet },
      { name: "ERP Systems", icon: Calculator },
    ],
  },
  {
    title: "Other Tools",
    icon: Wrench,
    skills: [
      { name: "Notion", icon: FileText },
      { name: "Canva", icon: Wrench },
      { name: "Git & GitHub", icon: Code },
    ],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* إضاءة خلفية خفيفة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical & Professional Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Bridging the gap between financial expertise and advanced data analytics
          </p>
        </motion.div>

        {/* عرض المهارات في شكل كروت شبكية (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col h-full"
            >
              {/* عنوان الكارت مع الأيقونة - مع تثبيت الارتفاع لضمان التناسق */}
              <div className="flex items-start gap-3 mb-6 min-h-[4rem]">
                <div className="bg-muted border border-border/50 p-2.5 rounded-xl shrink-0">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground pt-1">{category.title}</h3>
              </div>
              
              {/* المهارات على شكل أزرار صغيرة (Pills) مترتبة طبيعي تحت العنوان مباشرة */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border/60 rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                  </div>
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
