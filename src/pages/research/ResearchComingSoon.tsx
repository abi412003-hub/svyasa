import { Link } from "react-router-dom";
import { Construction } from "lucide-react";

interface Props {
  title: string;
}

export default function ResearchComingSoon({ title }: Props) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-24">
      <div className="w-16 h-16 rounded-full bg-[hsl(var(--teal))]/10 flex items-center justify-center mb-6">
        <Construction className="text-[hsl(var(--teal))]" size={28} />
      </div>
      <h1 className="font-['Playfair_Display',serif] text-3xl text-[hsl(var(--navy))] font-bold mb-3">
        {title}
      </h1>
      <p className="text-[hsl(var(--muted-foreground))] text-lg mb-8 max-w-md">
        This section is currently being built. Check back soon.
      </p>
      <Link
        to="/research"
        className="inline-flex items-center gap-2 bg-[hsl(var(--saffron))] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[hsl(var(--saffron-dark))] transition-colors"
      >
        ← Back to Research
      </Link>
    </div>
  );
}
