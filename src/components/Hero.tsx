import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section id="hero" className="pt-28 pb-10 sm:pt-36 sm:pb-16 overflow-hidden">
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 lg:gap-20 items-center">
        <div>
          <p className="eyebrow mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-primary mr-3" />
            DATA ANALYST · MOSTAFA ELRAMADY
          </p>
          <h1 className="text-[clamp(2.6rem,6.2vw,5.8rem)] leading-[1.04] tracking-[-0.055em] font-bold max-w-3xl">
            Making business
            <br className="hidden sm:block" /> data{" "}
            <span className="font-serif italic font-normal text-primary">
              make sense.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mt-7">
            I turn financial and operational data into clear Power BI
            dashboards, useful reports, and better ways to work.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mt-4">
            Accounting experience across Saudi businesses. Three client
            dashboards delivered. A practical approach to every business
            problem.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild size="lg" className="rounded-full px-7">
              <a href="#projects">
                Explore selected work <ArrowDown className="ml-3 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7"
            >
              <a href="mailto:mostafaelramady516@gmail.com">
                Let’s talk <ArrowUpRight className="ml-3 w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-8 text-xs font-semibold text-muted-foreground">
            <span>Power BI / DAX</span>
            <span>SQL</span>
            <span>Excel / Power Query</span>
            <span>n8n</span>
          </div>
        </div>
        <div className="relative w-full max-w-[350px] mx-auto lg:ml-auto">
          <div className="rounded-t-[9rem] rounded-b-3xl overflow-hidden border border-border bg-secondary p-2">
            <div className="relative w-full aspect-[4/5] rounded-t-[8.5rem] rounded-b-2xl overflow-hidden">
              <img
                src="/Mostafa-hero.png"
                alt="Mostafa Mohamed Elramady"
                className="absolute inset-0 w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="relative -mt-8 mx-4 rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/5">
            <p className="text-xs font-semibold text-primary mb-2">
              THE PERSPECTIVE I BRING
            </p>
            <p className="text-base font-semibold">
              Business understanding.
              <br />
              Analytical thinking. Practical solutions.
            </p>
          </div>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> Based in Egypt · Working with
            Saudi businesses
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 mt-12 sm:mt-16 border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border">
        {[
          [
            "01",
            "Business dashboards",
            "Manufacturing, inventory & hospitality",
          ],
          [
            "02",
            "Financial context",
            "Accounting across different business activities",
          ],
          [
            "03",
            "Process improvement",
            "Practical invoice workflows with n8n & Daftra",
          ],
        ].map(([n, title, detail]) => (
          <div key={n} className="py-5 sm:px-6 first:pl-0">
            <span className="font-mono text-xs text-primary">{n} /</span>
            <h2 className="font-semibold mt-2">{title}</h2>
            <p className="text-xs text-muted-foreground mt-1">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Hero;
