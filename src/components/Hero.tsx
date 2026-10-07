import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, FileText, MapPin, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-[92vh] flex items-center bg-background pt-24 pb-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-28 -right-28 w-[34rem] h-[34rem] bg-primary/[0.08] rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.08fr_0.72fr] gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-6"
            >
              <BriefcaseBusiness className="w-4 h-4" />
              Data Analyst · Business Intelligence · Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[4.7rem] font-extrabold tracking-[-0.045em] leading-[1.02] mb-6"
            >
              I turn business data and repetitive work into
              <span className="gradient-text"> useful systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7"
            >
              I build dashboards, reporting workflows, and practical automations that help businesses organize data, reduce repetitive handling, and review operations more clearly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8"
            >
              {["Power BI reporting", "Excel systems", "SQL workflows", "n8n + OCR automation"].map((item) => (
                <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground shadow-sm">
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              <Button size="lg" asChild className="rounded-xl px-6">
                <a href="#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-xl px-6">
                <a href="#contact">Contact Me</a>
              </Button>
              <a
                href="https://drive.google.com/file/d/1Zi06Rc7nrwTXAgqySf6rZkHXPGKlMZru/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
              >
                <FileText className="w-4 h-4" /> View CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="w-4 h-4 text-primary" /> Egypt · Experience with Egyptian and Saudi business workflows
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative max-w-md mx-auto lg:max-w-none w-full"
          >
            <div className="absolute -inset-5 rounded-[2.4rem] bg-primary/[0.08] blur-2xl" />
            <div className="relative rounded-[2rem] border border-border bg-card p-3 sm:p-4 shadow-xl shadow-black/[0.04] dark:shadow-black/20">
              <div className="relative overflow-hidden rounded-[1.45rem] bg-muted aspect-[4/5]">
                <img
                  src="/Mostafa-hero.png"
                  alt="Mostafa Mohamed Elramady"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="rounded-2xl border border-white/[0.15] bg-black/[0.35] backdrop-blur-md p-4 text-white">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 mb-2">
                      <Workflow className="w-4 h-4" /> Current focus
                    </div>
                    <p className="font-semibold leading-snug">Business reporting + practical process automation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
