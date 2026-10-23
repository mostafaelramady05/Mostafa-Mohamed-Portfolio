import { useState } from "react";
import {
  Upload,
  ScanText,
  ShieldCheck,
  DatabaseZap,
  CheckCheck,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

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

export default WorkflowShowcase;
