import { motion } from "framer-motion";
import { BarChart3, Eye, Database, FileSpreadsheet, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background pt-24 pb-16 relative overflow-hidden">
      {/* إضاءة خلفية هادية جداً وغير مزعجة */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* ========================================================================= */}
          {/* الجانب الأيسر: النص (هادي، واضح، حاد) */}
          {/* ========================================================================= */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-medium bg-muted text-muted-foreground border border-border mb-6">
                Data Analyst & Accountant
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block text-foreground mb-2">Mostafa Mohamed</span>
              <span className="gradient-text block">Elramady</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I combine deep financial understanding with advanced data manipulation skills. Proficient in Power BI, SQL, Python, and Excel to turn complex data into actionable, decision-ready insights. Based in El-Mahalla El-Kubra, Egypt, with practical experience analyzing data for businesses in both the Egyptian and Saudi Arabian markets.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-medium rounded-lg px-8" asChild>
                <a href="#projects">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Dashboards
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-border hover:bg-muted rounded-lg px-8" asChild>
                <a href="https://drive.google.com/file/d/1Zi06Rc7nrwTXAgqySf6rZkHXPGKlMZru/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2 h-4 w-4" />
                  View CV
                </a>
              </Button>
            </motion.div>

            {/* صف المهارات التقنية (Tech Stack) المرصوص بشكل احترافي بدل الطيران */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-6 text-muted-foreground opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 hover:text-yellow-500 transition-colors"><BarChart3 className="w-5 h-5" /> <span className="text-xs font-mono hidden sm:block">Power BI</span></div>
              <div className="flex items-center gap-2 hover:text-blue-500 transition-colors"><Code2 className="w-5 h-5" /> <span className="text-xs font-mono hidden sm:block">Python</span></div>
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors"><Database className="w-5 h-5" /> <span className="text-xs font-mono hidden sm:block">SQL</span></div>
              <div className="flex items-center gap-2 hover:text-green-600 transition-colors"><FileSpreadsheet className="w-5 h-5" /> <span className="text-xs font-mono hidden sm:block">Excel</span></div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* الجانب الأيمن: الصورة (نظيفة، حادة، وبدون دوشة) */}
          {/* ========================================================================= */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              {/* إطار خلفي خفيف بيدي عمق رسمي */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-border/50 bg-muted/20" />
              
              {/* حاوية الصورة الأساسية */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
                <img
                  src="/Mostafa-hero.png" 
                  alt="Mostafa Mohamed Elramady"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
