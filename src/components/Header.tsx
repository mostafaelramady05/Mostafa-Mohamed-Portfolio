import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    // خلينا الـ threshold قليل عشان الحركة تبان بسرعة أول ما ينزل
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("darkMode", String(next));
  };

  // شيلنا Contact من هنا عشان هنعملها زرار منفصل زي الفيديو بالظبط
  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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
      {/* 
        الكونتينر ده وظيفته يوسط الهيدر في الشاشة طول الوقت، 
        ويخلي الهيدر ياخد مساحته على قد المحتوى بس (Fit Content)
      */}
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none px-4">
        <motion.header
          layout
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="pointer-events-auto bg-card/60 backdrop-blur-xl border border-border/50 shadow-2xl rounded-full flex items-center p-1.5 gap-2 md:gap-4"
        >
          {/* Logo Section */}
          <motion.div layout className="pl-3 md:pl-4 flex items-center">
            <Link to="/" className="text-xl font-bold font-mono tracking-tighter">
              <span className="gradient-text">M.M.E</span>
            </Link>
          </motion.div>

          {/* Navigation Links - بتختفي بـ أنيميشن لما ننزل لتحت (زي الفيديو) */}
          <AnimatePresence mode="popLayout">
            {!isScrolled && (
              <motion.nav
                layout
                initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center space-x-1 px-2"
              >
                {mainNavLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => handleNav(e, link.href)}
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>

          {/* Right Actions Section */}
          <motion.div layout className="flex items-center gap-2 pr-1">
            {/* Dark Mode Toggle */}
            <motion.button 
              layout
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-background/50 text-muted-foreground transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            {/* CTA Button - ثابت مش بيختفي */}
            <motion.button
              layout
              onClick={(e) => handleNav(e, "/#contact")}
              className="bg-primary text-primary-foreground px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20"
            >
              <span className="hidden sm:inline">Let's Talk</span>
              <span className="sm:hidden">Contact</span>
              <Send className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button 
              layout
              className="md:hidden p-2 rounded-full hover:bg-background/50 text-foreground transition-colors" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </motion.button>
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-4 right-4 z-40 bg-card/95 backdrop-blur-2xl border border-border/50 rounded-3xl p-4 shadow-2xl md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {mainNavLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNav(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-2xl transition-colors"
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
