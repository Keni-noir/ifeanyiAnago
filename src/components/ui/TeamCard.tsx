"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TeamCardProps {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  fullBio?: string[];
  featured?: boolean;
  image?: StaticImageData | string;
}

export default function TeamCard({
  name,
  title,
  credentials,
  bio,
  fullBio,
  featured = false,
  image,
}: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const Avatar = ({ size }: { size: "lg" | "xl" }) => {
    const dim = size === "xl" ? "w-64 h-64" : "w-32 h-32";
    return (
      <div className={`${dim} rounded-full border-4 border-brass shadow-md bg-parchment-gold flex items-center justify-center overflow-hidden flex-shrink-0`}>
        {image ? (
          <Image
            src={image}
            alt={name}
            width={size === "xl" ? 128 : 96}
            height={size === "xl" ? 128 : 96}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span className="font-playfair font-bold text-3xl text-iac-gold">{initials}</span>
        )}
      </div>
    );
  };

  if (featured) {
    return (
      <div className="bg-white shadow-md rounded-sm flex flex-col items-center text-center pt-20 pb-8 px-8 relative">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <Avatar size="xl" />
        </div>

        <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-1">{name}</h3>
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-iac-gold mb-1">{title}</p>
        <p className="font-inter text-xs text-stone mb-5">{credentials}</p>
        <div className="w-8 h-[2px] bg-brass mb-5 mx-auto" />
        <p className="font-inter text-sm text-graphite leading-relaxed">{bio}</p>

        {fullBio && fullBio.length > 0 && (
          <div className="mt-5 w-full text-left">
            {expanded && (
              <div className="mt-4 space-y-3 mb-5">
                {fullBio.map((para, i) => (
                  <p key={i} className="font-inter text-sm text-graphite leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 mx-auto font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:text-iac-gold-light transition-colors duration-200"
            >
              {expanded ? (<>Close Profile <ChevronUp size={13} /></>) : (<>Read Full Profile <ChevronDown size={13} /></>)}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm hover:shadow-md transition-all duration-200 rounded-sm flex flex-col items-center text-center px-6 py-8">
      <div className="mb-4">
        <Avatar size="lg" />
      </div>

      <h3 className="font-playfair text-lg font-semibold text-charcoal mb-1">{name}</h3>
      <p className="font-inter text-xs font-semibold uppercase tracking-[0.08em] text-iac-gold mb-1">{title}</p>
      <p className="font-inter text-xs text-stone mb-4">{credentials}</p>
      <p className="font-inter text-sm text-graphite leading-relaxed">{bio}</p>

      {fullBio && fullBio.length > 0 && (
        <div className="mt-4 w-full">
          {expanded && (
            <div className="mt-3 mb-4 space-y-3 text-left">
              {fullBio.map((para, i) => (
                <p key={i} className="font-inter text-sm text-graphite leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 mx-auto font-inter text-xs font-semibold text-iac-gold uppercase tracking-[0.08em] hover:text-iac-gold-light transition-colors duration-200"
          >
            {expanded ? (<>Close <ChevronUp size={13} /></>) : (<>Read Full Bio <ChevronDown size={13} /></>)}
          </button>
        </div>
      )}
    </div>
  );
}