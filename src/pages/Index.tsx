import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Certifications from "@/components/Certifications"; 
import IntakeForm from "@/components/IntakeForm"; 
import Footer from "@/components/Footer";

const Index = () => {
  // الكود ده بيجبر المكون الرئيسي للموقع يفتح لايت لو العميل داخل جديد والزرار بيفضل شغال عادي
  useEffect(() => {
    const storedTheme = localStorage.getItem("darkMode");
    if (storedTheme === "false" || storedTheme === null) {
      document.documentElement.classList.remove("dark");
    } else if (storedTheme === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Certifications /> */} 
      <IntakeForm /> 
      <Footer />
    </div>
  );
};

export default Index;