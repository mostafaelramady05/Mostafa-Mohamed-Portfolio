import {
  ArrowUpRight,
  BarChart3,
  Database,
  Table2,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    number: "01",
    title: "Understand business performance",
    description:
      "Build financial and operational views around the questions a business needs to answer.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    icon: BarChart3,
    evidence: "See the hospitality dashboard",
    href: "/projects/saudi-childcare-performance",
  },
  {
    number: "02",
    title: "Make scattered data usable",
    description:
      "Clean and combine Excel inputs into a consistent foundation for analysis.",
    tools: ["Excel", "Power Query", "Power Pivot"],
    icon: Table2,
    evidence: "See production & material planning",
    href: "/projects/manufacturing-mrp-inventory",
  },
  {
    number: "03",
    title: "Query and transform data",
    description:
      "Work with structured datasets and prepare data for reporting.",
    tools: ["SQL", "dbt"],
    icon: Database,
    evidence: "Explore my data projects",
    href: "/#additional-work",
  },
  {
    number: "04",
    title: "Improve recurring processes",
    description:
      "Connect document intake, accounting checks, ERP posting, and status tracking.",
    tools: ["n8n", "APIs", "ERP Systems", "Daftra"],
    icon: Workflow,
    evidence: "Explore the live invoice workflow",
    href: "https://mostafaelramady05.github.io/AI-Assisted-Purchase-Invoice-Automation/workflow-viewer.html",
  },
];
const Skills = () => (
  <section
    id="skills"
    className="py-16 sm:py-24 scroll-mt-20 border-y border-border bg-secondary/40"
  >
    <div className="container max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">02 / CAPABILITIES</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Tools are useful.
            <br />
            <span className="font-serif italic font-normal text-primary">
              What I do with them matters.
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-5 max-w-sm">
            From preparing the data to explaining the result, my focus is on
            making information useful for the people doing the work.
          </p>
        </div>
        <div className="space-y-3">
          {capabilities.map((c) => (
            <article
              key={c.number}
              className="bg-card border border-border rounded-2xl p-5 sm:p-6"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {c.tools.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md border border-border bg-secondary/60 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {c.href.startsWith("https:") ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 hover:underline"
                    >
                      {c.evidence}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      onClick={() => {
                        if (c.href.includes("#additional-work")) {
                          const section =
                            document.getElementById("additional-work");
                          if (section instanceof HTMLDetailsElement) {
                            section.open = true;
                            section.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }
                      }}
                      to={c.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-4 hover:underline"
                    >
                      {c.evidence}
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default Skills;
