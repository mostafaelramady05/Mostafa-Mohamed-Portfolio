import { motion } from "framer-motion";
import { ArrowRight, Building2, Database, GraduationCap, RefreshCw, Workflow } from "lucide-react";

const progression = [
  { label: "Business Operations", icon: Building2 },
  { label: "Data Analysis", icon: Database },
  { label: "Process Improvement", icon: RefreshCw },
  { label: "Automation", icon: Workflow },
];

const facts = [
  "Fourth-year Business Information Systems student at Tanta University, with an Excellent academic standing.",
  "General Accountant since May 2025, working remotely from Egypt with an accounting office serving Saudi companies across different industries.",
  "Accounting work includes sales and purchase invoices, tax returns, and zakat returns.",
  "Freelance data analysis: three dashboard projects delivered across manufacturing, inventory, and children's hospitality.",
];

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/25 border-y border-border/60 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">An analyst who understands the business.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Working with multiple Saudi businesses gives me first-hand experience with financial records, business processes, and the questions behind the numbers.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I bring that context to data analysis: understanding the problem, building a useful report, and finding ways to make recurring work faster.
            </p>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <div className="grid sm:grid-cols-4 gap-3 mb-8">
              {progression.map((step, index) => (
                <div key={step.label} className="relative">
                  <div className="rounded-2xl border border-border bg-background p-4 h-full">
                    <step.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="text-sm font-semibold leading-snug">{step.label}</p>
                  </div>
                  {index < progression.length - 1 && (
                    <ArrowRight className="hidden sm:block absolute -right-[18px] top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 z-10" />
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Where I am now</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-7 gap-y-4">
                {facts.map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
