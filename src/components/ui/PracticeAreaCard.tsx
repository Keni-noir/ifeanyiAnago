import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface PracticeAreaCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  keyServices?: string[];
}

export default function PracticeAreaCard({
  icon: Icon,
  title,
  description,
  href,
  keyServices,
}: PracticeAreaCardProps) {
  return (
    <div className="group bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-sm flex flex-col">
      {/* Gold top bar */}
      <div className="h-[3px] bg-brass group-hover:bg-iac-gold transition-colors duration-200" />

      <div className="p-8 flex flex-col flex-1">
        <div className="w-10 h-10 flex items-center justify-center mb-5">
          <Icon size={36} strokeWidth={1.5} className="text-iac-gold" />
        </div>

        <h3 className="font-playfair text-xl md:text-2xl font-semibold text-charcoal mb-3">
          {title}
        </h3>

        <p className="font-inter text-sm text-graphite leading-relaxed mb-5">{description}</p>

        {keyServices && keyServices.length > 0 && (
          <ul className="space-y-1.5 mb-6">
            {keyServices.map((service) => (
              <li key={service} className="flex items-start gap-2 font-inter text-xs text-stone">
                <span className="text-brass mt-1 flex-shrink-0">—</span>
                {service}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] group-hover:gap-3 transition-all duration-200"
          >
            Explore
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
