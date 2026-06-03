import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

// بيانات شهاداتك الحقيقية
const certGroups = [
  {
    category: "Finance & Accounting",
    certs: ["FMVA Certification Program", "B.Com - Tanta University", "Financial Reporting"],
  },
  {
    category: "Data Analytics & BI",
    certs: ["Power BI Educational Sessions", "Advanced Excel Data Prep", "Data Visualization"],
  },
  {
    category: "SQL & Problem Solving",
    certs: ["HackerRank: SQL", "SQL Server Fundamentals", "LeetCode Problem Solving"],
  },
  {
    category: "Professional Development",
    certs: ["ALX Freelancer Academy", "Freelance Market Readiness"],
  },
];

const allCerts = certGroups.flatMap((g) => g.certs);
// Duplicate for seamless loop
const marqueeItems = [...allCerts, ...allCerts];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background relative overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Education & Certifications</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Continuous learning in finance, data analytics, and professional development.
        </p>
      </div>

      {/* Infinite scrolling marquee (Glass style) */}
      <div className="relative mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {marqueeItems.map((cert, i) => (
            <span
              key={i}
              className="mx-3 inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-card/40 backdrop-blur-sm border border-border/50 text-foreground whitespace-nowrap shadow-sm"
            >
              <Award className="w-4 h-4 mr-2 text-primary" />
              {cert}
            </span>
          ))}
        </div>
      </div>

      {/* Categorized grid (Glassmorphism Cards) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certGroups.map((group, i) => (
            <motion.div
              key={i}
              className="bg-card/20 backdrop-blur-xl border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="font-semibold text-lg text-foreground flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.certs.map((cert, j) => (
                  <Badge 
                    key={j} 
                    variant="secondary" 
                    className="text-sm px-3 py-1.5 bg-muted/50 border border-transparent hover:border-border transition-colors font-normal text-foreground/90"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* زرار عرض كل الشهادات (لو عندك فولدر درايف للشهادات حط اللينك بتاعه) */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="outline" size="lg" className="border-border/50 bg-card/30 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-xl h-12 px-8" asChild>
            <a
              href="https://drive.google.com/drive/folders/1ch0TNOhaczs76D_T1t2juD0HbasaoU2I?usp=sharing" // غير اللينك ده للينك الدرايف بتاعك لو حابب
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-medium"
            >
              View Full Credentials Folder
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
