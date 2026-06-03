import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Github, BarChart3, Search, X, Filter, ExternalLink } from "lucide-react";

// تعريف شكل المشروع (Type)
type Project = {
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image?: string;
};

// ==========================================
// مشاريعك الحقيقية (Static Data) - تقدر تعدل فيها براحتك هنا
// ==========================================
const myProjects: Project[] = [
  {
    title: "Fortune Capital | MRP & Inventory Dashboard",
    description: "Advanced dashboard for Material Requirements Planning (MRP) and direct production tracking. Features precise inventory movement analysis to support financial and investment decision-making.",
    technologies: ["Power BI", "SQL", "Excel", "DAX"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiMTVhYWM2YTgtZDIyNy00ZTIyLWFiODEtNzAzMjU0YmMyMzhhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9", // لو مفيش امسح السطر ده
    image: "/fort-capital.png", // دي الصورة اللي هتظهر
  },
  {
    title: "Childcare Center Financial Analysis (Jeddah)",
    description: "Comprehensive financial analysis and P&L tracking dashboard. Includes an advanced customer segmentation model to enhance operational efficiency and drive revenue growth in the Saudi market.",
    technologies: ["Power BI", "Excel", "Daftra ERP"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiNTg2OTY0NjMtNGU5MC00ZGM5LWE5MTktM2VhZGM2YmU2ZjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    image: "/jeddah-childcare.png",
  },
  {
    title: "Wuzzuf Job Market Scraper & Analyzer",
    description: "End-to-end data engineering pipeline extracting job market data via web scraping. Transforms raw data into an interactive dashboard highlighting in-demand skills and labor market trends.",
    technologies: ["Python", "BeautifulSoup", "Power BI", "Web Scraping"],
    github_url: "https://github.com/mostafaelramady05/Wuzzuf-Jobs-Analysis",
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiNmRhOWUyYmItMDA1Ni00MDQ3LWFlZGUtYjY4MTExODdkNjEzIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    image: "/wuzzuf.png",
  }
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(myProjects);
  const [commonTechs, setCommonTechs] = useState<string[]>([]);

  const uniqueTechnologies = [...new Set(myProjects.flatMap((p) => p.technologies || []))];

  // تجميع أكثر التقنيات استخداماً
  useEffect(() => {
    const techCount = new Map<string, number>();
    myProjects.forEach((p) =>
      p.technologies?.forEach((t) => techCount.set(t, (techCount.get(t) || 0) + 1))
    );
    setCommonTechs(
      Array.from(techCount.entries())
        .filter(([, c]) => c > 0) // عدلتها عشان يظهر كله
        .sort((a, b) => b[1] - a[1])
        .map(([t]) => t)
        .slice(0, 5)
    );
  }, []);

  // الفلترة والبحث
  useEffect(() => {
    let result = [...myProjects];
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const exactTech = uniqueTechnologies.find((t) => t.toLowerCase() === q);
      if (exactTech && !selectedTechnology) {
        result = result.filter((p) => p.technologies?.includes(exactTech));
      } else {
        result = result.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.description?.toLowerCase().includes(q) ||
            p.technologies?.some((t) => t.toLowerCase().includes(q))
        );
      }
    }
    if (selectedTechnology) {
      result = result.filter((p) => p.technologies?.includes(selectedTechnology));
    }
    if (sortBy === "tech") {
      result.sort((a, b) => (a.technologies?.join("") || "").localeCompare(b.technologies?.join("") || ""));
    }
    setFilteredProjects(result);
  }, [searchQuery, selectedTechnology, sortBy, uniqueTechnologies]);

  const highlightIfMatched = (t: string) => searchQuery && t.toLowerCase().includes(searchQuery.toLowerCase());

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-8">Showcasing data-driven solutions and financial dashboards</p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-7xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name or technology…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
            {searchQuery && (
              <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6" onClick={() => setSearchQuery("")}>
                <X className="h-3 w-3" />
              </Button>
            )}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-48 bg-card border-border">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Featured</SelectItem>
              <SelectItem value="tech">Tech Stack</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8 max-w-7xl mx-auto">
          {uniqueTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnology === tech ? "default" : "outline"}
              className="cursor-pointer text-xs px-3 py-1 rounded-full"
              onClick={() => setSelectedTechnology(selectedTechnology === tech ? "" : tech)}
            >
              {tech}
            </Badge>
          ))}
          {(selectedTechnology || searchQuery) && (
            <Button variant="ghost" size="sm" onClick={() => { setSelectedTechnology(""); setSearchQuery(""); }} className="text-xs h-6 px-2">
              Clear filters
            </Button>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Card className="flex flex-col h-full border border-border bg-card rounded-xl neon-glow-hover transition-all duration-300 hover:border-primary/40 overflow-hidden">
                  
                  {/* مكان الصورة (لو مفيش صورة هيظهر لون غامق) */}
                  <div className="w-full h-48 bg-slate-900 border-b border-border overflow-hidden">
                    {project.image ? (
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Image Available</div>
                    )}
                  </div>

                  <CardHeader className="pb-2 mt-2">
                    <CardTitle className="text-lg font-semibold text-foreground">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pb-2">
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className={`text-xs ${highlightIfMatched(tech) ? "bg-primary/20 font-medium" : "bg-muted"}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 flex flex-col gap-2">
                    {project.live_url && (
                      <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open(project.live_url, "_blank", "noopener,noreferrer")}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Dashboard
                      </Button>
                    )}
                    {project.github_url && (
                      <Button
                        variant={project.live_url ? "outline" : "default"}
                        className={`w-full ${project.live_url ? "" : "bg-primary hover:bg-primary/90 text-primary-foreground"}`}
                        onClick={() => window.open(project.github_url, "_blank", "noopener,noreferrer")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-muted-foreground">No projects match your search criteria.</p>
              <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedTechnology(""); }}>Clear filters</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
