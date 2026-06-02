import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntakeForm from "@/components/IntakeForm";

const Intake = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24">
        <IntakeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Intake;
