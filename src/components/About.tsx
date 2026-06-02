import { motion } from "framer-motion";
import { ChartBar, Code, Award, Target, Zap, BookOpen } from "lucide-react";

// تم تعديل النقاط لتكون احترافية وبشكل شخصي لك كمحاسب ومحلل بيانات
const highlights = [
  { icon: ChartBar, text: "Created impactful Power BI dashboards that integrate general ledger data with visual analytics, driving financial insights and streamlining reporting." },
  { icon: Code, text: "Leveraged Python and SQL Server to automate data cleaning and repetitive accounting tasks, increasing efficiency by eliminating manual work." },
  { icon: Target, text: "Specialized in financial data reconciliation and integrity within robust accounting information systems, ensuring accurate and reliable financial data." },
  { icon: BookOpen, text: "Consistently bridging the gap between core accounting principles and advanced data analytics to provide strategic financial analysis." },
  { icon: Award, text: "Honors student at Tanta University, Faculty of Commerce, ranking among the top students for consistent academic excellence in commerce." },
  { icon: Zap, text: "Practical exposure in analyzing diverse market dynamics and financial statements for clients in both the Egyptian and Saudi Arabian regions." },
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {/* النبذة الاحترافية الجديدة */}
          A dynamic Data Analyst with a solid foundation in Accounting, bridging the gap between financial complexities and actionable data insights. Currently a student at Tanta University, Faculty of Commerce. Specialized in utilizing Python, SQL Server, and Power BI to transform financial and operational data into interactive, decision-driving dashboards. Eager to apply practical exposure to market dynamics across both the Egyptian and Saudi Arabian regions in real-world scenarios.
        </motion.p>

        <motion.blockquote
          className="border-l-4 border-primary pl-4 italic text-foreground/80 my-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* الاقتباس الاحترافي الجديد */}
          "Data tells a story; Accounting adds the structure. Together, they create the strategy."
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-xl p-5 flex items-start gap-4 neon-glow-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-foreground text-sm">{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;