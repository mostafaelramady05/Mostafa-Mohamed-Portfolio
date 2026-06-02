import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background bg-grid-pattern pt-20 relative overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image */}
        <motion.div
          className="w-full md:w-5/12 flex justify-center md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/10 rounded-full blur-3xl opacity-70" />
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle at center, black 60%, transparent 100%)",
              }}
            >
              {/* مسار صورتك الشخصية */}
              <img
                src="/Mostafa-hero.png"
                alt="Mostafa Elramady"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="w-full md:w-7/12 text-center md:text-left md:order-1">
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
            {/* الاسم */}
            <span className="block text-foreground">Mostafa</span>
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