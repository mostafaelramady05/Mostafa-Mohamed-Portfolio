import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState, type MouseEvent } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    const shouldBeDark = storedTheme === "true";
    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
    if (storedTheme === null) localStorage.setItem("darkMode", "false");

    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("darkMode", String(next));
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Work", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNav = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) {
      setIsMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = href;
      return;
    }
    const target = document.querySelector(href.replace("/#", "#"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <motion.header
          layout
          transition={{ duration: 0.35 }}
          className={cn(
            "pointer-events-auto w-full max-w-7xl h-14 flex items-center justify-between rounded-2xl px-3 sm:px-4 transition-all duration-300",
            isScrolled
              ? "bg-card/90 backdrop-blur-xl border border-border shadow-lg shadow-black/[0.04]"
              : "bg-background/70 backdrop-blur-md border border-border/70"
          )}
        >
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tight" aria-label="Mostafa Elramady home">
            <span className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-extrabold">ME</span>
            <span className="hidden sm:inline">Mostafa Elramady</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="/#contact"
              onClick={(e) => handleNav(e, "/#contact")}
              className="hidden sm:inline-flex h-9 items-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
            >
              Start a Project
            </a>
            <button
              className="md:hidden w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.header>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed top-[78px] left-4 right-4 z-40 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-3 shadow-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
