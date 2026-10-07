import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-7">
          <div>
            <h3 className="text-xl font-bold tracking-tight">Mostafa Elramady</h3>
            <p className="text-sm text-muted-foreground mt-1">Data analysis, business intelligence, and practical automation.</p>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:mostafaelramady516@gmail.com" aria-label="Email Mostafa" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="https://linkedin.com/in/mostafa-mohamed-2749b42a4" target="_blank" rel="noreferrer" aria-label="Mostafa on LinkedIn" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com/mostafaelramady05" target="_blank" rel="noreferrer" aria-label="Mostafa on GitHub" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mostafa Elramady. All rights reserved.</p>
          <p>Early-career, business-focused, and building with evidence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
