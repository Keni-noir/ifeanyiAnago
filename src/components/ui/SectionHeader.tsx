interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`font-inter text-xs font-semibold uppercase tracking-[0.12em] mb-4 ${
            light ? "text-champagne" : "text-iac-gold"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-playfair text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <span
        className={`block mt-5 mb-0 h-[3px] w-10 ${centered ? "mx-auto" : ""} ${
          light ? "bg-champagne" : "bg-brass"
        }`}
      />
      {subtitle && (
        <p
          className={`mt-5 font-inter text-base md:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-graphite"
          } ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
