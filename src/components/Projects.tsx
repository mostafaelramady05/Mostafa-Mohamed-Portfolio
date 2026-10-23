import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Upload,
  ScanText,
  ShieldCheck,
  DatabaseZap,
  CheckCheck,
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Github,
  Linkedin,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import {
  featuredProjects,
  moreProjects,
  getProjectBySlug,
  type Project,
} from "@/data/projects";

const badgeClasses: Record<Project["badge"], string> = {
  "Paid Client Project":
    "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Real Business Use Case":
    "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
  "Personal / Practice Project": "bg-muted text-muted-foreground border-border",
};

const FeaturedProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const primaryImage = project.images?.[0];

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex h-full flex-col">
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge variant="outline" className={badgeClasses[project.badge]}>
              {project.badge}
            </Badge>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {project.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tools.slice(0, 5).map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <Button asChild className="rounded-xl">
              <Link to={`/projects/${project.slug}`}>
                View case study <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.links?.find((link) => link.type === "live") && (
              <Button asChild variant="outline" className="rounded-xl">
                <a
                  href={project.links.find((link) => link.type === "live")?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live work <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="order-first border-b border-border bg-muted/25">
          {primaryImage ? (
            <div className="aspect-[16/10] p-3 sm:p-4 flex items-center">
              <img
                src={primaryImage.src}
                alt={primaryImage.alt}
                loading="lazy"
                className="w-full h-full rounded-xl border border-border bg-background object-contain shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          ) : (
            <div className="h-full min-h-[260px] p-5 sm:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Workflow className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Workflow architecture
                </span>
              </div>
              <WorkflowDiagram steps={project.workflow} compact />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const ProjectLinkIcons = ({ project }: { project: Project }) => {
  const links = project.links ?? [];
  return (
    <div className="flex items-center gap-2">
      {links.slice(0, 3).map((link) => {
        const Icon =
          link.type === "github"
            ? Github
            : link.type === "linkedin"
              ? Linkedin
              : ExternalLink;
        return (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="w-9 h-9 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

const workflowStages = [
  {
    label: "Upload",
    icon: Upload,
    title: "Start with the original document.",
    description:
      "Accept the uploaded document and preserve its source file before processing.",
    outcome: "Original document preserved",
    tag: "DOCUMENT INTAKE",
  },
  {
    label: "Extract",
    icon: ScanText,
    title: "Turn the document into structured data.",
    description:
      "Classify the document and extract fields for the relevant accounting path.",
    outcome: "Structured document fields",
    tag: "AI-ASSISTED EXTRACTION",
  },
  {
    label: "Validate",
    icon: ShieldCheck,
    title: "Check the accounting details.",
    description:
      "Review buyer identity, required fields, duplicates, and supplier matching. Uncertain cases need review.",
    outcome: "Validated data or a review outcome",
    tag: "ACCOUNTING CONTROLS",
  },
  {
    label: "Record",
    icon: DatabaseZap,
    title: "Connect the result to Daftra.",
    description:
      "Route to the appropriate accounting transaction and attach the source document where applicable.",
    outcome: "ERP posting and attachment",
    tag: "ERP INTEGRATION",
  },
  {
    label: "Verify",
    icon: CheckCheck,
    title: "Confirm what actually happened.",
    description:
      "Check the saved result where needed, update processing status, and surface uncertain saves for reconciliation.",
    outcome: "Traceable processing outcome",
    tag: "VERIFICATION & TRACKING",
  },
];

const WorkflowShowcase = ({ href }: { href?: string }) => {
  const [active, setActive] = useState(0);
  const current = workflowStages[active];
  const Icon = current.icon;
  return (
    <div className="relative isolate overflow-hidden rounded-[1.5rem] border border-emerald-950 bg-[#102b26] text-white shadow-xl shadow-emerald-950/10">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none"
      />
      <div className="relative px-5 py-4 sm:px-7 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <Workflow className="w-4 h-4 text-emerald-200" />
          </span>
          <span className="text-sm font-semibold">Document → Accounting</span>
        </div>
        <span className="font-mono text-[10px] tracking-wider text-emerald-200/80">
          n8n × DAFTRA
        </span>
      </div>
      <div className="relative p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4 mb-7">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.18em] text-emerald-200/70 mb-2">
              EXPLORE THE PROCESS
            </p>
            <h4 className="text-xl sm:text-2xl font-semibold tracking-tight">
              One document. A connected process.
            </h4>
          </div>
          <span className="shrink-0 font-mono text-xs text-white/50 pt-1">
            0{active + 1} / 05
          </span>
        </div>
        <div className="relative mb-7">
          <div
            aria-hidden="true"
            className="absolute h-px bg-white/15 top-6 left-[10%] right-[10%]"
          />
          <div
            className="relative grid grid-cols-5 gap-1 sm:gap-2"
            role="group"
            aria-label="Explore workflow stages"
          >
            {workflowStages.map((stage, index) => {
              const StageIcon = stage.icon;
              return (
                <button
                  key={stage.label}
                  type="button"
                  aria-pressed={active === index}
                  aria-controls="workflow-stage-detail"
                  onClick={() => setActive(index)}
                  className="group flex flex-col items-center gap-3 min-w-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#102b26] py-1"
                >
                  <span
                    className={`relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border transition-all duration-200 ${active === index ? "bg-emerald-200 border-emerald-200 text-emerald-950 shadow-[0_0_24px_#a7f3d026] -translate-y-1" : "bg-[#183a32] border-white/15 text-emerald-100/70 group-hover:border-emerald-200/60"}`}
                  >
                    <StageIcon className="w-5 h-5" />
                  </span>
                  <span
                    className={`text-[10px] sm:text-xs font-medium ${active === index ? "text-emerald-200" : "text-white/65"}`}
                  >
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          id="workflow-stage-detail"
          aria-live="polite"
          aria-atomic="true"
          className="rounded-2xl border border-white/10 bg-black/15 p-5 min-h-[222px] sm:min-h-[208px]"
        >
          <p className="flex items-center gap-2 text-[9px] sm:text-[10px] tracking-[0.13em] font-semibold text-emerald-200/80 mb-3">
            <Icon className="w-3.5 h-3.5" />
            {current.tag}
          </p>
          <h5 className="text-lg font-semibold mb-2">{current.title}</h5>
          <p className="text-sm text-white/65 leading-relaxed">
            {current.description}
          </p>
          <p className="flex items-start gap-2 text-xs text-emerald-200 mt-4">
            <CheckCheck className="w-4 h-4 shrink-0" />
            {current.outcome}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-white/50">
            Interactive overview · Select a stage
          </p>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-200 hover:text-white transition-colors"
            >
              Explore all 132 nodes <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const invoiceProject = getProjectBySlug("purchase-invoice-automation");
  const invoiceLinks = invoiceProject?.links ?? [];
  const workflowUrl = invoiceLinks.find((link) => link.type === "live")?.url;
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-background relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute -left-48 top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-3">
            <BriefcaseBusiness className="w-4 h-4" /> 01 / SELECTED WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Real projects. Practical answers.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three client projects. Explore the problem, the analysis, and the
            delivered dashboard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <section
          className="mt-16 rounded-3xl border border-border bg-muted/30 p-6 sm:p-9"
          aria-labelledby="process-heading"
        >
          <p className="text-sm font-semibold text-primary mb-2">
            Process improvement
          </p>
          <h3
            id="process-heading"
            className="text-2xl sm:text-3xl font-bold mb-7"
          >
            Less repetitive work. More time for analysis.
          </h3>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-center">
            <article className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold text-primary mb-3">
                n8n · Daftra · Used in practice
              </p>
              <h4 className="text-xl font-bold mb-3">
                Invoice entry automation
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Upload a document, extract its data, validate accounting
                details, and post to Daftra with verification and status
                tracking.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {invoiceLinks.map((link) => (
                  <Button
                    key={link.url}
                    asChild
                    variant={link.type === "live" ? "default" : "outline"}
                    className="rounded-xl"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.type === "github" ? (
                        <Github className="mr-2 h-4 w-4" />
                      ) : (
                        <ExternalLink className="mr-2 h-4 w-4" />
                      )}
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
              <Link
                to="/projects/purchase-invoice-automation"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read the case study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </article>
            <WorkflowShowcase href={workflowUrl} />
          </div>
        </section>
        <details
          id="additional-work"
          className="mt-20 pt-10 border-t border-border scroll-mt-24 group/additional"
        >
          <summary className="cursor-pointer text-xl font-semibold mb-8 list-none flex justify-between items-center">
            Explore more analytics projects{" "}
            <span
              className="text-primary text-2xl group-open/additional:rotate-45 transition-transform"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">
                Additional work
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold">More Projects</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              Personal projects exploring finance, logistics, customer support,
              and data workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreProjects
              .filter(
                (project) => project.slug !== "purchase-invoice-automation",
              )
              .map((project) => (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <Badge
                        variant="outline"
                        className={`mb-3 ${badgeClasses[project.badge]}`}
                      >
                        {project.badge}
                      </Badge>
                      <h4 className="text-lg font-bold text-foreground">
                        {project.shortTitle}
                      </h4>
                    </div>
                    <ProjectLinkIcons project={project} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.summary}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.slice(0, 3).map((tool, index) => (
                        <span
                          key={tool}
                          className="text-xs text-muted-foreground"
                        >
                          {tool}
                          {index < Math.min(project.tools.length, 3) - 1
                            ? " ·"
                            : ""}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-sm font-semibold text-primary hover:underline shrink-0"
                    >
                      Case study
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </details>
      </div>
    </section>
  );
};

export default Projects;
