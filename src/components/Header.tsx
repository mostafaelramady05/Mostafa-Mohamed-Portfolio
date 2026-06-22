import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 1. جعل القيمة الابتدائية false (يعني Light Mode هو الافتراضي)
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    
    // 2. لو العميل أول مرة يدخل (null)، الافتراضي هيكون false (Light)
    const shouldBeDark = storedTheme === null ? false : storedTheme === "true";
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);

    // 3. لو أول مرة يدخل، بنسيف في الـ localStorage إنه لايت (false)
    if (storedTheme === null) {
      localStorage.setItem("darkMode", "false");
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
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <motion.header
          layout
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} 
          className={cn(
            "pointer-events-auto flex items-center h-14 transition-colors duration-500 overflow-hidden",
            isScrolled
              ? "bg-card/85 backdrop-blur-xl border border-border/50 shadow-xl rounded-full px-3 gap-6"
              : "w-full max-w-7xl bg-transparent border-transparent px-0 gap-0"
          )}
        >
          
          {/* الجانب الأيسر (اللوجو) */}
          <motion.div 
            layout 
            className={cn(
              "flex items-center pl-2", 
              !isScrolled && "flex-1" // بياخد مساحة عشان يزق النص في مكانه
            )}
          >
            <Link to="/" className="text-xl font-bold font-mono tracking-tighter shrink-0">
              <span className="gradient-text">M.M.E</span>
            </Link>
          </motion.div>

          {/* المنتصف (اللينكات) */}
          <motion.nav 
            layout 
            className="hidden md:flex flex-none items-center justify-center gap-1 px-4"
          >
            {mainNavLinks.map((link) => (
              <a
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNav(e, link.href)}
                className="px-4 py-2 text-sm font-medium rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors shrink-0"
              >
                {link.name}
              </a>
            ))}
          </motion.nav>

          {/* الجانب الأيمن (الزراير) */}
          <motion.div 
            layout 
            className={cn(
              "flex items-center gap-2 pr-1 justify-end", 
              !isScrolled && "flex-1"
            )}
          >
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-background/50 hover:bg-background/80 text-foreground transition-colors border border-border/50 shrink-0" 
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* زرار Let's Talk */}
            <button
              onClick={(e) => handleNav(e, "/#contact")}
              className="bg-foreground text-background px-4 md:px-5 py-2 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-transform active:scale-95 flex items-center gap-2 shadow-md shrink-0 whitespace-nowrap"
            >
              <span className="hidden sm:inline whitespace-nowrap">Let's Talk</span>
              <span className="sm:hidden whitespace-nowrap">Contact</span>
            </button>

            {/* زرار القائمة للموبايل */}
            <button 
              className="md:hidden p-2 rounded-full bg-background/50 text-foreground transition-colors border border-border/50 shrink-0" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
            </button>
          </motion.div>

        </motion.header>
      </div>

      {/* المنيو الخاصة بالموبايل */}
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