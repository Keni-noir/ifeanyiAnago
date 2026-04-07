import Button from "./Button";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export default function CTABanner({
  title = "Ready to Protect Your Project?",
  subtitle = "Speak with a specialist today. No obligation, no jargon.",
  buttonLabel = "Schedule a Consultation",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-brass">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 py-14 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            <p className="mt-3 font-inter text-base text-white/85">{subtitle}</p>
          </div>
          <div className="flex-shrink-0">
            <Button href={buttonHref} variant="outline-dark" arrow>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
