import { Github, Linkedin, Mail, ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-background pt-20 pb-8 border-t border-border/50 overflow-hidden">
      {/* إضاءة خلفية خفيفة جداً تليق بالستايل الفخم */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-16 max-w-7xl mx-auto">
          
          {/* العمود الأول: البراند والنبذة */}
          <div className="md:col-span-5 lg:col-span-5">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-foreground">Mostafa</span> <span className="gradient-text">Elramady</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-sm">
              Bridging the gap between financial expertise and advanced data analytics. Turning complex datasets into actionable, decision-ready business strategies.
            </p>
            {/* بادج "متاح للعمل" - حركة احترافية وبتلفت الانتباه */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Available for new opportunities
            </div>
          </div>

          {/* العمود الثاني: الروابط السريعة */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-semibold text-foreground mb-6 text-lg">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="#hero" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group w-fit">
                  Home 
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group w-fit">
                  Skills 
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group w-fit">
                  Projects 
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group w-fit">
                  Certifications 
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: معلومات التواصل */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-semibold text-foreground mb-6 text-lg">Get in Touch</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3.5 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:mostafaelramady516@gmail.com" className="text-sm font-medium">mostafaelramady516@gmail.com</a>
              </li>
              <li className="flex items-center gap-3.5 text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">(+20) 122 829 3135</span>
              </li>
              <li className="flex items-center gap-3.5 text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">El-Mahalla El-Kubra, Egypt</span>
              </li>
            </ul>
            
            {/* أزرار السوشيال ميديا */}
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-xl w-12 h-12 bg-card/30 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" asChild>
                <a href="https://linkedin.com/in/mostafa-mohamed-2749b42a4" target="_blank" rel="noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl w-12 h-12 bg-card/30 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20" asChild>
                <a href="https://github.com/mostafaelramady05" target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* الشريط السفلي لحقوق الملكية */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground text-center md:text-left font-medium">
            © {new Date().getFullYear()} Mostafa Elramady. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
            Data Analyst & Financial Expert <span className="text-primary animate-pulse ml-1">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
