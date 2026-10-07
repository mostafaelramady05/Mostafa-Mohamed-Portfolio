import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Linkedin, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-28 pb-20">
        <section className="container max-w-6xl mx-auto px-4">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to featured work
          </Link>

          <div className="grid lg:grid-cols-[1fr_0.72fr] gap-10 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary">{project.badge}</Badge>
                <Badge variant="outline">{project.category}</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.04] mb-6">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">{project.summary}</p>
            </div>

            <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">Tools used</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span key={tool} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground">{tool}</span>
                ))}
              </div>
              {project.links?.length ? (
                <div className="space-y-2">
                  {project.links.map((link) => {
                    const Icon = link.type === "github" ? Github : link.type === "linkedin" ? Linkedin : ExternalLink;
                    return (
                      <Button key={link.url} asChild variant={link.type === "live" ? "default" : "outline"} className="w-full justify-between rounded-xl">
                        <a href={link.url} target="_blank" rel="noreferrer">
                          {link.label}<Icon className="w-4 h-4" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              ) : null}
            </aside>
          </div>
        </section>

        {project.images?.length ? (
          <section className="container max-w-6xl mx-auto px-4 mt-14">
            <div className={`grid gap-5 ${project.images.length > 1 ? "lg:grid-cols-2" : "grid-cols-1"}`}>
              {project.images.map((image) => (
                <figure key={image.src} className="rounded-3xl border border-border bg-card p-3 sm:p-4 shadow-sm overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full rounded-2xl border border-border/60 bg-muted object-cover" />
                  {image.caption && <figcaption className="px-2 pt-3 pb-1 text-sm text-muted-foreground">{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="container max-w-6xl mx-auto px-4 mt-16">
          <div className="grid md:grid-cols-2 gap-5">
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">01 / Problem</p>
              <h2 className="text-2xl font-bold mb-3">What needed fixing</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </article>
            <article className="rounded-2xl border border-border bg-card p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">02 / Context</p>
              <h2 className="text-2xl font-bold mb-3">Business context</h2>
              <p className="text-muted-foreground leading-relaxed">{project.businessContext}</p>
            </article>
          </div>

          <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">03 / Build</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">What I built</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.built.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-muted/40 p-4">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm leading-relaxed text-foreground/[0.85]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-border bg-card p-6 sm:p-8 mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">04 / Workflow</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">How it works</h2>
            <WorkflowDiagram steps={project.workflow} />
          </article>

          <article className="rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 sm:p-8 mt-5">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3">05 / Value</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Result / business value</h2>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">{project.value}</p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
