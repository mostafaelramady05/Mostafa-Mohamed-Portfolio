import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background relative border-t border-border/30 pt-12 pb-6 mt-10">
      {/* إضاءة خفيفة جداً في النص */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-10 bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* الجزء الأول: اللوجو/الاسم والوصف المختصر */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold tracking-wide">
              <span className="text-foreground">Mostafa</span> <span className="gradient-text">Elramady</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              Bridging Finance & Data Analytics
            </p>
          </div>

          {/* الجزء الثاني: أيقونات السوشيال ميديا (ستايل زجاجي) */}
          <div className="flex gap-4">
            <a 
              href="mailto:mostafaelramady516@gmail.com" 
              className="w-11 h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              title="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/mostafa-mohamed-2749b42a4" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/mostafaelramady05" 
              target="_blank" 
              rel="noreferrer" 
              className="w-11 h-11 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* الجزء السفلي: حقوق الملكية وحالة العمل */}
        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Mostafa Elramady. All rights reserved.
          </p>
          
          {/* مؤشر العمل (Available for work) بشكل بسيط وروش */}
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-foreground/80">Available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
