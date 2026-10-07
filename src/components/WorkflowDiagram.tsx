import { ArrowRight } from "lucide-react";

type WorkflowDiagramProps = {
  steps: string[];
  compact?: boolean;
};

const WorkflowDiagram = ({ steps, compact = false }: WorkflowDiagramProps) => {
  return (
    <div className={`grid gap-2 ${compact ? "grid-cols-1 sm:grid-cols-5" : "grid-cols-1 md:grid-cols-5"}`}>
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-center gap-2 min-w-0">
          <div className="flex-1 min-h-[74px] rounded-xl border border-border bg-background px-3 py-3 flex items-center justify-center text-center text-xs sm:text-sm font-medium text-foreground shadow-sm">
            {step}
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="hidden sm:block w-4 h-4 text-primary/70 shrink-0" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkflowDiagram;
