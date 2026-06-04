import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // بنخلي القيمة المبدئية true عشان الدارك مود هو الأساس
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    // لو دي أول زيارة للموقع، هيعتبر الدارك مود هو الأساس (true)
    const storedTheme = localStorage.getItem("darkMode");
    const shouldBeDark = storedTheme === null ? true : storedTheme === "true";
    
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);

    // بنحفظ الاختيار ده للمستخدم عشان يفضل دارك على طول
    if (storedTheme === null) {
      localStorage.setItem("darkMode", "true");
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 10);
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
    // { name: "Certifications", href: "/#certifications" }, 
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
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <Link to="/" className="text-xl font-bold font-mono">
          <span className="gradient-text">M.M.E</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleNav(e, link.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 ml-2">
            <Sun className="h-3.5 w-3.5 text-muted-foreground" />
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} className="data-[state=checked]:bg-primary" />
            <Moon className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
        </nav>

        <div className="flex items-center space-x-2 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="text-muted-foreground">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu />
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border py-4 md:hidden">
            <div className="flex flex-col space-y-3 px-4">
              {mainNavLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNav(e, link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
