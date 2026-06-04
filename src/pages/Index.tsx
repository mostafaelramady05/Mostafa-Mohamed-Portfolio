import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import Certifications from "@/components/Certifications"; // 👈 عملنالها كومنت مؤقتاً
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Certifications /> */} {/* 👈 عملنالها كومنت عشان تخفيها دلوقتي ولما تعوزها ترجعها بسهولة */}
      <Contact /> 
      <Footer />
    </div>
  );
};

export default Index;
