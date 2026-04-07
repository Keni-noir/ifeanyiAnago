import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-dark";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brass text-white hover:bg-burnished-gold",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white",
  ghost:
    "bg-transparent text-white border border-white hover:bg-white/10",
  "outline-dark":
    "bg-white text-brass border border-brass hover:bg-parchment-gold",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-inter text-xs font-semibold uppercase tracking-[0.08em] rounded-sm py-3.5 px-7 transition-all duration-200 min-h-[48px]";

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  fullWidth,
  arrow,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow && <ArrowRight size={14} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {arrow && <ArrowRight size={14} />}
    </button>
  );
}
