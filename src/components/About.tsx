import { motion } from "framer-motion";
import { ChartBar, Code, Award, Target, Zap, BookOpen, Quote, GraduationCap } from "lucide-react";

// النقاط الاحترافية بتاعتك
const highlights = [
  { icon: ChartBar, text: "Created impactful Power BI dashboards that integrate general ledger data with visual analytics." },
  { icon: Code, text: "Leveraged Python and SQL Server to automate data cleaning and repetitive accounting tasks." },
  { icon: Target, text: "Specialized in financial data reconciliation and integrity within robust accounting information systems." },
  { icon: BookOpen, text: "Consistently bridging the gap between core accounting principles and advanced data analytics." },
  { icon: Award, text: "Ranking among the top students for consistent academic excellence in commerce." },
  { icon: Zap, text: "Practical exposure in analyzing diverse market dynamics for Egyptian and Saudi Arabian regions." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* إضاءات خلفية جمالية (Glassmorphism Vibe) */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Behind the Dashboards</span>
        </motion.h2>

        {/* Bento Box Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* المربع الأول: النبذة (ياخد مساحة عمودين) */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-card/20 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <h3 className="text-2xl font-bold mb-4 text-foreground">The Analyst & The Accountant</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              A dynamic Data Analyst with a solid foundation in Accounting, bridging the gap between financial complexities and actionable data insights. Specialized in utilizing Python, SQL Server, and Power BI to transform financial and operational data into interactive, decision-driving dashboards. Eager to apply practical exposure to market dynamics across both the Egyptian and Saudi Arabian regions in real-world scenarios.
            </p>
          </motion.div>

          {/* المربع الثاني: التعليم والأكاديمية */}
          <motion.div variants={itemVariants} className="bg-primary/5 border border-primary/20 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-primary/10 transition-colors duration-300 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h4 className="font-bold text-xl text-foreground mb-2">Tanta University</h4>
            <p className="text-sm text-muted-foreground mb-4">Faculty of Commerce</p>
            <div className="px-4 py-1.5 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold border border-border text-foreground">
              Honors Student
            </div>
          </motion.div>

          {/* المربع الثالث: الاقتباس */}
          <motion.div variants={itemVariants} className="bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-colors duration-300">
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            <p className="italic text-xl font-medium text-foreground/90 leading-snug relative z-10">
              "Data tells a story; Accounting adds the structure. Together, they create the <span className="text-primary font-bold">strategy</span>."
            </p>
          </motion.div>

          {/* المربع الرابع: الكفاءات والإنجازات (ياخد مساحة عمودين) */}
          <motion.div variants={itemVariants} className="md:col-span-2 bg-card/20 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
              <Target className="w-5 h-5 text-primary" /> 
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 bg-background rounded-lg p-1.5 border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                    <h.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                    {h.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
