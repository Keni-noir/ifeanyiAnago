import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  height?: "sm" | "md" | "lg";
}

const heightMap = {
  sm: "min-h-[280px]",
  md: "min-h-[360px] md:min-h-[420px]",
  lg: "min-h-[420px] md:min-h-[480px]",
};

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  height = "md",
}: PageHeroProps) {
  return (
    <section
      className={`relative ${heightMap[height]} flex items-center bg-slate pt-20`}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 100%), url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 w-full py-16">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1.5 mb-6 flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="font-inter text-xs text-champagne/70 hover:text-champagne transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-inter text-xs text-champagne">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight size={12} className="text-champagne/40" />
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>

        {/* Gold rule */}
        <span className="block w-10 h-[3px] bg-brass mt-6" />

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-5 font-playfair italic text-lg md:text-xl text-champagne max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
