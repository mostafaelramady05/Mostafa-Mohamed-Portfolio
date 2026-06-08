import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Github, BarChart3, Search, X, Filter, ExternalLink, Linkedin } from "lucide-react"; // ضفت أيقونة لينكدان هنا

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  linkedin_url?: string; // ضفت المتغير ده هنا عشان الـ TypeScript ميعملش إيرور
  image?: string;
};

// مشاريعك الحقيقية
const myProjects: Project[] = [
  {
    title: "Fortune Capital | MRP & Inventory Dashboard",
    description: "Advanced dashboard for Material Requirements Planning (MRP) and direct production tracking. Features precise inventory movement analysis to support financial and investment decision-making.",
    technologies: ["Power BI","Excel", "DAX"],
    github_url: "https://github.com/mostafaelramady05/Supply-Chain-MRP-Analytics.git",
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiYjM3ZWNjNjctMjUwYi00NGQzLTk5NjItNzQzODBiNDc0YzNhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    image: "/fort-capital.png",
  },
  {
    title: "Fortune Capital | Slow-Moving Inventory Analysis",
    description: "Comprehensive analytical dashboard focusing on aging stock and slow-moving inventory. Highlights tied-up capital and provides strategic insights to optimize warehouse space, reduce holding costs, and improve cash flow.",
    technologies: ["Power BI", "Power Query", "Excel", "DAX"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiZWNiZWY4MmYtYzI1Yi00MGUyLWJkZTAtNjY4NmNiZjAxYzEyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9", 
    image: "", 
  },
  {
    title: "Fastrack Childcare Center | Perforamnce Analyzer",
    description: "Comprehensive financial analysis and P&L tracking dashboard. Includes an advanced customer segmentation model to enhance operational efficiency and drive revenue growth in the Saudi market.",
    technologies: ["Power BI", "Excel", "Daftra ERP"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiNTg2OTY0NjMtNGU5MC00ZGM5LWE5MTktM2VhZGM2YmU2ZjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    linkedin_url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_my-first-freelance-milestone-im-happy-ugcPost-7429094116354998272-0K0J/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc",
    image: "/jeddah-childcare.png",
  },
  {
    title: "Salla E-Commerce | Call Center Performance",
    description: "Interactive dashboard designed to monitor and optimize customer support operations for a Salla-based e-commerce store. Tracks critical KPIs including First Response Time (FRT), Average Handling Time (AHT), and Customer Satisfaction (CSAT) to evaluate agent productivity and elevate the overall customer experience.",
    technologies: ["Power BI", "Power Query", "Excel", "DAX"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiMTk3YzA4NjktMjI3YS00YTk1LTkwYzYtM2EwNTMwMTI0MjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    linkedin_url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dax-powerbi-customerservice-ugcPost-7395590204092383232-YqCj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc", // حطيت الفاصلة هنا
    image: "/salla.png",
  },
  {
    title: "Wuzzuf Job Market Scraper & Analyzer",
    description: "End-to-end data engineering pipeline extracting job market data via web scraping. Transforms raw data into an interactive dashboard highlighting in-demand skills and labor market trends.",
    technologies: ["Python", "BeautifulSoup", "Power BI", "Web Scraping"],
    linkedin_url:"https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_web-scraping-presentation-ugcPost-7405774835525689344-RpVd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc",
    github_url: "https://github.com/mostafaelramady05/Wuzzuf-Jobs-Analysis",
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiNmRhOWUyYmItMDA1Ni00MDQ3LWFlZGUtYjY4MTExODdkNjEzIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    image: "/wuzzuf.png",
  },
  {
    title: "Logistics & Fleet Management Dashboard",
    description: "An interactive dashboard designed to monitor and optimize logistics and fleet operations. Tracks key metrics such as fuel consumption, maintenance costs, vehicle utilization, and route efficiency to reduce operational expenses and ensure timely deliveries.",
    technologies: ["Power BI", "SQL", "Excel", "Data Modeling"],
    live_url: "https://app.powerbi.com/view?r=eyJrIjoiMDRiZjEyNzktNzlmOC00MWEyLThkM2EtOGY4YTFkM2RkOWVhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
    linkedin_url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dataanalysis-powerbi-logistics-ugcPost-7316913400729509889-tmIf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc",
    image: "/fleet.png",
  },
  {
    title: "Profit & Loss (P&L) Financial Analyzer",
    description: "A comprehensive financial reporting tool that automates the analysis of Profit & Loss statements. Provides deep insights into revenue trends, operating expenses, and gross margins, enabling stakeholders to track financial health and make data-driven budgetary decisions.",
    technologies: ["Power BI", "DAX", "Advanced Excel", "Financial Reporting"],
    live_url: "",
    linkedin_url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_powerbi-financialmodeling-businessintelligence-ugcPost-7314747842475008000-dKi9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc",
    image: "/pnl.png", // عدلت مسار الصورة هنا
  },
  {
    title: "Venus Care | Beauty Salon Performance & Revenue",
    description: "An interactive analytical dashboard developed for Venus Care, a women's beauty salon, to monitor daily operations and financial health. Tracks critical KPIs such as client bookings, service utilization, beautician performance, and revenue streams, empowering management with data-driven insights to enhance customer experience.",
    technologies: ["Power BI", "Excel", "DAX", "Data Modeling"],
    live_url: "", 
    image: "", 
  }
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(myProjects);
  const [commonTechs, setCommonTechs] = useState<string[]>([]);

  const uniqueTechnologies = [...new Set(myProjects.flatMap((p) => p.technologies || []))];

  useEffect(() => {
    const techCount = new Map<string, number>();
    myProjects.forEach((p) =>
      p.technologies?.forEach((t) => techCount.set(t, (techCount.get(t) || 0) + 1))
    );
    setCommonTechs(
      Array.from(techCount.entries())
        .filter(([, c]) => c > 0)
        .sort((a, b) => b[1] - a[1])
        .map(([t]) => t)
        .slice(0, 5)
    );
  }, []);

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
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* خلفية جمالية خفيفة */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text">Featured Projects</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
          Transforming complex data into clear, actionable financial and strategic dashboards.
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-6xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name or technology…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-card/50 backdrop-blur-sm border-border/50 h-12 rounded-xl focus:border-primary transition-colors"
            />
            {searchQuery && (
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-transparent" onClick={() => setSearchQuery("")}>
                <X className="h-4 w-4 text-muted-foreground" />
              </Button>
            )}
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-56 bg-card/50 backdrop-blur-sm border-border/50 h-12 rounded-xl">
              <Filter className="mr-2 h-4 w-4 text-primary" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Featured First</SelectItem>
              <SelectItem value="tech">Group by Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {uniqueTechnologies.map((tech) => (
            <Badge
              key={tech}
              variant={selectedTechnology === tech ? "default" : "outline"}
              className={`cursor-pointer px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedTechnology === tech 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                : "bg-card/40 border-border/50 hover:border-primary/50 hover:bg-primary/5"
              }`}
              onClick={() => setSelectedTechnology(selectedTechnology === tech ? "" : tech)}
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Grid (Glassmorphism Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="group flex flex-col h-full border border-border/50 bg-card/20 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
                  
                  {/* Image Container with Zoom effect */}
                  <div className="relative w-full h-56 bg-muted/30 overflow-hidden border-b border-border/30">
                    {project.image ? (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <BarChart3 className="w-12 h-12 opacity-20" />
                      </div>
                    )}
                    
                    {/* Floating badge over image */}
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-background/80 backdrop-blur-md text-foreground border-border/50">
                        {project.technologies[0]}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3 pt-5">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, j) => (
                        <Badge
                          key={j}
                          variant="secondary"
                          className={`text-[10px] px-2.5 py-1 rounded-md border ${
                            highlightIfMatched(tech) 
                              ? "bg-primary/20 border-primary/30 text-primary font-semibold" 
                              : "bg-muted/50 border-transparent text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2 pb-6 px-6 flex flex-col gap-3">
                    {/* زرار عرض الداشبورد لايف */}
                    {project.live_url && (
                      <Button variant="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20 rounded-xl h-11" onClick={() => window.open(project.live_url, "_blank", "noopener,noreferrer")}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Live Dashboard
                      </Button>
                    )}
                    
                    {/* زرار عرض بوست لينكدان (لو موجود) */}
                    {project.linkedin_url && (
                      <Button variant="outline" className="w-full border-primary/50 text-foreground hover:bg-primary/10 rounded-xl h-11" onClick={() => window.open(project.linkedin_url, "_blank", "noopener,noreferrer")}>
                        <Linkedin className="mr-2 h-4 w-4 text-blue-500" />
                        View LinkedIn Post
                      </Button>
                    )}

                    {/* زرار عرض الجيت هاب (لو موجود) */}
                    {project.github_url && (
                      <Button
                        variant={project.live_url ? "outline" : "default"}
                        className={`w-full rounded-xl h-11 ${project.live_url ? "border-border/50 hover:bg-muted/50 text-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/20"}`}
                        onClick={() => window.open(project.github_url, "_blank", "noopener,noreferrer")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Source Code
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-lg text-foreground font-medium mb-2">No projects found</p>
              <p className="text-muted-foreground mb-6">We couldn't find any projects matching your search criteria.</p>
              <Button onClick={() => { setSearchQuery(""); setSelectedTechnology(""); }} className="rounded-xl">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
