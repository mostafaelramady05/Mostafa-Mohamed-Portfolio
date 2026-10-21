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
    "slug": "manufacturing-mrp-inventory",
    "title": "Production & Material Planning",
    "shortTitle": "MRP & Production Planning",
    "category": "Business Intelligence",
    "badge": "Paid Client Project",
    "featured": true,
    "summary": "Translate production plans into material requirements and identify stock shortages.",
    "problem": "Production plans, bills of materials, and inventory needed to be connected to review material requirements without duplicating quantities.",
    "businessContext": "A paid dashboard project delivered for Fortune Capital, supporting manufacturing planning and material review.",
    "built": [
      "Prepared the Excel source data and built the Power BI model.",
      "Connected finished goods to raw materials through the bill of materials.",
      "Built DAX calculations for material requirements, shortages, and plan-versus-actual review.",
      "Created dynamic SVG status indicators for material and stock views."
    ],
    "workflow": [
      "Excel source files",
      "Data cleaning & shaping",
      "Power BI data model",
      "MRP + inventory views",
      "Planning review"
    ],
    "tools": [
      "Excel",
      "Power Query",
      "Power BI",
      "DAX"
    ],
    "value": "Delivered a Power BI dashboard for reviewing production requirements, available materials, and shortages in one place.",
    "images": [
      {
        "src": "/fort-capital.png",
        "alt": "MRP dashboard showing finished goods items and demand",
        "caption": "MRP view: finished-goods demand and item-level planning."
      }
    ],
    "links": [
      {
        "label": "View MRP Dashboard",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiYjM3ZWNjNjctMjUwYi00NGQzLTk5NjItNzQzODBiNDc0YzNhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      },
      {
        "label": "View Source Code",
        "type": "github",
        "url": "https://github.com/mostafaelramady05/Supply-Chain-MRP-Analytics"
      }
    ]
  },
  {
    "slug": "inventory-movement-aging",
    "title": "Inventory Movement & Aging",
    "shortTitle": "Inventory Insights",
    "category": "Analytics",
    "badge": "Paid Client Project",
    "featured": true,
    "summary": "Identify slow-moving stock, review inventory aging, and inspect balances by item.",
    "problem": "Inventory review needed to connect item balances with movement history, aging, and availability.",
    "businessContext": "A separate paid dashboard project delivered for Fortune Capital, focused on inventory analysis.",
    "built": [
      "Built an overview of item count, consumption value, and stock on hand.",
      "Visualized inbound and outbound inventory movements.",
      "Added inventory aging, movement categories, and availability views.",
      "Built a searchable balance page with quantities, prices, and stock values."
    ],
    "workflow": [
      "Inventory data",
      "Data preparation",
      "Power BI model",
      "Movement & aging analysis",
      "Item balance review"
    ],
    "tools": [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel"
    ],
    "value": "Delivered two report pages for reviewing inventory movement, aging, availability, and item balances.",
    "images": [
      {
        "src": "/Slow-Moving.png",
        "alt": "Inventory movement, aging, and availability dashboard"
      },
      {
        "src": "/jeddah-childcare.png",
        "alt": "Searchable inventory balance report by item"
      }
    ],
    "links": [
      {
        "label": "View Inventory Analysis",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiZWNiZWY4MmYtYzI1Yi00MGUyLWJkZTAtNjY4NmNiZjAxYzEyIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      }
    ]
  },
  {
    "slug": "saudi-childcare-performance",
    "title": "Children’s Hospitality Performance",
    "shortTitle": "Hospitality Performance",
    "category": "Analytics",
    "badge": "Paid Client Project",
    "featured": true,
    "summary": "Connect revenue, expenses, customer patterns, and operating performance in one dashboard.",
    "problem": "The business needed a clearer way to review revenue, expenses, profitability, enrollment patterns, and operating performance from its available business data.",
    "businessContext": "A freelance dashboard project delivered for a children’s hospitality center in Jeddah, Saudi Arabia, separately from my accounting role.",
    "built": [
      "Prepared and modeled financial and operating data.",
      "Built revenue, expense, profit, and average revenue per child views.",
      "Added monthly attendance, active customers, and revenue by day of week.",
      "Included age-group revenue and customer mix views for management review."
    ],
    "workflow": [
      "ERP / Excel data",
      "Data preparation",
      "Power BI model",
      "Business KPIs",
      "Management review"
    ],
    "tools": [
      "Power BI",
      "Excel",
      "Daftra ERP",
      "Data modeling"
    ],
    "value": "Delivered a management dashboard to support financial review, identify peak periods, and understand customer segments.",
    "images": [
      {
        "src": "/inventory-balance.png",
        "alt": "Hospitality performance overview with profit, attendance, and daily revenue"
      },
      {
        "src": "/childcare-revenue.png",
        "alt": "Hospitality revenue and expenses analysis by month and age group"
      }
    ],
    "links": [
      {
        "label": "View Live Dashboard",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiNTg2OTY0NjMtNGU5MC00ZGM5LWE5MTktM2VhZGM2YmU2ZjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      },
      {
        "label": "View Project Post",
        "type": "linkedin",
        "url": "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_my-first-freelance-milestone-im-happy-ugcPost-7429094116354998272-0K0J/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc"
      }
    ]
  },
  {
    "slug": "purchase-invoice-automation",
    "images": [{"src": "/invoice-workflow.svg", "alt": "Simplified invoice automation workflow with validation, ERP posting, verification, and human review", "caption": "Simplified overview of the operational workflow."}],
    "title": "Purchase Invoice Automation",
    "shortTitle": "Purchase Invoice Automation",
    "category": "Automation",
    "badge": "Real Business Use Case",
    "featured": false,
    "summary": "From document upload to validated ERP posting, with a traceable final status.",
    "problem": "Purchase invoices often require repetitive manual reading and data entry before the information can be used in an accounting workflow. The task is structured enough to automate, but still needs validation before anything is trusted downstream.",
    "businessContext": "An operational accounting workflow used to register invoices in Daftra, with validation, review states, and posting verification.",
    "built": [
      "Built document upload, classification, and structured extraction.",
      "Added buyer, duplicate, supplier, and required-field checks.",
      "Connected accounting paths to Daftra posting and document attachments.",
      "Added save verification, review states, and activity tracking."
    ],
    "workflow": [
      "Purchase invoice",
      "OCR / AI extraction",
      "Structured fields",
      "Validation",
      "Accounting workflow"
    ],
    "tools": [
      "n8n",
      "OCR",
      "AI-assisted extraction",
      "APIs",
      "Structured data"
    ],
    "value": "A working invoice-processing system that connects document intake, accounting checks, ERP posting, and traceable outcomes.",
    "links": [
      {
        "label": "Explore Live Workflow",
        "url": "https://mostafaelramady05.github.io/AI-Assisted-Purchase-Invoice-Automation/workflow-viewer.html",
        "type": "live"
      },
      {
        "label": "View on GitHub",
        "url": "https://github.com/mostafaelramady05/AI-Assisted-Purchase-Invoice-Automation",
        "type": "github"
      }
    ]
  },
  {
    "slug": "html-to-sql-automation",
    "title": "HTML-to-SQL Data Automation",
    "shortTitle": "HTML-to-SQL Automation",
    "category": "Data Workflow",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "An end-to-end data workflow that extracts structured information from HTML, transforms it, and loads it into a SQL database.",
    "problem": "Useful web or exported HTML data is often not ready for analysis. Copying it manually into spreadsheets or databases is repetitive and difficult to maintain when the source changes.",
    "businessContext": "This project focuses on the architecture behind a reusable extraction pipeline: identify the source structure, extract the fields, transform them into a stable schema, and load them into SQL.",
    "built": [
      "Parsed HTML content and selected the fields needed for structured storage.",
      "Cleaned and transformed extracted values before loading.",
      "Designed a repeatable load step into a SQL database.",
      "Separated extraction, transformation, and storage so each stage can be tested independently."
    ],
    "workflow": [
      "HTML source / file",
      "Extraction",
      "Cleaning & transformation",
      "SQL load",
      "Queryable dataset"
    ],
    "tools": [
      "Python",
      "BeautifulSoup",
      "SQL",
      "Data transformation"
    ],
    "value": "The project shows practical workflow thinking beyond dashboards: turning semi-structured source data into a dataset that can be queried and reused."
  },
  {
    "slug": "salla-call-center",
    "title": "E-Commerce Call Center Performance",
    "shortTitle": "Call Center Performance",
    "category": "Analytics",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "A Power BI dashboard for call-center KPIs such as answer rate, call volume, response speed, and agent performance.",
    "problem": "Customer-support data is difficult to use when operational KPIs are spread across raw tables and reports.",
    "businessContext": "A portfolio analytics project centered on e-commerce customer-support operations.",
    "built": [
      "Modeled support data for KPI reporting.",
      "Built trend and agent-performance views.",
      "Added interactive filtering for recurring analysis."
    ],
    "workflow": [
      "Support data",
      "Power Query",
      "Power BI model",
      "KPI dashboard"
    ],
    "tools": [
      "Power BI",
      "Power Query",
      "Excel",
      "DAX"
    ],
    "value": "Shows practical KPI design for customer-support operations.",
    "images": [
      {
        "src": "/salla.png",
        "alt": "Power BI call center performance dashboard"
      }
    ],
    "links": [
      {
        "label": "View Live Dashboard",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiMTk3YzA4NjktMjI3YS00YTk1LTkwYzYtM2EwNTMwMTI0MjgwIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      },
      {
        "label": "View Project Post",
        "type": "linkedin",
        "url": "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dax-powerbi-customerservice-ugcPost-7395590204092383232-YqCj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc"
      }
    ]
  },
  {
    "slug": "wuzzuf-job-market",
    "title": "Wuzzuf Job Market Scraper & Analyzer",
    "shortTitle": "Wuzzuf Job Market Analysis",
    "category": "Data Workflow",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "A scraping-to-dashboard project for exploring job-market data and in-demand skills.",
    "problem": "Job-market information is spread across many listings and is hard to compare manually.",
    "businessContext": "A practice project combining web extraction, data preparation, and BI reporting.",
    "built": [
      "Scraped job-listing data.",
      "Structured and cleaned extracted fields.",
      "Built an interactive Power BI view of market patterns."
    ],
    "workflow": [
      "Job listings",
      "Web scraping",
      "Data cleaning",
      "Power BI analysis"
    ],
    "tools": [
      "Python",
      "BeautifulSoup",
      "Power BI",
      "Web scraping"
    ],
    "value": "Demonstrates an end-to-end path from a web source to a reusable analytical dataset.",
    "images": [
      {
        "src": "/wuzzuf.png",
        "alt": "Wuzzuf job market Power BI dashboard"
      }
    ],
    "links": [
      {
        "label": "View Live Dashboard",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiNmRhOWUyYmItMDA1Ni00MDQ3LWFlZGUtYjY4MTExODdkNjEzIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      },
      {
        "label": "View Source Code",
        "type": "github",
        "url": "https://github.com/mostafaelramady05/Wuzzuf-Jobs-Analysis"
      },
      {
        "label": "View Project Post",
        "type": "linkedin",
        "url": "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_web-scraping-presentation-ugcPost-7405774835525689344-RpVd/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc"
      }
    ]
  },
  {
    "slug": "fleet-management",
    "title": "Logistics & Fleet Management Dashboard",
    "shortTitle": "Fleet Management Dashboard",
    "category": "Analytics",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "A Power BI dashboard for freight revenue, delivery volume, fleet costs, and vehicle-level analysis.",
    "problem": "Fleet performance data becomes difficult to review when revenue, costs, routes, and vehicle use are separated.",
    "businessContext": "A practice BI project focused on operational reporting for logistics.",
    "built": [
      "Modeled logistics data for KPI reporting.",
      "Built revenue and freight trend views.",
      "Added vehicle and cost analysis pages."
    ],
    "workflow": [
      "Logistics data",
      "Modeling",
      "Power BI",
      "Operational review"
    ],
    "tools": [
      "Power BI",
      "SQL",
      "Excel",
      "Data modeling"
    ],
    "value": "Shows the ability to structure operational KPIs into a multi-page management dashboard.",
    "images": [
      {
        "src": "/fleet.png",
        "alt": "Fleet and freight revenue Power BI dashboard"
      }
    ],
    "links": [
      {
        "label": "View Live Dashboard",
        "type": "live",
        "url": "https://app.powerbi.com/view?r=eyJrIjoiMDRiZjEyNzktNzlmOC00MWEyLThkM2EtOGY4YTFkM2RkOWVhIiwidCI6IjJiYjZlNWJjLWMxMDktNDdmYi05NDMzLWMxYzZmNGZhMzNmZiIsImMiOjl9"
      },
      {
        "label": "View Project Post",
        "type": "linkedin",
        "url": "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_dataanalysis-powerbi-logistics-ugcPost-7316913400729509889-tmIf/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc"
      }
    ]
  },
  {
    "slug": "pnl-analyzer",
    "title": "Profit & Loss Financial Analyzer",
    "shortTitle": "P&L Financial Analyzer",
    "category": "Analytics",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "A Power BI report for reviewing revenue, operating expenses, margins, and period performance.",
    "problem": "P&L data is easier to review when recurring financial lines and trends are presented consistently.",
    "businessContext": "A finance-domain analytics project using accounting knowledge to structure financial analysis.",
    "built": [
      "Structured P&L data for reporting.",
      "Created DAX measures for financial analysis.",
      "Built period and margin views."
    ],
    "workflow": [
      "Financial data",
      "Excel preparation",
      "Power BI model",
      "P&L review"
    ],
    "tools": [
      "Power BI",
      "DAX",
      "Excel",
      "Financial reporting"
    ],
    "value": "Demonstrates domain-aware BI design for financial reporting.",
    "images": [
      {
        "src": "/pnl.png",
        "alt": "Profit and loss Power BI analyzer"
      }
    ],
    "links": [
      {
        "label": "View Project Post",
        "type": "linkedin",
        "url": "https://www.linkedin.com/posts/mostafa-mohamed-2749b42a4_powerbi-financialmodeling-businessintelligence-ugcPost-7314747842475008000-dKi9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEl5g3gB5tQgIEgRUBwnrfOplSXgFpX89Mc"
      }
    ]
  },
  {
    "slug": "venus-care",
    "title": "Beauty Salon Performance Dashboard",
    "shortTitle": "Salon Performance Dashboard",
    "category": "Analytics",
    "badge": "Personal / Practice Project",
    "featured": false,
    "summary": "An operations dashboard for bookings, services, staff performance, and revenue review.",
    "problem": "Service businesses need a simple way to connect bookings, services, staff activity, and revenue in one report.",
    "businessContext": "A portfolio project focused on service-business analytics.",
    "built": [
      "Prepared booking and service data.",
      "Built client, service, and staff views.",
      "Designed recurring operating KPIs."
    ],
    "workflow": [
      "Business data",
      "Preparation",
      "Power BI model",
      "Operations dashboard"
    ],
    "tools": [
      "Power BI",
      "Excel",
      "DAX",
      "Data modeling"
    ],
    "value": "Shows how the same BI fundamentals can be applied to a service-business context.",
    "images": [
      {
        "src": "/Venus-Care.png",
        "alt": "Beauty salon Power BI performance dashboard"
      }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const moreProjects = projects.filter((project) => !project.featured);
export const getProjectBySlug = (slug?: string) => projects.find((project) => project.slug === slug);
