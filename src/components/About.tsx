import { motion } from "framer-motion";
import { ArrowRight, Building2, Database, GraduationCap, RefreshCw, Workflow } from "lucide-react";

const progression = [
  { label: "Business Operations", icon: Building2 },
  { label: "Data Analysis", icon: Database },
  { label: "Process Improvement", icon: RefreshCw },
  { label: "Automation", icon: Workflow },
];

const facts = [
  "Final-year Business Information Systems student — graduating June 2027.",
  "Currently working with accounting operations for Saudi companies.",
  "Paid freelance experience building a manufacturing MRP / inventory solution.",
  "Strong Excel, working Power BI, intermediate SQL, and practical beginner-level Python.",
  "Hands-on use of n8n, APIs, OCR / AI-assisted extraction, and web/data extraction workflows.",
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-muted/25 border-y border-border/60 scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold text-primary mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">Business context first. Tools second.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My accounting work gave me useful exposure to how companies actually operate: financial workflows, repetitive manual steps, messy spreadsheets, and the points where better reporting or automation can remove friction.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              That pushed my focus from simply working with business data toward building clearer reporting systems and practical workflows around it. I’m still early in my career, so this portfolio focuses on what I have actually built—not inflated titles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
