import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background px-4">
    <div className="text-center max-w-lg">
      <p className="text-sm font-semibold text-primary mb-3">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">That page is not part of the portfolio.</h1>
      <p className="text-muted-foreground mb-7">The link may be outdated, or the page may have been removed during the portfolio cleanup.</p>
      <Button asChild className="rounded-xl"><Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Return home</Link></Button>
    </div>
  </div>
);

export default NotFound;
