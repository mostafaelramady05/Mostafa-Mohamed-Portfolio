import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-10">
      <div className="container mx-auto px-4">
        {/* Terminal-style contact block */}
        <div className="max-w-2xl mx-auto bg-background border border-border rounded-xl p-6 font-mono text-sm mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-destructive" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-muted-foreground text-xs">contact.sh</span>
          </div>
          <div className="space-y-2 text-muted-foreground">
            <p><span className="text-primary">$</span> echo $LOCATION</p>
            <p className="text-foreground flex items-center gap-2"><MapPin className="h-3 w-3" /> El-Mahalla El-Kubra, Egypt</p>
            <p><span className="text-primary">$</span> echo $PHONE</p>
            <p className="text-foreground flex items-center gap-2"><Phone className="h-3 w-3" /> (+20) 122 829 3135</p>
            <p><span className="text-primary">$</span> echo $EMAIL</p>
            <p className="text-foreground flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <a href="mailto:mostafaelramady516@gmail.com" className="hover:text-primary transition-colors">mostafaelramady516@gmail.com</a>
            </p>
            <p className="text-primary">$ <span className="animate-blink">_</span></p>
          </div>
        </div>

        {/* Social & copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {year} Mostafa Elramady. All rights reserved.
          </p>
          <div className="flex space-x-5">
            <a href="https://github.com/mostafaelramady05" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/mostafa-mohamed-2749b42a4" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:mostafaelramady516@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
