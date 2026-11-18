import { useEffect } from "react";
import { Loader2 } from "lucide-react";

/** Sends visitors of an old internal URL straight to an external site. */
const ExternalRedirect = ({ to, label }: { to: string; label: string }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <Loader2 className="w-6 h-6 animate-spin text-primary" />
      <p>
        Taking you to{" "}
        <a href={to} className="text-primary underline">
          {label}
        </a>
        …
      </p>
    </div>
  );
};

export default ExternalRedirect;
