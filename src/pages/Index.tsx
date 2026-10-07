import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import IntakeForm from "@/components/IntakeForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    document.documentElement.classList.toggle("dark", storedTheme === "true");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
