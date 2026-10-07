import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, ExternalLink, Github, Linkedin, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { featuredProjects, moreProjects, type Project } from "@/data/projects";

const badgeClasses: Record<Project["badge"], string> = {
  "Paid Client Project": "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  "Real Business Use Case": "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
  "Personal / Practice Project": "bg-muted text-muted-foreground border-border",
};

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const primaryImage = project.images?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={`group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "lg:col-span-2" : ""}`}
    >
      <div className={`grid h-full ${index === 0 ? "lg:grid-cols-[1.15fr_0.85fr]" : "grid-cols-1"}`}>
        <div className="p-6 sm:p-8 flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge variant="outline" className={badgeClasses[project.badge]}>{project.badge}</Badge>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>

          <div className="rounded-2xl border border-border/70 bg-muted/30 p-4 mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">Business value</p>
            <p className="text-sm leading-relaxed text-foreground/[0.85]">{project.value}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-7">
            {project.tools.slice(0, 5).map((tool) => (
              <span key={tool} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground">
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
                <a href={project.links.find((link) => link.type === "live")?.url} target="_blank" rel="noreferrer">
                  Live work <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className={`border-t border-border bg-muted/25 ${index === 0 ? "lg:border-l lg:border-t-0" : ""}`}>
          {primaryImage ? (
            <div className="h-full min-h-[260px] p-4 sm:p-5 flex items-center">
              <img
                src={primaryImage.src}
                alt={primaryImage.alt}
                loading="lazy"
                className="w-full rounded-2xl border border-border bg-background object-cover shadow-sm transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          ) : (
            <div className="h-full min-h-[260px] p-5 sm:p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Workflow className="h-5 w-5" />
                <span className="text-sm font-semibold">Workflow architecture</span>
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
        const Icon = link.type === "github" ? Github : link.type === "linkedin" ? Linkedin : ExternalLink;
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

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-28 bg-background relative overflow-hidden scroll-mt-20">
      <div className="absolute -left-48 top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-3">
            <BriefcaseBusiness className="w-4 h-4" /> Selected business work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A smaller set of projects, ordered by business relevance—not by how many tools I can list. Each case study shows the problem, the workflow, what I built, and the value it creates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">Additional work</p>
              <h3 className="text-2xl sm:text-3xl font-bold">More Projects</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-xl">
              Supporting analytics and practice projects. Useful evidence of range, but intentionally secondary to the strongest real-world work above.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moreProjects.map((project) => (
              <article key={project.slug} className="rounded-2xl border border-border bg-card p-5 sm:p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <Badge variant="outline" className={`mb-3 ${badgeClasses[project.badge]}`}>{project.badge}</Badge>
                    <h4 className="text-lg font-bold text-foreground">{project.shortTitle}</h4>
                  </div>
                  <ProjectLinkIcons project={project} />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.summary}</p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, index) => (
                      <span key={tool} className="text-xs text-muted-foreground">{tool}{index < Math.min(project.tools.length, 3) - 1 ? " ·" : ""}</span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.slug}`} className="text-sm font-semibold text-primary hover:underline shrink-0">
                    Case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
