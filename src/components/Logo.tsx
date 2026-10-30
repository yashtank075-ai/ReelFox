import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  width = 240,
  height = 58,
  showTagline = false,
}) => {
  return (
    <Link href="/" className={`inline-flex flex-col group ${className}`} aria-label="ReelFox Media Home">
      <div className="relative flex items-center">
        <Image
          src="/reelfox-logo.jpg"
          alt="ReelFox Media"
          width={width}
          height={height}
          priority
          className="object-contain w-auto h-10 sm:h-12 lg:h-13 transition-opacity duration-150 group-hover:opacity-95"
        />
      </div>
      {showTagline && (
        <span className="text-xs tracking-widest text-[#444444] font-semibold uppercase mt-1 pl-1">
          Create. Promote. Grow.
        </span>
      )}
    </Link>
  );
};
