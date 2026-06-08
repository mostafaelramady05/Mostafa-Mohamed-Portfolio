import { motion } from "framer-motion";
import { BarChart3, Eye, Database, FileSpreadsheet, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background bg-grid-pattern pt-24 pb-16 relative overflow-hidden">
      {/* Ambient glow orbs - تم تحسين الألوان لتكون أهدى وأفخم */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* ========================================================================= */}
          {/* الجانب الأيمن: الصورة والتشكيل الزجاجي الديناميكي (المطور) */}
          {/* ========================================================================= */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out
          >
            {/* التشكيل الزجاجي الخلفي المجرد الدوار ببطء (blob mechanism) */}
            <motion.div 
              className="absolute inset-0 bg-card/20 backdrop-blur-2xl border border-border/30 rounded-[4rem] shadow-inner-glow"
              animate={{
                borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 50% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* حاوية الصورة الشخصية بستايل الـ Container */}
            <div className="relative z-10 w-72 h-80 md:w-85 md:h-[28rem] p-3">
              <div className="w-full h-full overflow-hidden rounded-[3rem] border-2 border-background shadow-2xl relative bg-muted">
                <img
                  src="/Mostafa-hero.png" 
                  alt="Mostafa Mohamed Elramady"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* طبقة ظل ناعمة أسفل الصورة لإعطاء عمق */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* الأيقونات العائمة المودرن جوه "كبسولات زجاجية" لتناسق الستايل */}
              
              {/* Power BI Icon */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-card/60 backdrop-blur-lg border border-border/50 p-4 rounded-2xl shadow-xl neon-glow-sm flex items-center justify-center text-yellow-500"
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <BarChart3 className="w-7 h-7" />
              </motion.div>

              {/* Python Icon */}
              <motion.div 
                className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-card/60 backdrop-blur-lg border border-border/50 p-4 rounded-2xl shadow-xl neon-glow-sm flex items-center justify-center text-blue-500"
                animate={{ y: [0, 18, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Code2 className="w-7 h-7" />
              </motion.div>

              {/* SQL Icon */}
              <motion.div 
                className="absolute -bottom-6 right-12 bg-card/60 backdrop-blur-lg border border-border/50 p-4 rounded-2xl shadow-xl neon-glow-sm flex items-center justify-center text-blue-400"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Database className="w-7 h-7" />
              </motion.div>

              {/* Excel Icon */}
              <motion.div 
                className="absolute bottom-16 -left-8 bg-card/60 backdrop-blur-lg border border-border/50 p-4 rounded-2xl shadow-xl neon-glow-sm flex items-center justify-center text-green-600"
                animate={{ y: [0, 12, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FileSpreadsheet className="w-7 h-7" />
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* الجانب الأيسر: النص والأزرار (معدل ومطور) */}
          {/* ========================================================================= */}
          <div className="w-full md:w-1/2 text-center md:text-left md:order-1 relative">
            
            {/* طبقة زجاجية ناعمة خلف النص لتحسين القراءة وفخامة الشكل */}
            <div className="absolute -inset-8 bg-background/40 backdrop-blur-sm rounded-3xl -z-10 md:block hidden" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* المسمى الوظيفي بستايل الـ Pill */}
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20 mb-5 tracking-wide">
                Data Analyst & Accountant
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading- tight tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* التعديل المطلوب: مصطفى محمد ثم العيلة */}
              <span className="block text-foreground mb-1">Mostafa Mohamed</span>
              <span className="gradient-text pb-2 block">Elramady</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed font-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* النبذة المختصرة - تم تحسين الخط والحجم قليلاً */}
              I combine deep financial understanding with advanced data manipulation skills. Proficient in Power BI, SQL, Python, and Excel to turn complex data into actionable, decision-ready insights. Based in El-Mahalla El-Kubra, Egypt, with practical experience analyzing data for businesses in both the Egyptian and Saudi Arabian markets.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-lg shadow-primary/20 group" asChild>
                <a href="#projects">
                  <BarChart3 className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Dashboards
                </a>
              </Button>
              
              {/* زرار عرض السيرة الذاتية بستايل الـ Outline الـ Glassy */}
              <Button size="lg" variant="outline" className="border-border bg-card/20 backdrop-blur-lg text-foreground hover:bg-card/50 rounded-full px-8 shadow-md group" asChild>
                <a href="https://drive.google.com/file/d/1Zi06Rc7nrwTXAgqySf6rZkHXPGKlMZru/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2.5 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
