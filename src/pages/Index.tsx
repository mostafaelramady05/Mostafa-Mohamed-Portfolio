import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Certifications from "@/components/Certifications"; 
import IntakeForm from "@/components/IntakeForm"; 
import Footer from "@/components/Footer";

const Index = () => {
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
