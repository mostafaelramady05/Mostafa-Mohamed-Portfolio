export type ProjectBadge = "Paid Client Project" | "Real Business Use Case" | "Personal / Practice Project";

export type ProjectLink = {
  label: string;
  url: string;
  type: "live" | "github" | "linkedin";
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Business Intelligence" | "Automation" | "Data Workflow" | "Analytics";
  badge: ProjectBadge;
  featured: boolean;
  summary: string;
  problem: string;
  businessContext: string;
  built: string[];
  workflow: string[];
  tools: string[];
  value: string;
  images?: { src: string; alt: string; caption?: string }[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "manufacturing-mrp-inventory",
    title: "Manufacturing MRP & Inventory System",
    shortTitle: "MRP & Inventory System",
    category: "Business Intelligence",
    badge: "Paid Client Project",
    featured: true,
    summary:
      "A Power BI-based planning and inventory solution built from multiple Excel files containing stock, product, and production-planning data.",
    problem:
      "The client was working across separate Excel files for inventory, products, and production planning. That made it harder to review material needs, finished-goods demand, and aging stock from one reliable view.",
    businessContext:
      "This was a paid manufacturing engagement. The goal was not to create a decorative dashboard; it was to organize operational data and make recurring planning and inventory review more usable.",
    built: [
      "Organized and standardized the existing Excel inputs for reporting.",
      "Built a Power BI data model for inventory, finished goods, and production-planning analysis.",
      "Created MRP-focused views for demand and material review.",
      "Added a dedicated slow-moving inventory view so aging stock could be reviewed as part of the same business problem.",
    ],
    workflow: ["Excel source files", "Data cleaning & shaping", "Power BI data model", "MRP + inventory views", "Planning review"],
    tools: ["Excel", "Power Query", "Power BI", "DAX"],
    value:
      "The solution brought disconnected planning and stock data into a more consistent review process. It gives the client a practical way to inspect demand, inventory movement, and slow-moving items without claiming unmeasured savings or performance gains.",
    images: [
      {
        src: "/fort-capital.png",
        alt: "MRP dashboard showing finished goods items and demand",
        caption: "MRP view: finished-goods demand and item-level planning.",
      },
      {
        src: "/Slow-Moving.png",
        alt: "Slow-moving inventory Power BI analysis",
        caption: "Slow-moving inventory analysis from the same engagement.",
      },
    ],
    links: [
      {
        label: "View MRP Dashboard",
        type: "live",
        url: "https://app.powerbi.com/view?r=eyJrIjoiYjM3ZWNjNjctMjUwYi00NGQzLTk5NjItNzQzODBiNDc0YzNhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      },
      {
        label: "View Inventory Analysis",
        type: "live",
        url: "https://app.powerbi.com/view?r=eyJrIjoiZWNiZWY4MmYtYzI1Yi00MGUyLWJkZTAtNjY4NmNiZjAxYzEyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      },
      {
        label: "View Source Code",
        type: "github",
        url: "https://github.com/mostafaelramady05/Supply-Chain-MRP-Analytics",
      },
    ],
  },
  {
    slug: "purchase-invoice-automation",
    title: "AI-Assisted Purchase Invoice Automation",
    shortTitle: "Purchase Invoice Automation",
    category: "Automation",
    badge: "Real Business Use Case",
    featured: true,
    summary:
      "A practical accounting workflow that extracts purchase-invoice data, structures it, validates it, and prepares it for the next accounting step.",
    problem:
      "Purchase invoices often require repetitive manual reading and data entry before the information can be used in an accounting workflow. The task is structured enough to automate, but still needs validation before anything is trusted downstream.",
    businessContext:
      "The workflow was developed around a real accounting process. The goal is to reduce repetitive entry work while keeping a human validation point instead of pretending extraction is always perfect.",
    built: [
      "Designed an invoice-processing flow around OCR / AI-assisted extraction.",
      "Mapped extracted fields into a structured data format.",
      "Added a validation stage before data continues into the accounting workflow.",
      "Kept the architecture modular so different invoice formats and downstream systems can be handled more safely.",
    ],
    workflow: ["Purchase invoice", "OCR / AI extraction", "Structured fields", "Validation", "Accounting workflow"],
    tools: ["n8n", "OCR", "AI-assisted extraction", "APIs", "Structured data"],
    value:
      "It demonstrates how a repetitive accounting task can be turned into a controlled workflow. The value is the process design and reduction of manual handling; no unsupported time-saving percentage is claimed.",
  },
  {
    slug: "html-to-sql-automation",
    title: "HTML-to-SQL Data Automation",
    shortTitle: "HTML-to-SQL Automation",
    category: "Data Workflow",
    badge: "Personal / Practice Project",
    featured: true,
    summary:
      "An end-to-end data workflow that extracts structured information from HTML, transforms it, and loads it into a SQL database.",
    problem:
      "Useful web or exported HTML data is often not ready for analysis. Copying it manually into spreadsheets or databases is repetitive and difficult to maintain when the source changes.",
    businessContext:
      "This project focuses on the architecture behind a reusable extraction pipeline: identify the source structure, extract the fields, transform them into a stable schema, and load them into SQL.",
    built: [
      "Parsed HTML content and selected the fields needed for structured storage.",
      "Cleaned and transformed extracted values before loading.",
      "Designed a repeatable load step into a SQL database.",
      "Separated extraction, transformation, and storage so each stage can be tested independently.",
    ],
    workflow: ["HTML source / file", "Extraction", "Cleaning & transformation", "SQL load", "Queryable dataset"],
    tools: ["Python", "BeautifulSoup", "SQL", "Data transformation"],
    value:
      "The project shows practical workflow thinking beyond dashboards: turning semi-structured source data into a dataset that can be queried and reused.",
  },
  {
    slug: "saudi-childcare-performance",
    title: "Saudi Childcare Operations Dashboard",
    shortTitle: "Childcare Operations Dashboard",
    category: "Analytics",
    badge: "Real Business Use Case",
    featured: true,
    summary:
      "A Power BI operations and P&L dashboard for a Saudi childcare business, combining financial reporting with customer and operating views.",
    problem:
      "The business needed a clearer way to review revenue, expenses, profitability, enrollment patterns, and operating performance from its available business data.",
    businessContext:
      "The project reflects real freelance business work in the Saudi market and demonstrates how domain context can shape a dashboard without turning accounting into the portfolio's primary identity.",
    built: [
      "Prepared business data from Excel and the existing ERP workflow.",
      "Built revenue, expense, and profit views for management review.",
      "Added operating breakdowns such as age-group and monthly performance views.",
      "Designed the report for recurring business review rather than one-off analysis.",
    ],
    workflow: ["ERP / Excel data", "Data preparation", "Power BI model", "Business KPIs", "Management review"],
    tools: ["Power BI", "Excel", "Daftra ERP", "Data modeling"],
    value:
      "The dashboard gives management a consolidated view of the business data already available to them. It supports recurring review without inventing a revenue or cost impact that was not measured.",
    images: [
      {
        src: "/jeddah-childcare.png",
        alt: "Arabic Power BI dashboard for childcare revenue and expenses",
        caption: "Arabic management view for revenue, expenses, profit, and enrollment mix.",
      },
    ],
    links: [
      {
        label: "View Live Dashboard",
        type: "live",
        url: "https://app.powerbi.com/view?r=eyJrIjoiNTg2OTY0NjMtNGU5MC00ZGM5LWE5MTktM2VhZGM2YmU2ZjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9",
      },
      {
        label: "View Project Post",
        type: "linkedin",
        url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_my-first-freelance-milestone-im-happy-ugcPost-7429094116354998272-0K0J/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc",
      },
    ],
  },
  {
    slug: "salla-call-center",
    title: "E-Commerce Call Center Performance",
    shortTitle: "Call Center Performance",
    category: "Analytics",
    badge: "Personal / Practice Project",
    featured: false,
    summary:
      "A Power BI dashboard for call-center KPIs such as answer rate, call volume, response speed, and agent performance.",
    problem: "Customer-support data is difficult to use when operational KPIs are spread across raw tables and reports.",
    businessContext: "A portfolio analytics project centered on e-commerce customer-support operations.",
    built: ["Modeled support data for KPI reporting.", "Built trend and agent-performance views.", "Added interactive filtering for recurring analysis."],
    workflow: ["Support data", "Power Query", "Power BI model", "KPI dashboard"],
    tools: ["Power BI", "Power Query", "Excel", "DAX"],
    value: "Shows practical KPI design for customer-support operations without claiming business impact that was not measured.",
    images: [{ src: "/salla.png", alt: "Power BI call center performance dashboard" }],
    links: [
      { label: "View Live Dashboard", type: "live", url: "https://app.powerbi.com/view?r=eyJrIjoiMTk3YzA4NjktMjI3YS00YTk1LTkwYzYtM2EwNTMwMTI0MjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9" },
      { label: "View Project Post", type: "linkedin", url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dax-powerbi-customerservice-ugcPost-7395590204092383232-YqCj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc" },
    ],
  },
  {
    slug: "wuzzuf-job-market",
    title: "Wuzzuf Job Market Scraper & Analyzer",
    shortTitle: "Wuzzuf Job Market Analysis",
    category: "Data Workflow",
    badge: "Personal / Practice Project",
    featured: false,
    summary: "A scraping-to-dashboard project for exploring job-market data and in-demand skills.",
    problem: "Job-market information is spread across many listings and is hard to compare manually.",
    businessContext: "A practice project combining web extraction, data preparation, and BI reporting.",
    built: ["Scraped job-listing data.", "Structured and cleaned extracted fields.", "Built an interactive Power BI view of market patterns."],
    workflow: ["Job listings", "Web scraping", "Data cleaning", "Power BI analysis"],
    tools: ["Python", "BeautifulSoup", "Power BI", "Web scraping"],
    value: "Demonstrates an end-to-end path from a web source to a reusable analytical dataset.",
    images: [{ src: "/wuzzuf.png", alt: "Wuzzuf job market Power BI dashboard" }],
    links: [
      { label: "View Live Dashboard", type: "live", url: "https://app.powerbi.com/view?r=eyJrIjoiNmRhOWUyYmItMDA1Ni00MDQ3LWFlZGUtYjY4MTExODdkNjEzIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9" },
      { label: "View Source Code", type: "github", url: "https://github.com/mostafaelramady05/Wuzzuf-Jobs-Analysis" },
      { label: "View Project Post", type: "linkedin", url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_web-scraping-presentation-ugcPost-7405774835525689344-RpVd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc" },
    ],
  },
  {
    slug: "fleet-management",
    title: "Logistics & Fleet Management Dashboard",
    shortTitle: "Fleet Management Dashboard",
    category: "Analytics",
    badge: "Personal / Practice Project",
    featured: false,
    summary: "A Power BI dashboard for freight revenue, delivery volume, fleet costs, and vehicle-level analysis.",
    problem: "Fleet performance data becomes difficult to review when revenue, costs, routes, and vehicle use are separated.",
    businessContext: "A practice BI project focused on operational reporting for logistics.",
    built: ["Modeled logistics data for KPI reporting.", "Built revenue and freight trend views.", "Added vehicle and cost analysis pages."],
    workflow: ["Logistics data", "Modeling", "Power BI", "Operational review"],
    tools: ["Power BI", "SQL", "Excel", "Data modeling"],
    value: "Shows the ability to structure operational KPIs into a multi-page management dashboard.",
    images: [{ src: "/fleet.png", alt: "Fleet and freight revenue Power BI dashboard" }],
    links: [
      { label: "View Live Dashboard", type: "live", url: "https://app.powerbi.com/view?r=eyJrIjoiMDRiZjEyNzktNzlmOC00MWEyLThkM2EtOGY4YTFkM2RkOWVhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9" },
      { label: "View Project Post", type: "linkedin", url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dataanalysis-powerbi-logistics-ugcPost-7316913400729509889-tmIf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc" },
    ],
  },
  {
    slug: "pnl-analyzer",
    title: "Profit & Loss Financial Analyzer",
    shortTitle: "P&L Financial Analyzer",
    category: "Analytics",
    badge: "Personal / Practice Project",
    featured: false,
    summary: "A Power BI report for reviewing revenue, operating expenses, margins, and period performance.",
    problem: "P&L data is easier to review when recurring financial lines and trends are presented consistently.",
    businessContext: "A finance-domain analytics project that uses accounting knowledge as domain context rather than a job-title identity.",
    built: ["Structured P&L data for reporting.", "Created DAX measures for financial analysis.", "Built period and margin views."],
    workflow: ["Financial data", "Excel preparation", "Power BI model", "P&L review"],
    tools: ["Power BI", "DAX", "Excel", "Financial reporting"],
    value: "Demonstrates domain-aware BI design for financial reporting.",
    images: [{ src: "/pnl.png", alt: "Profit and loss Power BI analyzer" }],
    links: [
      { label: "View Project Post", type: "linkedin", url: "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_powerbi-financialmodeling-businessintelligence-ugcPost-7314747842475008000-dKi9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc" },
    ],
  },
  {
    slug: "venus-care",
    title: "Beauty Salon Performance Dashboard",
    shortTitle: "Salon Performance Dashboard",
    category: "Analytics",
    badge: "Personal / Practice Project",
    featured: false,
    summary: "An operations dashboard for bookings, services, staff performance, and revenue review.",
    problem: "Service businesses need a simple way to connect bookings, services, staff activity, and revenue in one report.",
    businessContext: "A portfolio project focused on service-business analytics.",
    built: ["Prepared booking and service data.", "Built client, service, and staff views.", "Designed recurring operating KPIs."],
    workflow: ["Business data", "Preparation", "Power BI model", "Operations dashboard"],
    tools: ["Power BI", "Excel", "DAX", "Data modeling"],
    value: "Shows how the same BI fundamentals can be applied to a service-business context.",
    images: [{ src: "/Venus-Care.png", alt: "Beauty salon Power BI performance dashboard" }],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
export const getProjectBySlug = (slug?: string) => projects.find((project) => project.slug === slug);
