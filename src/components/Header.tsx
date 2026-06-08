import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // الدارك مود هو الأساس زي ما اتفقنا
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    const shouldBeDark = storedTheme === null ? true : storedTheme === "true";
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);

    if (storedTheme === null) {
      localStorage.setItem("darkMode", "true");
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("darkMode", String(next));
  };

  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" }, 
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/" || !href.includes("#")) {
      setIsMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    const el = document.querySelector(href.replace("/#", "#"));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* الكبسولة العائمة: 
        في الشاشات الكبيرة بتبقى عائمة وشكلها كبسولة، وفي الموبايل بتملا الشاشة من فوق عشان المساحة 
      */}
      <header className={cn(
        "fixed w-full md:w-[90%] md:max-w-5xl md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-500 ease-in-out md:rounded-full",
        isScrolled 
          ? "top-0 md:top-4 bg-background/80 backdrop-blur-xl md:border border-border/50 shadow-lg shadow-black/5 py-3" 
          : "top-0 md:top-6 bg-transparent md:bg-background/20 md:backdrop-blur-md md:border border-border/10 py-4"
      )}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-mono tracking-tight hover:scale-105 transition-transform duration-300">
            <span className="gradient-text">M.M.E</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {mainNavLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* فاصل صغير بين اللينكات وزرار الدارك مود */}
            <div className="w-[1px] h-6 bg-border mx-4"></div>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2 bg-background/50 px-3 py-1.5 rounded-full border border-border/50">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} className="data-[state=checked]:bg-primary scale-90" />
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-muted-foreground hover:bg-primary/10 rounded-full">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10 rounded-full" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu with Framer Motion for smooth opening */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] left-4 right-4 z-40 bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl p-4 shadow-xl md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {mainNavLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNav(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
