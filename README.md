# Mostafa Elramady — Portfolio

A Vite + React + TypeScript portfolio focused on **Data Analysis, Business Intelligence, and practical Business Automation**.

The site is intentionally positioned around useful business outcomes rather than inflated seniority or a long tool list. Accounting experience is presented as business-domain context, not as the primary professional identity.

## Portfolio structure

- **Hero** — concise positioning and primary calls to action
- **About** — progression from business operations to data analysis, process improvement, and automation
- **Skills** — grouped by capability with realistic maturity labels
- **Featured Work** — curated case studies led by real-world business work
- **Project Detail Pages** — problem, business context, build, workflow, tools, screenshots, and business value
- **More Projects** — supporting practice/analytics work without competing with the strongest projects
- **Start a Project** — bilingual English/Arabic inquiry form for analytics and automation work

## Featured work

1. **Manufacturing MRP & Inventory System** — paid client project combining multiple Excel sources into Power BI planning and inventory views.
2. **AI-Assisted Purchase Invoice Automation** — real accounting workflow using OCR / AI-assisted extraction, validation, and structured handoff.
3. **HTML-to-SQL Data Automation** — practice workflow from HTML extraction through transformation into SQL.
4. **Saudi Childcare Operations Dashboard** — real business analytics work combining financial and operating views.

No unverified ROI, savings, testimonials, or fabricated performance metrics are used.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router
- Web3Forms for the project inquiry form
- Existing Supabase integration files are preserved for compatibility with the original project

## Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Routes

- `/` — main portfolio
- `/projects/:slug` — project case-study pages
- `/intake` — standalone project inquiry page
- all unknown routes — custom 404 page

## Design direction

The redesign keeps the original light background, cyan/blue accent, rounded UI, dark mode, and existing project assets. It reduces glassmorphism, removes project-database-style filters, strengthens typography and whitespace, and gives real business work much more visual priority.
