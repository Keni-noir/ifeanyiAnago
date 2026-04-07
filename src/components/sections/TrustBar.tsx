import { stats } from "@/data/siteData";

export default function TrustBar() {
  return (
    <section className="bg-slate">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-champagne/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-10 px-4">
              <span className="font-playfair text-3xl md:text-4xl font-bold text-brass leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-inter text-[10px] md:text-xs font-semibold uppercase tracking-[0.1em] text-champagne/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
