interface TeamCardProps {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  featured?: boolean;
  imagePlaceholder?: string;
}

export default function TeamCard({
  name,
  title,
  credentials,
  bio,
  featured = false,
  imagePlaceholder,
}: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  if (featured) {
    return (
      <div className="bg-white shadow-md rounded-sm flex flex-col items-center text-center pt-16 pb-8 px-8 relative">
        {/* Circular photo */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <div className="w-24 h-24 rounded-full border-4 border-brass shadow-md bg-parchment-gold flex items-center justify-center overflow-hidden">
            {imagePlaceholder ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imagePlaceholder} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="font-playfair font-bold text-2xl text-iac-gold">{initials}</span>
            )}
          </div>
        </div>

        <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-1">{name}</h3>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-iac-gold mb-1">{title}</p>
        <p className="font-inter text-xs text-stone mb-5">{credentials}</p>
        <div className="w-8 h-[2px] bg-brass mb-5 mx-auto" />
        <p className="font-inter text-sm text-graphite leading-relaxed line-clamp-4">{bio}</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-sm flex flex-col items-center text-center px-6 py-8">
      <div className="w-20 h-20 rounded-full border-[3px] border-brass bg-parchment-gold flex items-center justify-center mb-4 overflow-hidden">
        {imagePlaceholder ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imagePlaceholder} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="font-playfair font-bold text-xl text-iac-gold">{initials}</span>
        )}
      </div>
      <h3 className="font-playfair text-lg font-semibold text-charcoal mb-1">{name}</h3>
      <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-iac-gold mb-1">{title}</p>
      <p className="font-inter text-xs text-stone mb-4">{credentials}</p>
      <p className="font-inter text-sm text-graphite leading-relaxed line-clamp-3">{bio}</p>
    </div>
  );
}
