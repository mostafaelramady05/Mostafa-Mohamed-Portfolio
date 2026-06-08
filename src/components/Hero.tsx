import { motion } from "framer-motion";
import { BarChart3, Eye, Database, FileSpreadsheet, Code2, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background bg-grid-pattern pt-20 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* ========================================================================= */}
        {/* الجزء الخاص بالصورة والأيقونات العائمة (المودرن ستايل) */}
        {/* ========================================================================= */}
        <motion.div
          className="w-full md:w-5/12 flex justify-center md:order-2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* خلفية الجرادينت ورا الصورة */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/10 rounded-[3rem] blur-2xl opacity-70 transform rotate-6" />
          
          <div className="relative w-72 h-80 md:w-80 md:h-[26rem] rounded-[2rem] border border-border bg-card/30 backdrop-blur-sm p-4 neon-glow">
            {/* الصورة الشخصية */}
            <div className="w-full h-full overflow-hidden rounded-xl bg-muted relative">
              <img
                src="/Mostafa-hero.png"
                alt="Mostafa Mohamed Elramady"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* الأيقونات العائمة المودرن */}
            {/* Power BI Icon */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-background border border-border p-3 rounded-xl neon-glow flex items-center justify-center text-yellow-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <BarChart3 className="w-6 h-6" />
            </motion.div>

            {/* Python Icon */}
            <motion.div 
              className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-background border border-border p-3 rounded-xl neon-glow flex items-center justify-center text-blue-500"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Code2 className="w-6 h-6" />
            </motion.div>

            {/* SQL Icon */}
            <motion.div 
              className="absolute -bottom-4 right-8 bg-background border border-border p-3 rounded-xl neon-glow flex items-center justify-center text-blue-400"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <Database className="w-6 h-6" />
            </motion.div>

            {/* Excel Icon */}
            <motion.div 
              className="absolute bottom-12 -left-4 bg-background border border-border p-3 rounded-xl neon-glow flex items-center justify-center text-green-600"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <FileSpreadsheet className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* Text Section (لم يتغير) */}
        {/* ========================================================================= */}
        <div className="w-full md:w-7/12 text-center md:text-left md:order-1 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* المسمى الوظيفي */}
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Data Analyst & Accountant
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* الاسم بعد التعديل */}
            <span className="block text-foreground">Mostafa Mohamed</span>
            <span className="gradient-text">Elramady</span>
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* النبذة المختصرة */}
            I combine deep financial understanding with advanced data manipulation skills. Proficient in Power BI, SQL, Python, and Excel to turn complex data into actionable, decision-ready insights. Based in El-Mahalla El-Kubra, Egypt, with practical experience analyzing data for businesses in both the Egyptian and Saudi Arabian markets.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
              <a href="#projects">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Dashboards
              </a>
            </Button>
            
            {/* زرار عرض السيرة الذاتية من جوجل درايف */}
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10" asChild>
              <a href="https://drive.google.com/file/d/1Zi06Rc7nrwTXAgqySf6rZkHXPGKlMZru/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View CV
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
